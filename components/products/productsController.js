var express = require("express");
const async = require("hbs/lib/async");
var router = express.Router();
var products = require('../../models/products')

const productService=require('./productsService');
const productCategories=require('../../models/productcategories')

exports.list = async (req, res)=>{
	const productPerPage=6;
	const pageNumber=!isNaN(req.query.page) &&req.query.page>1?req.query.page:1;
	const products=await productService.list(pageNumber,productPerPage);
	res.render('products/productsList', {products});
};

// exports.listProduct = async (req, res)=>{
// 	let type="TY001";
// 	const productPerPage=6;
// 	const pageNumber=!isNaN(req.query.page) &&req.query.page>1?req.query.page:1;
// 	const products=await productService.listProduct(type,pageNumber,productPerPage);
// 	res.render('product/soapList', {products});
// };
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