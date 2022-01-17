const adminsService = require('./adminsService');

exports.list = async (req,res) => {
    let itemPerPage = 5;
    let page = req.query.page;
    if (isNaN(page)) page = 1;
    //console.log("page= " + page);
    let admins = await adminsService.list(page, itemPerPage)
    //console.log("return data " + admins);
    res.render('admins/adminsList', {admins});
}

exports.add = (req,res) => {

    adminsService.add(req,res);
}

exports.detail = async (req,res) => {
    let Account = undefined;
    try {
        Account = req.params.Account;
      } catch {}
    let adminDetail= await adminsService.detail(Account)
    res.render('admins/adminsDetail', {  adminDetail: adminDetail});
}

exports.edit = async (req,res) => {
    let Account = undefined;
    try {
        Account = req.params.Account;
      } catch {}
    let adminDetail= await adminsService.detail(Account)
    res.render('admins/adminsEdit', {  adminDetail: adminDetail});
}

exports.saveEdit = async (req, res) => {
    await adminsService.saveEdit(req,res);
    res.redirect("/admins/adminsDetail/"+req.body.account);
 }