const products = require('../../models/products');

exports.list = (pageNumber, productPerPage) => {
    return products
        .find().lean()
        .sort({ProductID: 1})
        .skip(pageNumber > 0 ? ((pageNumber - 1) * productPerPage) : 0)
        .limit(productPerPage);
};
exports.listProduct = (type, pageNumber, productPerPage) => {
    return products
        .find({Category: type}).lean()
        .skip(pageNumber > 0 ? ((pageNumber - 1) * productPerPage) : 0)
        .limit(productPerPage);
};

exports.listDetail = (id) => {
    return products.find({ProductID: id});
};