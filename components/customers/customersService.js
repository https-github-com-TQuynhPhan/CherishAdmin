const info=require('../../models/userinfos');
const customer=require('../../models/useraccounts');

exports.list =  (pageNumber, nPerPage) => {
    return info.find({Role: 'User'}).skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0).limit(nPerPage);
  };

  
exports.detail =  (Account) => {
  return   info.find({ Account: Account }).limit(1);
 };

 exports.lock = async (req,res) => {
 const cus = await customer.findOne({ Account:req.params.Account });
 if(cus.Status==="Locked")
  {
    cus.Status=undefined;
    await cus.save();
    return res.render('customers/customersDetail',{message: 'You have unlocked the account.'})
  }
  else{
    cus.Status="Locked";
    await cus.save();
    return res.render('customers/customersDetail',{message: 'You have locked the account.'})
  }

};