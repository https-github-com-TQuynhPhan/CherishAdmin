const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('useraccounts', {
    Account: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'userinfos',
        key: 'Account'
      }
    },
    Password: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'useraccounts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Account" },
        ]
      },
      {
        name: "Account_1_idx",
        using: "BTREE",
        fields: [
          { name: "Account" },
        ]
      },
    ]
  });
};
