DELIMITER
	//
INSERT INTO pedipizza.usuarios
(telefono, pass, nombre, cedula, direccion)
VALUES 
('9292', '1234', NULL, NULL, NULL)
//
INSERT INTO pedipizza.platos
(id, nombre, descripcion, precio, img, existencia)
VALUES
(NULL, 'Pizza de pollo', 'masa fina, salsa, queso y pollo', 4.2, './assets/img/PAG2/pizza.png', 0),
(NULL, 'Pizza de jamon', 'masa fina, salsa, queso y jamon', 7, './assets/img/PAG2/pizza.png', 0),
(NULL, 'Pizza de queso', 'masa fina, salsa, queso', 10, './assets/img/PAG2/pizza.png', 0)
//
INSERT INTO pedipizza.pedidos
(id, telefono, nombre, cedula, direccion, img, validado)
VALUES
(NULL, 'telefono', 'test1', 'ci', 'dir', 'blob', false),
(NULL, 'telefono', 'test2', 'ci', 'dir', 'blob', false)
//
INSERT INTO pedipizza.platospedidos
(id, cantidad, idpedido, nombre, descripcion, precio, img)
VALUES
(NULL, 2, 1, 'Pizza de pollo','masa fina, salsa, queso y pollo', 4.2, './assets/img/PAG2/pizza.png'),
(NULL, 2, 1, 'Pizza de jamon','masa fina, salsa, queso y jamon', 7, './assets/img/PAG2/pizza.png'),
(NULL, 1, 2, 'Pizza de queso','masa fina, salsa, queso', 10, './assets/img/PAG2/pizza.png'),
(NULL, 3, 2, 'Pizza de pollo','masa fina, salsa, queso y pollo', 4.2, './assets/img/PAG2/pizza.png')
//