'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Post,{
        foreignKey:'post_id'
      });

      Comment.hasMany(models.Reply, {
        foreignKey:'parent_id',
        constraints:false,
        scope:{
          parent_name:'comment'
        }
      })
    }
  
  
  }
  Comment.init({
    user_id: DataTypes.INTEGER,
    message: DataTypes.STRING,
    post_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
    tableName:'Comment'
  });
  return Comment;
};