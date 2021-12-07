const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bills', {
    ID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    ProductID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'products',
        key: 'ID'
      }
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Total: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bills',
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
        name: "Product_1_idx",
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
    ]
  });
};
