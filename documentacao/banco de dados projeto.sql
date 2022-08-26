create database projeto;
use projeto;
create table usuario(id_usuario int primary key auto_increment,
nome_usuario varchar (45),
telefone_usuario bigint,
endereco_usuario varchar(50),
estado_usuario varchar (45),
cnpj bigint,
email_usuario varchar (80),
senha varchar(16)
);

insert into usuario values
(null,'igor',11964453399,'rua antonio do campo','São Paulo',41496823800,'igor.leite@bandtec.com.br','senha123'),
(null,'luscas',11965845392,'rua domingos silva','São Paulo',47454535828,'lucas.pinto@bandtec.com.br','senha321'),
(null,'isaque',11963453635,'rua carajeru','São Paulo',41463446800,'isaque.trindade@bandtec.com.br','senha231');


create table propriedade(id_propriedade int primary key auto_increment,
estado_propriedade varchar(45),
endereco_propriedade varchar (45),
nome_propriedade varchar(45)
)auto_increment = 100;

insert into propriedade values
(null, 'mato grosso sul','rua matogrossense','fazenda vaca feliz'),
(null, 'goias','rua mirasol do oeste','fazenda oliveira'),
(null, 'cuiaba','rua miranda','fazenda jao da serra');

create table acesso (FK_propriedade_id int,
FK_usuario int,
foreign key(FK_propriedade_id) references propriedade (id_propriedade),
foreign key(FK_usuario) references usuario (id_usuario)
);

insert into acesso values
(100,1),
(101,2),
(102,3);

create table sensores(id_sensor int primary key auto_increment,
nome_sensor varchar(45),
tipo_sensor varchar (30),
FK_propriedade int,
foreign key (FK_propriedade) references propriedade (id_propriedade)
)auto_increment = 1000;

insert into sensores values
(null,'lm35','temperatura',100),
(null,'tdh11','temperatura e umidade',101),
(null,'lm36','temperatura',102);


create table dados_arduino(id_dados_aruduino int primary key identity(1,1),
temperatura float,
umidade float,
data_e_hora datetime,
FK_id_propriedade int,
FK_sensor int,
foreign key(FK_id_propriedade) references propriedade (id_propriedade),
foreign key(FK_sensor) references sensores (id_sensor),
);

insert into dados_arduino values
(23.6,60.5,'2019-09-23 12:45:20',100,1000);

insert into dados_arduino values
(24.0,80.7,'2019-05-09 11:22:50',101,1001);

insert into dados_arduino values
(20.2,55.4,'2019-02-13 09:35:09',102,1002);

select * from usuario,propriedade,acesso,sensores,dados_arduino; 
