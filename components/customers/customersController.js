exports.list = (req,res) => {

    res.render('customers/customersList');
}

exports.edit = (req,res) => {

    res.render('customers/customersEdit');
}