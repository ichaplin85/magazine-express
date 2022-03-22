const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Lot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Rates }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Rates, { foreignKey: 'lotId' });
    }
  }
  Lot.init({
    name: DataTypes.STRING,
    dateStart: DataTypes.STRING,
    dateEnd: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Lot',
  });
  return Lot;
};
