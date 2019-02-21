var exports = module.exports;

var greeter   = require('../models/greeter');




exports.logoff = function(req, res) {
	
	 var sessData = req.session;
	  sessData.userid='';
	  sessData.name = '';
	  req.app.set('sname', '');
      res.redirect('/');

	};

exports.loginForm = function(req, res) {

  var name = req.query.name || "";
  var error=req.query.error;
 
  var sname=req.session.name;
  if (typeof sname !== 'undefined' && sname !== null && sname!=='') {
	  var context = {
				siteTitle: "Profile"
				  , welcomeMessage: greeter.welcomeMessage(name)
				  ,pageDescr: "Welcome,"+req.session.name+"!"
			  };
			 
			  var template = __dirname + '/../views/profile';
			  res.render(template, context);	  
  }
  else {

	  var context = {
		siteTitle: "Login Form"
		  , welcomeMessage: greeter.welcomeMessage(name)
		  ,pageDescr: "Let's login to go further"
		  ,error: error
	  };
	 
	  var template = __dirname + '/../views/loginForm';
	  res.render(template, context);
  }
  
};

exports.loginSubmit = function(req, res) {

	const http = require('http');
	const querystring = require('querystring'); 

	//req - the nodejs request from UI
	var name=req.body.username;
	var password=req.body.password; 
	  

    if(name=="" && 1!=1){  //for future login fail handling
   	 res.redirect('/login?error='+"User Name Invalid");
    }
    else {  //login success
   	 var sessData = req.session;
   	  sessData.userid=""+Math.floor(Math.random() * Math.floor(100000000));    //jdata._id
   	  sessData.name =name; //jdata.name;
   	  req.app.set('sname', sessData.name);  //hnote: store for hbs
   	  //console.log(sessData.name);
   	 res.redirect('/myprofile');
	  } 
	  
   };

	
	exports.signupSubmit = function(req, res) {

		const http = require('http');
		const querystring = require('querystring'); 

		//req - the nodejs request from UI
		var name=req.body.username;
		var password=req.body.password; 
		  
	    if(name=="" && 1!=1){  //for future login fail handling
	      	 res.redirect('/login?error='+"User Name Invalid");
	     } else {
	    	 res.redirect('/login?error=Demo Success!Please login with your new user name'); 
	     }  
		  
		};	
	

