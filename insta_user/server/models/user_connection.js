'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Connection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Connection.init({
    user_id: DataTypes.STRING,
    connection_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_Connection',
    tableName:'User_Connection'
  });
  return User_Connection;
};