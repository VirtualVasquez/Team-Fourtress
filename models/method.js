
module.exports = function(sequelize, DataTypes) {
    var Method = sequelize.define('method', {
          name: DataTypes.STRING,
          url: DataTypes.STRING(400),
          category: DataTypes.STRING(40),
          description: DataTypes.STRING(2000),
          description2: DataTypes.STRING(2000),
          syntax: DataTypes.STRING(2000),
          parameters: DataTypes.STRING(600),
          returns: DataTypes.STRING(500),
          examples: DataTypes.STRING(2000),
          tags: DataTypes.STRING(200),
          likes: DataTypes.INTEGER,
          dislikes: DataTypes.INTEGER,
          id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true   
            }
    });
  return Method;
};
