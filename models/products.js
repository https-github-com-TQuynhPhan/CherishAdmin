const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    ID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    ProductName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Category: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    IDBrand: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'productbrands',
        key: 'ID'
      }
    },
    ProducingYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Color: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Weight: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SalePrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Image: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products',
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
        name: "Brand_1_idx",
        using: "BTREE",
        fields: [
          { name: "IDBrand" },
        ]
      },
    ]
  });
};
