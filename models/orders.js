const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    ID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    UserID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'userinfos',
        key: 'ID'
      }
    },
    OrderDay: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Bill: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'bills',
        key: 'ID'
      }
    },
    Total: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orders',
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
        name: "User_2_idx",
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
      {
        name: "Bill_1_idx",
        using: "BTREE",
        fields: [
          { name: "Bill" },
        ]
      },
    ]
  });
};
