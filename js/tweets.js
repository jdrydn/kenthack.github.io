	
	$(document).ready(function() {
		
		$.getJSON('https://api.twitter.com/1/statuses/user_timeline/kenthack.json', {count: 1}, function(data) {
			console.log('1.1');
			console.log(data);
		});
		
		$.getJSON('https://api.twitter.com/1.1/statuses/user_timeline.json', {count: 1, screen_name: 'kenthack'}, function(data) {
			console.log('1.1');
			console.log(data);
		});
		
	});
	