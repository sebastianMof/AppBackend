'use strict';

module.exports = (sequelize, DataTypes) => {

  const tarea = sequelize.define('tarea', {
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
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false
    }
  });

tarea.associate = (models) => {
    tarea.belongsTo(models.proyecto); //Pertenece a un proyecto
}
    return tarea;
};