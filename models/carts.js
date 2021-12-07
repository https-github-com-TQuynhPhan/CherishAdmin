const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carts', {
    UserID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'userinfos',
        key: 'ID'
      }
    },
    ProductID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'products',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'carts',
    timestamps: false,
    indexes: [
      {
        name: "Product_1_idx",
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
      {
        name: "User_1_idx",
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
    ]
  });
};
