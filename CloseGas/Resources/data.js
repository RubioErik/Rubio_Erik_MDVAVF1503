var read = function() { 
	var db = Ti.Database.open("gasDB");
	var rows = db.execute("SELECT title, reg, mid, pre, dies, dist, adr, city, up FROM gasTBL");
	var dbArray = [];
	while (rows.isValidRow()){
		var dbRow = {
			title: rows.fieldByName("title"),
			reg: rows.fieldByName("reg"),
			mid: rows.fieldByName("mid"),
			pre: rows.fieldByName("pre"),
			dies: rows.fieldByName("dies"),
			dist: rows.fieldByName("dist"),
			adr: rows.fieldByName("adr"),
			city: rows.fieldByName("city"),
			up: rows.fieldByName("up")
			
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
	//console.log(apiData);
	var db = Ti.Database.open("gasDB");
	db.execute("CREATE TABLE IF NOT EXISTS gasTBL (id, INTEGER PRIMARY KEY, title TEXT, reg TEXT, mid TEXT, pre TEXT, dies TEXT, dist TEXT, adr TEXT, city TEXT, up TEXT)");
	db.execute("DELETE FROM gasTBL");
	for (i=0, j= apiData.length; i<j; i++) {
	db.execute("INSERT INTO gasTBL (title, reg, mid, pre, dies, dist, adr, city, up) VALUES (?,?,?,?,?,?,?,?,?)", apiData[i].title,apiData[i].reg,apiData[i].mid,apiData[i].pre,apiData[i].dies,apiData[i].dist,apiData[i].adr,apiData[i].city,apiData[i].up);
	}
	db.close();
	read();
};
exports.save = save;
exports.read = read;