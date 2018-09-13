'use strict';

module.exports = (sequelize, DataTypes) => {

  const proyecto = sequelize.define('proyecto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false, //Para convertirlo en serial poner en true
        allowNull: false
     },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_fin: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
  });

  proyecto.associate = (models) => {
        proyecto.hasMany(models.tarea); //Un proyecto puede tener muchas tareas
        proyecto.belongsTo(models.usuario); //Pertenece a un usuario
  }
  return proyecto;
};