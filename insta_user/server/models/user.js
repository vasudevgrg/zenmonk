'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     User.hasMany(models.Post, {
      foreignKey:'user_id'
     });

     User.belongsToMany(models.User, {
      through:models.User_Connection,
      as:'Connection',
      foreignKey:'user_id',
      otherKey:'connection_id'
     });

     User.belongsToMany(models.User, {
      through:models.User_Connection,
      as:'User',
      foreignKey:'connection_id',
      otherKey:'user_id'
     });


    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName:'User'
  });
  return User;
};