'use strict';

module.exports = (sequelize, DataTypes) => {

  const actividad = sequelize.define('actividad', {
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
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_fin:{
      type: DataTypes.DATEONLY,
      allowNull: false
    }

    
  });

  actividad.associate = (models) => {
        actividad.belongsTo(models.curso); //Pertenece a un curso
  }
  return actividad;
};