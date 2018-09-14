'use strict';

module.exports = (sequelize, DataTypes) => {

  const catedra = sequelize.define('catedra', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false, //Para convertirlo en serial poner en true
        allowNull: false
     },
    bloque: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
  });

  catedra.associate = (models) => {
        catedra.belongsTo(models.curso); //Pertenece a un curso
  }
  return catedra;
};