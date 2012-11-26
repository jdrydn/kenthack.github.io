	
	function relative_time(time_value) {
		var values = time_value.split(" ");
		if (values[3] == '2012') time_value = values[2] + " " + values[1] + ", " + values[3] + " " + values[4];
		else time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
		var parsed_date = Date.parse(time_value);
		var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
		var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
		delta = delta + (relative_to.getTimezoneOffset() * 60);
		
		if (delta < 60) {
			return 'less than a minute ago';
		} else if(delta < 120) {
			return 'about a minute ago';
		} else if(delta < (60*60)) {
			return (parseInt(delta / 60)).toString() + ' minutes ago';
		} else if(delta < (120*60)) {
			return 'about an hour ago';
		} else if(delta < (24*60*60)) {
			return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
		} else if(delta < (48*60*60)) {
			return '1 day ago';
		} else {
			return (parseInt(delta / 86400)).toString() + ' days ago';
		}
	}
	
	function twittercallback_us(tweets)
	{
		(function(tweet) {
			//console.log(tweet);
			$('div.tweet-official div.active img.avatar').attr('src',tweet.user.profile_image);
			$('div.tweet-official div.active h3').html(tweet.user.name + ' <small><a href="//twitter.com/'+tweet.user.screen_name+'" target="_blank">@'+tweet.user.screen_name+'</a></small>');
			$('div.tweet-official div.active div.author h6 a').attr('href','//twitter.com/'+tweet.user.screen_name+'/status/'+tweet.id_str).text(relative_time(tweet.created_at));
			$('div.tweet-official div.active p.lead').html(tweet.text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
				return '<a href="'+url+'">'+url+'</a>';
			}).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
				return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'" target="_blank">'+reply.substring(1)+'</a>';
			}).replace(/\B#([_a-z0-9]+)/ig, function(hash) {
				return  hash.charAt(0)+'<a href="https://twitter.com/search?q=%23'+hash.substring(1)+'" target="_blank">'+hash.substring(1)+'</a>';
			}));
		})(tweets[0]);
		$('div.tweet-official div.loading').hide(function() { $('div.tweet-official div.active').show(); });
	}
	
	function twittercallback_them(search)
	{
		(function(tweet) {
			//console.log(tweet);
			$('div.tweet-hashtag div.active img.avatar').attr('src',tweet.profile_image_url);
			$('div.tweet-hashtag div.active h3').html(tweet.from_user_name + ' <small><a href="//twitter.com/'+tweet.from_user+'" target="_blank">@'+tweet.from_user+'</a></small>');
			$('div.tweet-hashtag div.active div.author h6 a').attr('href','//twitter.com/'+tweet.from_user+'/status/'+tweet.id_str).text(relative_time(tweet.created_at));
			$('div.tweet-hashtag div.active p.lead').html(tweet.text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
				return '<a href="'+url+'">'+url+'</a>';
			}).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
				return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'" target="_blank">'+reply.substring(1)+'</a>';
			}).replace(/\B#([_a-z0-9]+)/ig, function(hash) {
				return  hash.charAt(0)+'<a href="https://twitter.com/search?q=%23'+hash.substring(1)+'" target="_blank">'+hash.substring(1)+'</a>';
			}));
		})(search.results[0]);
		$('div.tweet-hashtag div.loading').hide(function() { $('div.tweet-hashtag div.active').show(); });
	}
	
	$(document).ready(function() {
		
		$('body').append('<script src="https://api.twitter.com/1/statuses/user_timeline/kenthack.json?callback=twittercallback_us&count=1" type="text/javascript"></script>')
				.append('<script src="http://search.twitter.com/search.json?callback=twittercallback_them&count=1&q=%23kenthack&include_user=true" type="text/javascript"></script>');
		
	});
	