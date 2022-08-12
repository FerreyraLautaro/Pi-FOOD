const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', { 
    id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  
  name: {
    type: DataTypes.STRING,
    defaultValue: "Imaginary recipe",
    allowNull: false,
  },

  summary: {
    type: DataTypes.TEXT,
    defaultValue: "without Summary",
    allowNull: false,
  },

  score: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    validate: { min: 0, max: 100 },
  },

  healthLevel: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    validate: { min: 0, max: 100 },
  },

  steps: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  image: {
    type: DataTypes.TEXT,
  },
 }, { timestamps: false });
};
