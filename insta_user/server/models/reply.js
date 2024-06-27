'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reply.belongsToMany(models.Reply, {
        through:models.Comment_Reply,
        as:'Comment',
        foreignKey:'reply_id',
        otherKey:'connent_id',
        scope:{
          parent_name:'reply'
        }
      });

      Reply.belongsToMany(models.Reply,{
        through:models.Comment_Reply,
        as:'Reply',
        foreignKey:'comment_id',
        otherKey:'reply_id',
        scope:{
          parent_name:'reply'
        }
      });

      Reply.belongsTo(models.Comment,{
        through:models.Comment,
        foreignKey:'parent_id',
        constraints:false
      })
    }
  }

  Reply.init({
    parent_id: DataTypes.INTEGER,
    parent_name:DataTypes.STRING,
    message: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reply',
    tableName:'Reply'
  });
  return Reply;
};