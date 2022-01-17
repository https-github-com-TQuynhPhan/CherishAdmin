customersService = require("./customersService")

exports.list = async (req,res) => {
    let itemPerPage = 5;
    let page = req.query.page;
    if (isNaN(page)) page = 1;
    let customers = await customersService.list(page, itemPerPage)
    res.render('customers/customersList',{customers});
}

exports.detail = async (req,res) => {
    let Account = undefined;
    try {
        Account = req.params.Account;
      } catch {}
    let customerDetail= await customersService.detail(Account)
    res.render('customers/customersDetail', {  customerDetail: customerDetail});
}

exports.lock = async (req, res) => {
    await customersService.lock(req,res);
   }