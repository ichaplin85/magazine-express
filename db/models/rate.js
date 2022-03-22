const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Lot}) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Lot, { foreignKey: 'lotId' });
    }
  }
  Rates.init({
    cash: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    lotId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Rates',
  });
  return Rates;
};
