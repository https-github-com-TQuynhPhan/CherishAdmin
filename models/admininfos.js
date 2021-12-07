const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admininfos', {
    ID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    Account: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'adminaccounts',
        key: 'Account'
      }
    },
    Name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DOB: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Role: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Avatar: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'admininfos',
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
        name: "Account_2_idx",
        using: "BTREE",
        fields: [
          { name: "Account" },
        ]
      },
    ]
  });
};
