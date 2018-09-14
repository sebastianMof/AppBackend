'use strict';

module.exports = (sequelize, DataTypes) => {

  const curso = sequelize.define('curso', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false, //Para convertirlo en serial poner en true
        allowNull: false
     },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre_profesor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bloque_ayudantia: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null //va null si no hay ayud
    },
    
  });

  curso.associate = (models) => {
        curso.hasMany(models.actividad); //Un curso puede tener muchas actividades
        curso.hasMany(models.nota); //Un curso puede tener muchas notas
        curso.hasMany(models.catedra); //Un curso puede tener muchas catedras
        curso.belongsTo(models.usuario); //Pertenece a un usuario
  }
  return curso;
};