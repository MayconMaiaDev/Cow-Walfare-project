'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	let Leitura = sequelize.define('Leitura',{
		idDadosArduino: {
			field: 'id_dados_arduino',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: false

		},
		temperatura: {
			field: 'temperatura',
			type: DataTypes.REAL,
			primaryKey: true,
			autoIncrement: true
		},
		umidade: {
			field: 'umidade',
			type: DataTypes.REAL,
			allowNull: false
		},
		dataHora: {
			field: 'data_e_hora',
			type: DataTypes.DATE, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		fkIdPropriedade: {
			field: 'FK_id_propriedade',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		FkSensor: {
			field: 'FK_sensor',
			type: DataTypes.INTEGER, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: false
		}
	},
		{
			tableName: 'dados_arduino',
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		});

	return Leitura;
};
