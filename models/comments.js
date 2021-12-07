const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comments', {
    ID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ProductID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'products',
        key: 'ID'
      }
    },
    CommentDay: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Detail: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'comments',
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
        name: "Product_3_idx",
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
    ]
  });
};
