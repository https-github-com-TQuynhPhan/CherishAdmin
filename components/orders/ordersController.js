ordersService = require("./ordersService")

exports.list = async (req,res) => {
    let itemPerPage = 5;
    let page = req.query.page;
    if (isNaN(page)) page = 1;
    let orders = await ordersService.list(page, itemPerPage)
    res.render('orders/ordersList',{orders});
}
