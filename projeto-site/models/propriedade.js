'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	let Usuario = sequelize.define('Usuario', {
		id_propriedade: {
			field: 'id_propriedade',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		estado_propriedade: {
			field: 'estado_propriedade',
			type: DataTypes.STRING,
			allowNull: false
		},
		endereco_propriedade: {
			field: 'endereco_propriedade',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		nome_propriedade: {
			field: 'nome_propriedade',
			type: DataTypes.STRING,
			allowNull: false

		},
	},
    {
		
			tableName: 'propriedade',
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		});

	return Usuario;
};
