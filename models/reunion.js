'use strict';

module.exports = (sequelize, DataTypes) => {

  const reunion = sequelize.define('reunion', {
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
    lugar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_hora_inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_hora_fin: {
        type: DataTypes.DATE,
        allowNull: false
    }
  });

reunion.associate = (models) => {
    reunion.belongsTo(models.proyecto); //Pertenece a un proyecto
}
    return reunion;
};