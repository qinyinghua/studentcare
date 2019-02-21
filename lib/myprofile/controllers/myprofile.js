var exports = module.exports;

var greeter   = require('../models/greeter');

exports.myprofile = function(req, res) {

	  var name = req.query.name || "";

	  var context = {
	    siteTitle: "My Profile"
	  ,pageDescr: "Manage My Profile"
      ,balance: 16.66
      ,test1:req.session.userid
	  };

	  var template = __dirname + '/../views/myprofile';
	  res.render(template, context);
 
	};

