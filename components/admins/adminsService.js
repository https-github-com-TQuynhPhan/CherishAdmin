const info=require('../../models/userinfos');
const admin = require('../../models/adminaccounts');
const saltRound = 10;
const bcrypt = require("bcrypt");
const crypto = require("crypto")

exports.list =  (pageNumber, nPerPage) => {
    return info
        .find({Role: 'Admin'})
        .skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0)
        .limit(nPerPage);
}

exports.add =  async (req,res) => {
  console.log(req.body);
  const Account = req.body.Account;
  const Password = req.body.Password;
  let isExist = await admin.findOne({Account});
  if (!Account)
  {
      return res.render('admins/adminsAdd',{message: 'Data cannot be empty!'});
  }
  if (!Password || Password.length < 6 )
  {
      return res.render('admins/adminsAdd',{message: 'Invalid password! Please enter password more than 6 characters.'});
  }
  if(isExist) 
  {
      return res.render('admins/adminsAdd',{message: 'Username already taken!'});
  }
  else
  {
      const encryptPass = await bcrypt.hash(Password, saltRound)
        
      try{
        const id = crypto.randomBytes(8).toString('hex');;
        const idAdmin = 'AD' + id;
        const newAdmin = new admin({
        Account,
        Password: encryptPass
        })
        const newAdminInfo = new info({
        UserID:idAdmin,
        Account,
        Role: 'Admin'
        })
        await newAdmin.save();
        newAdminInfo.save();
        return res.render('admins/adminsAdd',{message: 'Admin account created successfully!'})
        
      }catch(err){
          res.json({message: err.message})
      }
    }
}

exports.detail =  (Account) => {
    return   info.find({ Account: Account }).limit(1);
   };


exports.saveEdit = async (req,res) => {
    let UserID=req.body.userid;
    let Account=req.body.account;
    let Name=req.body.name;
    let Gender=req.body.gender;
    let Phone=req.body.phone;
    let Email=req.body.email;
    let Address=req.body.address;
    let Role=req.body.role;
    const adm =await info.findOne({UserID});
    adm.overwrite(
    { UserID: UserID,Account: Account, Name: Name, Gender: Gender, Phone: Phone, Email: Email, Address: Address , Role:Role}
    );
    await adm.save();
}
