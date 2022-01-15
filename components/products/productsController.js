//const productsService = require('./productsService');

exports.list = (req,res) => {
    //const product = await productsService.list();
    res.render('products/productsList');
}

exports.edit = (req,res) => {

    res.render('products/productsEdit');
}

exports.detail = (req,res) => {

    res.render('products/productsDetail');
}

exports.cart = (req,res) => {

    res.render('products/productsCart');
}

exports.payment = (req,res) => {

    res.render('products/productsPayment');
}