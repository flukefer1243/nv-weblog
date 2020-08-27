module.exports = (sequelize, DataTypes) => {
    const Cargo = sequelize.define('Cargo', {
    name: DataTypes.STRING,
    price : DataTypes.STRING,
    category : DataTypes.STRING,
    })
    return Cargo
   }