var read = function(){
	alert("read");
	var db = Ti.Database.open("stockDB");
	var rowData = db.execute("SELECT sym, name, price, high, low, time FROM stockTBL");
	while (rowData.isValidRow()) {
		var dbData = {
			sym : rowData.fieldByName("sym"),
			name : rowData.fieldByName("name"),
			price : rowData.fieldByName("price"),
			high : rowData.fieldByName("high"),
			low : rowData.fieldByName("low"),
			time : rowData.fieldByName("time"),
			
		};
		rowData.next();
	}
	rowData.close();
	db.close();
	console.log(dbData);
	var ui = require("ui");
	ui.buildUI(dbData);
};


var save = function(apiData) {
	console.log(apiData);
	var db = Ti.Database.open("stockDB");
	db.execute("CREATE TABLE IF NOT EXISTS stockTBL (id, INTEGER PRIMARY KEY, sym TEXT, name TEXT, price TEXT, high TEXT, low TEXT, time TEXT)");
	db.execute("DELETE FROM stockTBL");
	db.execute("INSERT INTO stockTBL (sym, name, price, high, low, time) VALUES (?,?,?,?,?,?)", apiData.symbol,apiData.name,apiData.price,apiData.high,apiData.low,apiData.time);
	db.close();
	read();
};
exports.save = save;
exports.read = read;
