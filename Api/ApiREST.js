const mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pedipizza"
});
connection.connect((err) => {
    if (err){
        console.log("Error en la conexion a la base de datos");
        console.log(err.message);
        return;
    }
});

const express = require("express");
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) =>{
    console.log("Peticion: ", req.method, req.url);
    next();
})

app.route("/api/login")
    .post((req, res) =>{
        connection.query("SELECT telefono FROM usuarios WHERE usuarios.telefono = ? && usuarios.pass = ?", [req.body.telefono, req.body.pass], (error, usuario) => {
            if (error) { return res.status(500).send("Error en la comprobacion de usuario"); }
            if (usuario.length < 1) { return res.status(404).send("Usuario no encontrado"); }
            res.status(200).json("OK");
        });
    });

app.route("/api/carta")
    .get((req,res) => {
        connection.query("SELECT * FROM platos", (error, carta) => {
            if (error) { return res.status(500).send("Error obteniendo carta"); }
            res.status(200).json(carta);
        });
    })
    .post((req,res) => {
       connection.query("INSERT INTO platos (nombre, descripcion, precio, img, existencia) VALUES (?,?,?,?,?)", [req.body.nombre, req.body.descripcion, req.body.precio, req.body.img, req.body.existencia], (error) => {
           if (error) { return res.status(500).send("Error insertando plato"); }
           res.status(201).json("Elemento insertado con exito");
       })
    });
app.get("/api/carta/:search", (req, res) => {
    connection.query("SELECT * FROM platos WHERE nombre = ?", [req.params.search], (error, carta) => {
        if (error) { return res.status(500).send("Error obteniendo carta"); }
        res.status(200).json(carta);
    });
});
app.route("/api/carta/:id")
    .get((req,res) => {
        connection.query("SELECT * FROM platos WHERE platos.id = ?", req.params.id, (error, plato) => {
            if (error) { return res.status(500).send("Error en la busqueda del plato"); }
            if (plato.length < 1) { return res.status(404).send("Plato con id " + req.params.id + " no encontrado"); }
            res.status(200).json(plato);
        });
    })
    .put((req,res) => {
        connection.query("UPDATE platos SET nombre = ?, descripcion = ?, precio = ?, img = ?, existencia = ? WHERE platos.id = ?", [req.body.nombre, req.body.descripcion, req.body.precio, req.body.img, req.body.existencia, req.params.id], (error, result) => {
            if (error) { return res.status(500).send("Error en la modificacion del plato"); }
            if (result.affectedRows < 1) { return res.status(404).send("Plato con id " + req.params.id + " no encontrado"); }
            res.status(200).json("Elemento modificado con exito");
        });
    })
    .delete((req,res) => {
        connection.query("DELETE FROM platos WHERE platos.id = ?", req.params.id, (error, result) => {
            if (error) { return res.status(500).send("Error en la eliminacion del plato"); }
            if (result.affectedRows < 1) { return res.status(404).send("Plato con id " + req.params.id + " no encontrado"); };
            res.status(200).json("Elemento eliminado con exito");
        });
    });

app.route("/api/pedido")
    .get((req,res) => {
        connection.query("SELECT * FROM pedidos", (error, pedidos) => {
            if (error) { return res.status(500).send("Error obteniendo pedidos"); }
            res.status(200).json(pedidos);
        });
    })
    .post((req,res) => {
        if (req.body.platos && req.body.platos.length > 0){
            function InsertPedido() {
                return new Promise((resolve, reject) => {
                    connection.query("INSERT INTO pedidos (telefono, nombre, cedula, direccion, img, validado) VALUES (?,?,?,?,?,false)", [req.body.telefono, req.body.nombre, req.body.cedula, req.body.direccion, req.body.img], (error, result) => {
                        if (error) { return reject(error); }
                        resolve(result);
                    })
                })
            }
            function GetPedidoID(table){
                return new Promise((resolve, reject) => {
                        connection.query("SELECT id FROM " + table + " WHERE Id=(SELECT LAST_INSERT_ID())", (error,result) => {
                        if (error) { return reject(error); }
                        resolve(result[0].id);
                    })
                })
            }
            function InsertLineasPedido(id, table){
                return new Promise((resolve, reject) => {
                    let values = '';
                    for (let i = 0; i < req.body.platos.length; i++) {
                        if (i < req.body.platos.length - 1) {
                            values += '(' + req.body.platos[i].cantidad + ',' + id + ',\'' + req.body.platos[i].nombre + '\',\'' + req.body.platos[i].descripcion + '\',' + req.body.platos[i].precio + ',\'' + req.body.platos[i].img +'\'),';
                        } else {
                            values += '(' + req.body.platos[i].cantidad + ',' + id + ',\'' + req.body.platos[i].nombre + '\',\'' + req.body.platos[i].descripcion + '\',' + req.body.platos[i].precio + ',\'' + req.body.platos[i].img +'\')';
                        }
                    }
                    connection.query("INSERT INTO " + table + " (cantidad, idpedido, nombre, descripcion, precio, img) VALUES " + values, (error, result) => {
                        if (error) { return reject(error); }
                        resolve(result);
                    });
                })
            }
            function ThrowFallo(error){
                console.log(error)
                return res.status(500).send("Error en la creacion de pedido");
            }
            InsertPedido().then(
                GetPedidoID('pedidos').then(
                    o => InsertLineasPedido(o,'platospedidos').then(() => {
                        res.status(201).json("Pedido creado con exito");
                    }).catch((err) => {
                        ThrowFallo(err)
                    })
                ).catch((err) => {
                    ThrowFallo(err)
                })
            ).catch((err) => ThrowFallo(err));
        }
        else{
            return res.status(500).send("Error en la creacion de pedido");
        }
    });
app.route("/api/pedido/:id")
    .get((req,res) => {
        connection.query("SELECT * FROM pedidos WHERE pedidos.id = ?", req.params.id, (error, pedido) => {
            if (error) { return res.status(500).send("Error en la busqueda del pedido"); }
            if (pedido.length < 1) { return res.status(404).send("Pedido con id " + req.params.id + " no encontrado"); }
            res.status(200).json(pedido);
        });
    })
    .delete((req,res) => {
        connection.query("DELETE FROM pedidos WHERE pedidos.id = ?", req.params.id, (error, result) => {
            if (error) { console.log(error); return res.status(500).send("Error en la eliminacion del pedido"); }
            if (result.affectedRows < 1) { return res.status(404).send("Pedido con id " + req.params.id + " no encontrado"); };
            res.status(200).json("Pedido eliminado con exito");
        });
    });
app.route("/api/pedido/:id/platos")
    .get((req,res) => {
        connection.query("SELECT * FROM platospedidos WHERE idpedido = ?", req.params.id, (error, platospedido) => {
            if (error) { return res.status(500).send("Error obteniendo platos"); }
            res.status(200).json(platospedido);
        });
    });

app.route("/api/usuario")
.get((req, res) =>{
    connection.query("SELECT * FROM usuarios", (error, usuarios) => {
        if (error) { return res.status(500).send("Error obteniendo usuarios"); }
        res.status(200).json(usuarios);
    });
})
.post((req, res) =>{
    connection.query("INSERT INTO usuarios(telefono, pass, nombre, cedula, direccion, tipo) VALUES (?,?,?,?,?,false)", [req.body.telefono, req.body.pass, req.body.nombre, req.body.cedula, req.body.direccion], (error) => {
        if (error) {
            if (error.code == "ER_DUP_ENTRY") { return res.status(409).send("Telefono de usuario duplicado en base de datos"); }
            else { return res.status(500).send("Error en la creacion de usuario"); }
        }
        res.status(201).json("Usuario creado con exito");
    });
});
app.route("/api/usuario/:id")
    .get((req, res) =>{
        connection.query("SELECT * FROM usuarios WHERE usuarios.telefono = ?", req.params.id, (error, user) => {
            if (error) { return res.status(500).send("Error en la busqueda del usuario"); }
            if (user.length < 1) { return res.status(404).send("Usuario con id " + req.params.id + " no encontrado"); }
            res.status(200).json(user);
        });
    })
    .put((req, res) =>{
        connection.query("UPDATE usuarios SET nombre = ?, cedula = ?, direccion = ?, tipo = ? WHERE usuarios.telefono = ?", [req.body.nombre, req.body.cedula, req.body.direccion, req.body.tipo, req.params.id], (error, result) => {
            if (error) {
                return res.status(500).send("Error en la modificacion del usuario");
            }
            if (result.affectedRows < 1) { return res.status(404).send("Usuario con id " + req.params.id + " no encontrado"); };
            res.status(200).json("Usuario modificado con exito");
        });
    })
    .delete((req, res) =>{
        connection.query("DELETE FROM usuarios WHERE usuarios.telefono = ?", req.params.id, (error, result) => {
            if (error) { return res.status(500).send("Error en la eliminacion del usuario"); }
            if (result.affectedRows < 1) { return res.status(404).send("Usuario con id " + req.params.id + " no encontrado"); };
            res.status(200).json("Usuario eliminado con exito");
        });
    });

app.get("/api/aprobar/:id",(req,res) => {
    connection.query("UPDATE pedidos SET validado = true WHERE pedidos.id = ?", req.params.id,(error, result) => {
        if (error) { return res.status(500).send("Error aplicando la validacion del pedido"); }
        if (result.affectedRows < 1) { return res.status(404).send("Pedido con id " + req.params.id + " no encontrado"); };
        res.status(200).json("Pedido aprovado con exito");
    });
});


app.listen(3018, function () {
    console.log("Servidor escuchando en puerto 3018");
});

