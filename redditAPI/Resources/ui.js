var win = Ti.UI.createWindow({
	layout : "vertical",
	backgroundColor : "#ccc"
	
});

var buildUI = function(dbOutput) {
	for (i=0, j=dbOutput.length; i < j; i++){
		var title = Ti.UI.createLabel({
	left: 0,
	top: 25,
	text: "Story Title: " + dbOutput[i].title
	
});
var author = Ti.UI.createLabel({
	left: 0,
	top: 15,
	text: "Story Author: " + dbOutput[i].author
	
});
var image = Ti.UI.createImageView({
	left: 0,
	top: 15,
	image: dbOutput[i].image
});
	win.add(title);
	win.add(author);
	win.add(image);
	}
	
	
};
exports.buildUI = buildUI;

win.open();

