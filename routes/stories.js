require('../controllers/storycontroller');



exports.create = function(req, res) {
	
	var controller = new StoryController();
	var story = controller.post(req.body.title, req.body.author);

	res.status(201);
	res.send(story);

};


exports.list = function(req, res) {

	var controller = new StoryController();
	var stories = controller.get();
	
	res.send(stories);

};

exports.load = function(req, res) {

	
	var controller = new StoryController();

	var id = req.params.id;
	var story = controller.getById(id);

	

	if ( story ) {

		res.send(story);
	
	}
	else {

		res.status(404);		
		
	}


};