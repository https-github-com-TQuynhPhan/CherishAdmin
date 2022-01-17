customersService = require("./customersService")

exports.list = async (req,res) => {
    let itemPerPage = 5;
    let page = req.query.page;
    if (isNaN(page)) page = 1;
    let customers = await customersService.list(page, itemPerPage)
    res.render('customers/customersList',{customers});
}

exports.edit = (req,res) => {

    res.render('customers/customersEdit');
}