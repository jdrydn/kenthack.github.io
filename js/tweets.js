	
	$(document).ready(function() {
		
		$.getJSON('http://static.kenthack.com/tweet.latest.php', {count: 1}, function(data) {
			console.log(data);
		});
		
	});
	