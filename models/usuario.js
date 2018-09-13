'use strict';

module.exports = (sequelize, DataTypes) => {

  const usuario = sequelize.define('usuario', {
    rut: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false, //Para convertirlo en serial poner en true
        allowNull: false
     },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        }
    },
    carrera: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });

  usuario.associate = (models) => {
        usuario.hasMany(models.proyecto); //Un usuario puede tener muchos proyectos
  }
  return usuario;
};