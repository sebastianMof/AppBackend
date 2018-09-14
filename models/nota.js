'use strict';

module.exports = (sequelize, DataTypes) => {

  const nota = sequelize.define('nota', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false, //Para convertirlo en serial poner en true
        allowNull: false
     },
    tipo: { // tipo puede ser control, solemne, laboratorio
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isIn: [['CONTROL', 'SOLEMNE','LABORATORIO']]
        }
    },
    calificacion: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
    
  });

  nota.associate = (models) => {
        nota.belongsTo(models.curso); //Pertenece a un curso
  }
  return nota;
};