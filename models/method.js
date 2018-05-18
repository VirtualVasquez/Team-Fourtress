
module.exports = function(sequelize, DataTypes) {
    var Method = sequelize.define('method', {
          name: DataTypes.STRING,
          url: DataTypes.STRING,
          category: DataTypes.STRING,
          description: DataTypes.STRING,
          description2: DataTypes.STRING,
          syntax: DataTypes.STRING,
          parameters: DataTypes.STRING,
          returns: DataTypes.STRING,
          examples: DataTypes.STRING,
          tags: DataTypes.STRING,
          likes: DataTypes.STRING,
          dislikes: DataTypes.STRING,
          id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true   
            }
    });
  return Method;
};
