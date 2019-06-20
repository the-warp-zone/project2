

module.exports = function(sequelize, DataTypes) {
  var Titles = sequelize.define("titles", {
    publisher_titles_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Titles.hasOne(models.Title);
      }
    }
  });
  return Titles;
};
