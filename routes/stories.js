require('../controllers/storycontroller');

exports.stories = function(req, res) {

	console.log('get');
	var controller = new StoryController();
	res.writeHead(200, { 'content-type': 'application/json'});
	res.write(JSON.stringify(controller.get()));
	res.end();
};

exports.bob = function(req, res) {

	console.log('bob');
	var controller = new StoryController();
	res.writeHead(200, { 'content-type': 'application/json'});
	res.write(JSON.stringify(controller.get()));
	res.end();
};