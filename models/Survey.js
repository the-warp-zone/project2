module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
    publisher_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    yes_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    no_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Survey;
};
