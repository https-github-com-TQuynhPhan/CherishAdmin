const products = require('../../models/products');
const reviews = require('../../models/reviews');
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