var read = function() { 
	alert("read");
	var db = Ti.Database.open("redditDB");
	var rows = db.execute("SELECT title, author, image FROM redditTBL");
	var dbArray = [];
	while (rows.isValidRow()){
		var dbRow = {
			title: rows.fieldByName("title"),
			author: rows.fieldByName("author"),
			image: rows.fieldByName("image")
		};
		dbArray.push(dbRow);
		rows.next();
	}
	rows.close();
	db.close();
	console.log(dbArray);
	var ui = require("ui");
	ui.buildUI(dbArray);
};

var save = function(apiData) {
	console.log(apiData);
	var db = Ti.Database.open("redditDB");
	db.execute("CREATE TABLE IF NOT EXISTS redditTBL (id, INTEGER PRIMARY KEY, title TEXT, author TEXT, image TEXT)");
	db.execute("DELETE FROM redditTBL");
	for (i=0, j=apiData.length; i<j; i++) {
	db.execute("INSERT INTO redditTBL (title, author, image) VALUES (?,?,?)", apiData[i].title,apiData[i].author,apiData[i].image);
	}
	db.close();
	read();
};
exports.save = save;
exports.read = read;
