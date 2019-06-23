module.exports = function(sequelize, DataTypes) {
  var Stocks = sequelize.define("publisher_stock", {
    Publisher_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Stocks;
};
