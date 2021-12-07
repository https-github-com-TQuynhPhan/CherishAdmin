const { where } = require('sequelize/dist');
const {models} = require('../../models');

exports.list = () => {
    return models.admininfos.findAll({raw:true});
}

exports.detail = () => {
    return models.admininfos.findAll({raw:true});
}