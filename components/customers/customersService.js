const info=require('../../models/userinfos');

exports.list =  (pageNumber, nPerPage) => {
    return info.find({Role: 'User'}).skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0).limit(nPerPage);
  };
