var getData = function(){
	var url = "http://api.reddit.com/r/aww";
	var xhr = Ti.Network.createHTTPClient({
		onload: function() {
			var json = JSON.parse(this.responseText);
			var redditArray = [];
			var child = json.data.children;
			for (i = 0, j = child.length; i < j; i++){
				 var story = {
				 	title: child[i].data.title,
				 	author: child[i].data.author,
				 	image: child[i].data.thumbnail
				 };
				 redditArray.push(story);
			}
			console.log(redditArray);
			var data = require("data");
			data.save(redditArray);
		}, 
		onerror : function(){ 
		},
		timeout : 5000
	});
xhr.open("GET", url);
xhr.send();	
};
exports.getData = getData;
