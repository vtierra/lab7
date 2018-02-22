var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	projects['viewAlt'] = true;
  	response.render('index', projects);
};

exports.viewAlt = function(req, res) {
	projects['viewAlt'] = false;
	res.render('index', projects);
};