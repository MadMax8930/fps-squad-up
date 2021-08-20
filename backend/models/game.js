'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.Game.hasMany(models.Post, { as: "post_game", onDelete:"CASCADE", hooks:true });
      // models.Post.belongsTo(models.Game,{ foreignKey:"gameId" });

      // models.Game.hasMany(models.Comment, { as: "comment_user", onDelete:"CASCADE", hooks:true });
      // models.Post.belongsTo(models.User, { foreignKey:"userId" });
    }
  };
  Game.init({
    gameName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};