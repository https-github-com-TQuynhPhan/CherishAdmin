const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userinfos', {
    ID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    Account: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "Account_UNIQUE"
    },
    Name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Gender: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DOB: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Role: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Avatar: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userinfos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "Account_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Account" },
        ]
      },
    ]
  });
};
