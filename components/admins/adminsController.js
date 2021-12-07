const adminsService = require('./adminsService');

exports.list = async (req,res) => {
    const admins = await adminsService.list();
    res.render('admins/adminsList', {admins});
}

exports.edit = (req,res) => {

    res.render('admins/adminsEdit');
}

exports.add = (req,res) => {

    res.render('admins/adminsAdd');
}

exports.detail = (req,res) => {

    res.render('admins/adminsDetail');
}