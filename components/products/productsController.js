var express = require("express");
const async = require("hbs/lib/async");
var router = express.Router();
var products = require('../../models/products')
var reviews = require('../../models/reviews')
const productService=require('./productsService');
const productCategories=require('../../models/productcategories')

exports.list = async (req, res)=>{
	const productPerPage=6;
	const pageNumber=!isNaN(req.query.page) &&req.query.page>1?req.query.page:1;
	const products=await productService.list(pageNumber,productPerPage);
	res.render('products/productsList', {products});
};
exports.type = async (req, res)=>{
    let type = req.params.categories;
	const productPerPage=6;
	const pageNumber=!isNaN(req.query.page) &&req.query.page>1?req.query.page:1;
	const products=await productService.listType(type, pageNumber,productPerPage);
	res.render('products/productsListType', {products});
}
// exports.listProduct = async (req, res)=>{
// 	let type="TY001";
// 	const productPerPage=6;
// 	const pageNumber=!isNaN(req.query.page) &&req.query.page>1?req.query.page:1;
// 	const products=await productService.listProduct(type,pageNumber,productPerPage);
// 	res.render('product/soapList', {products});
// };
exports.edit = async (req,res) => {
	let id = req.params.id;
	const products =await productService.listDetail(id);
    res.render('products/productsEdit', {products});
}
exports.comfirm = async(req,res)=> {
	let id = req.params.id;
	productService.comfirm(id,req,res);
}
exports.detail =async (req,res) => {

	let id= req.params.id;

	const productPerPage=6;
	const pageNumber=!isNaN(req.query.page) &&req.query.page>1?req.query.page:1;
	const products =await productService.listDetail(id);
	const reviews = await productService.listReview(id,pageNumber,productPerPage);
    res.render('products/productsDetail', {reviews, products} );
}
exports.add = (req,res) => {

	res.render('products/productsAdd');
}
exports.addcomfirm = (req,res)=>{
	productService.addcomfirm(req,res);
}
exports.cart = (req,res) => {

    res.render('products/productsCart');
}

exports.payment = (req,res) => {

    res.render('products/productsPayment');
}