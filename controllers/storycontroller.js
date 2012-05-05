

require("../models/story");		
require("./storyrepository")

/*

	GET ./stories
	GET ./stories/:id
	POST ./stories
	PUT ./stories
	DEL /stories/:id


	PUT ./stories/:id/
	POST ./stories/:id/continuations


*/

StoryController = function() {

	var self = this;
	var storyRepository = new StoryRepository();
	

	self.get = function() {

		return storyRepository.all();
	}

	self.getById = function(id) {

		return storyRepository.find(id);
	}

	self.post = function(title, author) {

		return storyRepository.add(title, author);
	}

	self.put = function(story) {

		return storyRepository.update(story);
	}
};
