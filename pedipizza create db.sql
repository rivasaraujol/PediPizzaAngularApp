DELIMITER
	//
DROP DATABASE IF EXISTS pedipizza //
CREATE DATABASE pedipizza //

CREATE TABLE pedipizza.usuarios(
telefono VARCHAR(30) NOT NULL,
pass VARCHAR(1024) NOT NULL,
nombre VARCHAR(50),
cedula VARCHAR(18),
direccion VARCHAR(200),
PRIMARY KEY(telefono)
)ENGINE = INNODB;//

CREATE TABLE pedipizza.platos(
id INT NOT NULL AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
descripcion VARCHAR(500) NOT NULL,
precio DOUBLE NOT NULL,
img VARCHAR(100),
existencia INT NOT NULL, 
PRIMARY KEY(id)
)ENGINE = INNODB;//

CREATE TABLE pedipizza.pedidos(
id INT NOT NULL AUTO_INCREMENT,
telefono VARCHAR(30) NOT NULL,
nombre VARCHAR(50),
cedula VARCHAR(18),
direccion VARCHAR(200),
img BLOB NOT NULL,
validado BOOLEAN NOT NULL,
PRIMARY KEY(id)
)ENGINE = INNODB;//

CREATE TABLE pedipizza.platospedidos(
id INT NOT NULL AUTO_INCREMENT,
cantidad INT NOT NULL,
idpedido INT NOT NULL,
nombre VARCHAR(50) NOT NULL,
descripcion VARCHAR(500) NOT NULL,
precio DOUBLE NOT NULL,
img VARCHAR(100),
PRIMARY KEY(id),
FOREIGN KEY (idpedido) REFERENCES pedidos(id) ON DELETE CASCADE
)ENGINE = INNODB;//
