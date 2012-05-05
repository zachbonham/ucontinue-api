

require("../models/story");		


/*

	GET ./stories
	GET ./stories/:id
	POST ./stories
	PUT ./stories
	DEL /stories/:id

	PUT ./continuations

*/

StoryRepository = function() {

	var self = this;

	var stories = [

		new Story(1, 'break it you bought it', 'zachbonham'),
		new Story(2, 'world without sun 1', 'zachbonham'),
		new Story(3, 'world without sun 2', 'zachbonham'),
		new Story(4, 'world without sun 3', 'zachbonham'),
		new Story(5, 'world without sun 4', 'zachbonham'),
		new Story(6, 'world without sun 5' , 'zachbonham'),
		new Story(7, 'world without sun 6', 'zachbonham'),
		new Story(8, 'world without sun 7', 'zachbonham'),
		new Story(9, 'world without sun 8', 'zachbonham'),
		new Story(10, 'world without sun 9', 'zachbonham'),

	];
	

	self.all = function() {


		return stories.reverse();
	}

	self.find = function(id) {

		var story;

		for(var i=0; i<stories.length;i++)
		{
			if ( stories[i].id == id )
			{
				story = stories[i];
				break;
			}
		}

		return story;
	}

	self.add = function(title, author) {

		var id = stories.length + 1;

		var story = new Story(id, title, author);
		stories.push(story);

		return story;
	}

	self.update = function(story) {


		for(var i=0; i<stories.length;i++)
		{
			if ( stories[i].id == story.id )
			{
				stories[i] = story;
				break;
			}
		}

		return story;

	}


};
