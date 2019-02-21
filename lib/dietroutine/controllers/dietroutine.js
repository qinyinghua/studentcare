var exports = module.exports;

var greeter   = require('../models/greeter');

exports.dietroutine = function(req, res) {

	  var name = req.query.name || "";

	  var context = {
	    siteTitle: "Diet Routine Meal Plan"
	  ,pageDescr: "Input your diet routine"
      ,balance: 16.66
	  };

	  var template = __dirname + '/../views/dietroutine';
	  res.render(template, context);
 
	};
	exports.dietroutinePost = function(req, res) {

		  var name = req.query.name || "";

		  var context = {
		    siteTitle: "Add Card"
		  ,pageDescr: "Add Card to get more balance"
	      ,balance: 16.66
		  };

		  res.redirect('/myprofile');
	 
		};
	