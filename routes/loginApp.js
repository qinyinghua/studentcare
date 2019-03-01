var express = require('express');
var router = express.Router();
var fs = require('fs');
var userName = './routes/';
var passWord = './routes/';

router.get('/test',function (req,res) {

});
router.post('/', function(req,res)
{
	var response = "";
	
	userName = req.param('userName');
	passWord = req.param('passWord');
	if(userName == "admin" && passWord =="admin123"){
		req.session.isLoggedIn = true;
		res.redirect('home');
	}
	else{
		req.session.isLoggedIn = false;
		res.locals.logged = 'no';
		res.redirect('/');
	}
});


module.exports = router;