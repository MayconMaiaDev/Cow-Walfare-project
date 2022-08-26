'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	let Usuario = sequelize.define('Usuario', {
		idUsuario: {
			field: 'id_usuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nomeUsuario: {
			field: 'nome_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefoneUsuario: {
			field: 'telefone_usuario',
			type: DataTypes.INTEGER,
			allowNull: true
		},
		enderecoUsuario: {
			field: 'endereco_usuario',
			type: DataTypes.STRING,
			allowNull: true

		},
		estadoUsuario: {
			field: 'estado_usuario',
			type: DataTypes.STRING,
			allowNull: true

		},
		cnpjUsuario: {
			field: 'cnpj',
			type: DataTypes.INTEGER,
			allowNull: false

		},
		emailUsuario: {
			field: 'email_usuario',
			type: DataTypes.STRING,
			allowNull: false

		},
		senhaUsuario: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false

		}
	},
		{
			tableName: 'usuario',
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		});

	return Usuario;
};
