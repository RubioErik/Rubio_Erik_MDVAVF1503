var win = Ti.UI.createWindow({
	layout : "vertical",
	backgroundColor : "#ccc"
	
});

var sym = Ti.UI.createLabel({
	left: 0,
	top: 25,
	text: "Stock Symbol: "
	
});
var name = Ti.UI.createLabel({
	left: 0,
	top: 15,
	text: "Stock Name: "
	
});
var price = Ti.UI.createLabel({
	left: 0,
	top: 15,
	text: "Current Price: "
	
});
var hi = Ti.UI.createLabel({
	left: 0,
	top: 15,
	text: "Price (High): "
	
});
var lo = Ti.UI.createLabel({
	left: 0,
	top: 15,
	text: "Price (Low): "
	
});
var time = Ti.UI.createLabel({
	left: 0,
	top: 15,
	text: "As Of: "
	
});

var buildUI = function(dbObj) {
	sym.text = "Stock Symbol: " + dbObj.sym;
	name.text = "Stock Name: " + dbObj.name;
	price.text = "Current Price: " + dbObj.price;
	hi.text = "Price (High): " + dbObj.high;
	lo.text = "Price (Low): " + dbObj.low;
	time.text = "As Of: " + dbObj.time;
	
};
exports.buildUI = buildUI;
win.add(sym);
win.add(name);
win.add(price);
win.add(hi);
win.add(lo);
win.add(time);
win.open();

