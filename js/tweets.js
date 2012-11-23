	
	$(document).ready(function() {
		
		$.getJSON('https://api.twitter.com/1/statuses/user_timeline/kenthack.json', {count: 1}, function(data) {
			console.log(data);
		});
		
	});
	