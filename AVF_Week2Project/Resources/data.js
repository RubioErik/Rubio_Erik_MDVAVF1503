var read = function() { 
	var db = Ti.Database.open("weatherDB");
	var rows = db.execute("SELECT title, fah, cel, con, fah2, cel2 FROM weatherTBL");
	var dbArray = [];
	while (rows.isValidRow()){
		var dbRow = {
			title: rows.fieldByName("title"),
			fah: rows.fieldByName("fah"),
			cel: rows.fieldByName("cel"),
			con: rows.fieldByName("con"),
			fah2: rows.fieldByName("fah2"),
			cel2: rows.fieldByName("cel2")
			
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
	var db = Ti.Database.open("weatherDB");
	db.execute("CREATE TABLE IF NOT EXISTS weatherTBL (id, INTEGER PRIMARY KEY, title TEXT, fah TEXT, cel TEXT, con TEXT, fah2 TEXT, cel2 TEXT)");
	db.execute("DELETE FROM weatherTBL");
	for (i=0, j= apiData.length; i<j; i++) {
	db.execute("INSERT INTO weatherTBL (title, fah, cel, con, fah2, cel2) VALUES (?,?,?,?,?,?)", apiData[i].title,apiData[i].fah,apiData[i].cel,apiData[i].con,apiData[i].fah2,apiData[i].cel2);
	}
	db.close();
	read();
};
exports.save = save;
exports.read = read;
