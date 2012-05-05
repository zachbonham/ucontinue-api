

require("../models/story");		
require("./storyrepository")


/*


	Continuations are just stories in a different light.

	A story has continuations, but a continuation is just not a root story.

	GET ./continuations  ? does this make sense?
	GET ./continuations/:id
	POST ./continuations 
	PUT ./continuations
	DEL /continuations/:id

*/

ContinuationController = function() {

	var self = this;

	self.getById = function(id) {

	}
}