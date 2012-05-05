

var http = require('request');


describe("routes-stories", function() {

	it("all returns top 10 stories", function() {


		var controller = new StoryController();

		
		controller.get().length.should.equal(10);	


		});

	it("all should return top 10 descending order", function() {

		var controller = new StoryController();
		var stories = controller.get();
		var newestStoryIndex = 0;
		var olderStoryIndex = 1;

		stories[newestStoryIndex].id.should.be.above(stories[olderStoryIndex].id);

		});

	it("find story by id", function() {

		var controller = new StoryController();
		var testid = 3;

		var story = controller.getById(testid);

		story.id.should.equal(testid);


		});

	it("add new story", function() {

		var controller = new StoryController();

		var story = controller.post('Its a traaap!', 'admiral_ackbar');


		controller.getById(story.id).id.should.equal(story.id);


		});

	it("update an existing story", function() {

		var testId = 3;
		var controller = new StoryController();
		var story = controller.getById(testId);

		story.title = 'The buck stops here, the life and times of Heidi Fliess';

		var response = controller.put(story);

		response.title.should.equal(story.title);


		});

	it("GET /stories", function(done) {


		http.get('http://localhost:3000/stories', function(err, resp, body) {

	
			var results = JSON.parse(body);

			results.length.should.equal(10);
			

			done();


			});

		

		});

	it("POST /stories", function(done) {

		http(
			{
				method:'POST',
				url:'http://localhost:3000/stories',
				json:true,
				body : JSON.stringify({title:'world without end', author:'zachbonham'})
			}, 

			function(err, res, body) {
				console.log('i am here');
				if ( err ) {
					console.log('err');
					done(err);
				}
				else {
					res.statusCode.should.be.equal(201);
					done();
				}

			});

		});

	});
