var read = function(){
	alert("read");
};


var save = function(apiData) {
	console.log(apiData);
	var db = Ti.Database.open("stockDB");
	db.execute("CREATE TABLE IF NOT EXISTS stockTBL (id, INTEGER PRIMARY KEY, sym TEXT, name TEXT, price TEXT, high TEXT, low TEXT, time TEXT)");
	db.execute("INSERT INTO stockTBL (sym, name, price, high, low, time) VALUES (?,?,?,?,?,?)", apiData.symbol,apiData.name,apiData.price,apiData.high,apiData.low,apiData.time);
	db.close();
	read();
};
exports.save = save;

