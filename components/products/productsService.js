const products = require('../../models/products');
const reviews = require('../../models/reviews');

const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
const app = require('../../app');

exports.list = (pageNumber, productPerPage) => {
    return products
        .find().lean()
        .sort({ProductID: 1})
        .skip(pageNumber > 0 ? ((pageNumber - 1) * productPerPage) : 0)
        .limit(productPerPage);
};
exports.listType = (type, pageNumber, productPerPage) => {
    return products
        .find( {Category: type} ).lean()
        .sort({ProductID: 1})
        .skip(pageNumber > 0 ? ((pageNumber - 1) * productPerPage) : 0)
        .limit(productPerPage);
};
exports.listDetail = (id) => {
    return products
        .find({ProductID: id})
        .limit(1);
};
exports.listReview = (id, pageNumber, productPerPage) => {
    return reviews
        .find({ProductID: id}).lean()
        .sort({ReviewID: 1})
        .skip(pageNumber > 0 ? ((pageNumber - 1) * productPerPage) : 0)
        .limit(productPerPage);
}
exports.comfirm = async (id, req, res) => {
  await app.upload(req, res, async(err) => {
    if (err) {
        console.log("upload error");
        res.render("error", {
          error: err,
        });
      } else {
        if (req.file == undefined) {
          console.log("upload error: no file to upload");
  
          res.render("error", {
            error: "Error: No File Selected!",
          });
          }
            else {
                const Image = res.req.file.originalname;
                const ProductID = req.body.ProductID;
                const ProductName = req.body.ProductName;
                const Category = req.body.Category;
                const BrandID = req.body.BrandID;
                const ProducingYear = req.body.ProducingYear;
                const Color = req.body.Color;
                const Weight = req.body.Weight;
                const Count = req.body.Count;
                const Price = req.body.Price;
                const SalePrice = req.body.SalePrice;
                const Description =req.body.Description;
                
                
                try{
                const currentProduct = await products.findOne({ProductID: id});
                currentProduct.overwrite({
                    ProductID: ProductID,
                    ProductName: ProductName,
                    Category: Category,
                    BrandID: BrandID,
                    ProducingYear: ProducingYear,
                    Color: Color,
                    Weight: Weight,
                    Count: Count,
                    Price: Price,
                    SalePrice: SalePrice,
                    Description: Description,
                    Image: Image
                });
                await currentProduct.save();
                return res.render('products/productsEdit',{message: 'Product updated successfully!'})     
            }catch(err){
                res.json({message: err.message})
            }    
        }
    }
});
}
exports.addcomfirm = async(req, res) => {
    await app.upload(req, res, async(err) => {
        if (err) {
            console.log("upload error");
            res.render("error", {
              error: err,
            });
          } else {
            if (req.file == undefined) {
              console.log("upload error: no file to upload");
      
              res.render("error", {
                error: "Error: No File Selected!",
              });
              }
                else {
                    const Image = res.req.file.originalname;
                    const ProductID = req.body.ProductID;
                    const ProductName = req.body.ProductName;
                    const Category = req.body.Category;
                    const BrandID = req.body.BrandID;
                    const ProducingYear = req.body.ProducingYear;
                    const Color = req.body.Color;
                    const Weight = req.body.Weight;
                    const Count = req.body.Count;
                    const Price = req.body.Price;
                    const SalePrice = req.body.SalePrice;
                    const Description =req.body.Description;
                    
                    try{
                    const newProduct = new products({
                        ProductID: ProductID,
                        ProductName: ProductName,
                        Category: Category,
                        BrandID: BrandID,
                        ProducingYear: ProducingYear,
                        Color: Color,
                        Weight: Weight,
                        Count: Count,
                        Price: Price,
                        SalePrice: SalePrice,
                        Description: Description,
                        Image: Image
                    });
                    await newProduct.save();
                    return res.render('products/productsAdd',{message: 'Product created successfully!'})     
                }catch(err){
                    res.json({message: err.message})
                }    
            }
        }
    });
}