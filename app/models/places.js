'use strict';
module.exports = function(sequelize, DataTypes) {
  var places = sequelize.define('places', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lon: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  });
  return places;
};
