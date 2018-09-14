'use strict';

module.exports = (sequelize, DataTypes) => {

  const contacto = sequelize.define('contacto', {
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
    fono: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });

contacto.associate = (models) => {
    contacto.belongsTo(models.usuario); //Pertenece a un usuario
}
    return contacto;
};