module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('method', {
          id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true   
            },
          username: {
            type: DataTypes.STRING,
            allowNull: false
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          githubId: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          email: DataTypes.STRING,
          liked: DataTypes.TEXT(2000),
          disliked: DataTypes.TEXT(2000)
    });
  return User;
};