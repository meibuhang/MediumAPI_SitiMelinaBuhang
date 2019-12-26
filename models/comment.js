'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.TEXT,
    is_published: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_archived: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    article_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.Article, {
      foreignKey: "article_id",
      as: "comments",
  
    });
    Comment.belongsTo(models.User, {
      foreignKey: "user_id",
      sourceKey:"id"
    });
  };
  return Comment;
};