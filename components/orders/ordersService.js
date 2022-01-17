const info=require('../../models/orders');

exports.list =  (pageNumber, nPerPage) => {
    return info.find({}).skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0).limit(nPerPage);
  };
