CREATE DATABASE sofka_prueba;
USE sofka_prueba;
CREATE TABLE users
(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_text VARCHAR(20) NOT NULL UNIQUE,
    password_text VARCHAR(20) NOT NULL
);
CREATE TABLE category
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(60) NOT NULL
);
CREATE TABLE client
(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    users_id INT NOT NULL,
    max_points INT NOT NULL DEFAULT 0
);
ALTER TABLE client ADD FOREIGN KEY(users_id) REFERENCES users(id);
CREATE TABLE question
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category_id INT NOT NULL,
    question_text VARCHAR(125) NOT NULL
);
ALTER TABLE question ADD FOREIGN KEY(category_id) REFERENCES category(id);
CREATE TABLE answer
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    answer_text VARCHAR(125) NOT NULL,
    question_id INT NOT NULL,
    point SMALLINT NOT NULL DEFAULT 0
);
ALTER TABLE answer ADD FOREIGN KEY(question_id) REFERENCES question(id);
INSERT INTO category(name) VALUES('Matematicas');
INSERT INTO question(question_text,category_id) VALUES('¿Cuanto da la Resta: 25 - 19?',1);
INSERT INTO answer(question_id,answer_text,point)
VALUES(1,'44',0),
(1,'-44',0),
(1,'6',100),
(1,'-6',0);
INSERT INTO question(question_text,category_id) VALUES('¿Cuanto da la suma: 17+45?:',1);
INSERT INTO answer(question_id,answer_text,point)
VALUES(2,'21',0),
(2,'62',100),
(2,'63',0),
(2,'12',0);
INSERT INTO question(question_text,category_id) VALUES('¿Cuanto da esta operacion matematica:25 - 25 * 2 + 5?:',1);
INSERT INTO answer(question_id,answer_text,point)
VALUES(3,'5',0),
(3,'-20',100),
(3,'8',0),
(3,'-12',0);
INSERT INTO question(question_text,category_id) VALUES('¿Cuanto da esta resta: 21 + 3 * 0 + 9?:',1);
INSERT INTO answer(question_id,answer_text,point)
VALUES(4,'9',0),
(4,'8',0),
(4,'12',0),
(4,'30',100);
INSERT INTO question(question_text,category_id) VALUES('¿Cuanto da la division 4324 / 4?:',1);
INSERT INTO answer(question_id,answer_text,point)
VALUES(5,'4',0),
(5,'1081',100),
(5,'1281',0),
(5,'981',0);
INSERT INTO category(name) VALUES('Programacion');
INSERT INTO question(question_text,category_id) VALUES('como se le conoce a esta expresion en javascript?const {user,password} = userData; ',2);
INSERT INTO answer(question_id,answer_text,point)
VALUES(6,'Spread',0),
(6,'Rest',0),
(6,'Destructuracion',100),
(6,'Instanciacion',0);
INSERT INTO question(question_text,category_id) VALUES('¿Para que se usa la palabra clave DELETE en Javascript?',2);
INSERT INTO answer(question_id,answer_text,point)
VALUES(7,'Destruir un atributo de un objeto',100),
(7,'Establecer un atributo de un objeto como undefined',0),
(7,'Establecer un atributo de un objeto como null',0),
(7,'Establecer un atributo de un objeto como nan',0);
INSERT INTO question(question_text,category_id) VALUES('¿Que significa NAN?',2);
INSERT INTO answer(question_id,answer_text,point)
VALUES(8,'Que un objeto se encuentra vacio',0),
(8,'No Asignado Nunca',0),
(8,'Not A Number',100),
(8,'Not A Null',0);
INSERT INTO question(question_text,category_id) VALUES('function numeros(...nums){console.log(nums)} para que se usan los ... en una function javascript',2);
INSERT INTO answer(question_id,answer_text,point)
VALUES(9,'Indicar que se puede enviar cualquier valor',0),
(9,'Indicar que solo se pueden enviar datos tipo number',0),
(9,'Indicar que solo se pueden enviar datos no null',0),
(9,'Indicar que se pueden enviar cualquier cantidad de valores separados por ,',100);
INSERT INTO question(question_text,category_id) VALUES('¿Que hace el operador === ?:',2);
INSERT INTO answer(question_id,answer_text,point)
VALUES(10,'Valida que 2 valores sean totalmente iguales valor y tipo de dato',100),
(10,'Valida que 2 valores sean iguales, solo en valor sin importar el tipo de dato',0),
(10,'Valida que 2 valores sean iguales solo en tipo de dato',0),
(10,'Valida que 2 valores sean distintos',0);
INSERT INTO category(name) VALUES('Sociales');
INSERT INTO question(question_text,category_id) VALUES('¿Para localizar lugares sobre la superficie terrestre se usa?',3);
INSERT INTO answer(question_id,answer_text,point)
VALUES(11,'La balanza',0),
(11,'El termometro',0),
(11,'Los puntos cardinales',100),
(11,'El telescopio',0);
INSERT INTO question(question_text,category_id) VALUES('¿En el lugar que me sirve de orientacion es por donde sale el sol dicho lugar es el oriente, que otro nombre recibe este punto cardinal',3);
INSERT INTO answer(question_id,answer_text,point)
VALUES(12,'Este',100),
(12,'Oeste',0),
(12,'Sureste',0),
(12,'Noroeste',0);
INSERT INTO question(question_text,category_id) VALUES('¿El instrumento que se utiliza para ubicarnos es:?',3);
INSERT INTO answer(question_id,answer_text,point)
VALUES(13,'El telescopio',0),
(13,'El cronometro',0),
(13,'La brujula',100),
(13,'El termometro',0);
INSERT INTO question(question_text,category_id) VALUES('¿Las 2 formas de representacion cartografica son?',3);
INSERT INTO answer(question_id,answer_text,point)
VALUES(14,'Cuadrado y circulo',0),
(14,'Rectangulo y planisferio',0),
(14,'Mapas y atlas',0),
(14,'Globo terraqueo y el planisferio',100);
INSERT INTO question(question_text,category_id) VALUES('¿Cual es el oceano mas grande del mundo?',3);
INSERT INTO answer(question_id,answer_text,point)
VALUES(15,'Indico',0),
(15,'Atlantico',0),
(15,'Pacifico',100),
(15,'Antartico',0);
INSERT INTO category(name) VALUE('Español');
INSERT INTO question(question_text,category_id) VALUES('Persona o grupo de personas que recibe un mensaje',4);
INSERT INTO answer(question_id,answer_text,point)
VALUES(16,'Emisor',0),
(16,'Canal',0),
(16,'Mensaje',0),
(16,'Receptor',100);
INSERT INTO question(question_text,category_id) VALUES('¿Medio fisico a traves del cual se transmite el mensaje del emisor al receptor',4);
INSERT INTO answer(question_id,answer_text,point)
VALUES(17,'Canal',100),
(17,'Mensaje',0),
(17,'Codigo',0),
(17,'Receptor',0);
INSERT INTO question(question_text,category_id) VALUES('¿Es la informacion que transmite el emisor al receptor?',4);
INSERT INTO answer(question_id,answer_text,point)
VALUES(18,'Canal',0),
(18,'Codigo',0),
(18,'Mensaje',100),
(18,'Emisor',0);
INSERT INTO question(question_text,category_id) VALUES('¿Son canales e instrumentos para informacion y comunicar a la sociedad actual acerca de hechos o acontecimientos que suceden?',4);
INSERT INTO answer(question_id,answer_text,point)
VALUES(19,'Medios de transporte',0),
(19,'Elementos de la comunicacion',0),
(19,'Partes de la comunicacion',0),
(19,'Medios de comunicaciones',100);
INSERT INTO question(question_text,category_id) VALUES('¿Son medios de comunicacion masivo?',4);
INSERT INTO answer(question_id,answer_text,point)
VALUES(20,'Carta de invitacion',0),
(20,'Telefono celular',0),
(20,'Periodico, internet, television',100),
(20,'Teatro y marionetas',0);
INSERT INTO category(name) VALUE('Entretenimiento');
INSERT INTO question(question_text,category_id) VALUES('¿Cual es el hijo mayor de Homero Simpson?',5);
INSERT INTO answer(question_id,answer_text,point)
VALUES(21,'Nelson',0),
(21,'Milhouse',0),
(21,'Lisa',0),
(21,'Bart',100);
INSERT INTO question(question_text,category_id) VALUES('¿Cual es el segundo nombre Bart Simpson?',5);
INSERT INTO answer(question_id,answer_text,point)
VALUES(22,'Jojo',100),
(22,'Jay',0),
(22,'Bartolomeo',0),
(22,'No tiene',0);
INSERT INTO question(question_text,category_id) VALUES('¿Cual es el color de pelo de Marge Simpson?',5);
INSERT INTO answer(question_id,answer_text,point)
VALUES(23,'Morado',0),
(23,'Rojo',0),
(23,'Azul',100),
(23,'Amarillo',0);
INSERT INTO question(question_text,category_id) VALUES('¿Cual es la edad de Bart Simpson?',5);
INSERT INTO answer(question_id,answer_text,point)
VALUES(24,'12',0),
(24,'8',0),
(24,'11',0),
(24,'10',100);
INSERT INTO question(question_text,category_id) VALUES('¿Cual es la edad de Lisa Simpson?',5);
INSERT INTO answer(question_id,answer_text,point)
VALUES(25,'12',0),
(25,'7',0),
(25,'8',100),
(25,'10',0);
INSERT INTO category(name) VALUE('Entretenimiento');
INSERT INTO question(question_text,category_id) VALUES('¿Cual es el hijo mayor de Homero Simpson?',5);
INSERT INTO answer(question_id,answer_text,point)
VALUES(21,'Nelson',0),
(21,'Milhouse',0),
(21,'Lisa',0),
(21,'Bart',100);
INSERT INTO question(question_text,category_id) VALUES('¿Cual es el segundo nombre Bart Simpson?',5);
INSERT INTO answer(question_id,answer_text,point)
VALUES(22,'Jojo',100),
(22,'Jay',0),
(22,'Bartolomeo',0),
(22,'No tiene',0);
INSERT INTO question(question_text,category_id) VALUES('¿Cual es el color de pelo de Marge Simpson?',5);
INSERT INTO answer(question_id,answer_text,point)
VALUES(23,'Morado',0),
(23,'Rojo',0),
(23,'Azul',100),
(23,'Amarillo',0);
INSERT INTO question(question_text,category_id) VALUES('¿Cual es la edad de Bart Simpson?',5);
INSERT INTO answer(question_id,answer_text,point)
VALUES(24,'12',0),
(24,'8',0),
(24,'11',0),
(24,'10',100);
INSERT INTO question(question_text,category_id) VALUES('¿Cual es la edad de Lisa Simpson?',5);
INSERT INTO answer(question_id,answer_text,point)
VALUES(25,'12',0),
(25,'7',0),
(25,'8',100),
(25,'10',0);
