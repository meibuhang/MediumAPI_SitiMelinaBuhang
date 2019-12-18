'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_active: DataTypes.TINYINT
  }, {});
  Users.associate = function (models) {
    // associations can be defined here
    Users.hasMany(models.Articles, {
      foreignKey: "author_id",
      as: "users",

    })
  };
  return Users;
};