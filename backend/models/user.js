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
      // models.User.hasMany(models.Comment, { as: "comment_post", onDelete:"CASCADE", hooks:true });
      // models.Post.belongsTo(models.Post, { foreignKey: "postId"});

      // models.User.hasMany(models.Post, { as: "post_user", onDelete:"CASCADE", hooks:true });
      // models.Post.belongsTo(models.User, { foreignKey: "userId"});

    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};