	
	window.___gcfg = {lang: 'en-GB'};
	
	(function(d, scripts){
		for(var id in scripts) if (d.getElementById(id) == null) {
			var js = d.createElement('script'); js.id = "js-"+id; js.src = scripts[id];
			d.body.appendChild(js);
		}
	}(document, {
		"analytics" : "/assets/js/analytics.js",
		"facebook" : "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=162383427114019",
		"twitter" : "//platform.twitter.com/widgets.js",
		"google" : "https://apis.google.com/js/plusone.js"
	}));
	