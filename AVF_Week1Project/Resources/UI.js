var win = Ti.UI.createWindow({
	backgroundColor: "Black",
	layout: "vertical"
});
var city = Ti.UI.createLabel({
	color: "#fff",
	top: 60
});

var state = Ti.UI.createLabel({
	color: "#fff",
	top: 10
	
});
var condition = Ti.UI.createLabel({
	color: "#fff",
	top: 10
	
	
});
var  Fah = Ti.UI.createLabel({
	color: "#fff",
	top: 10
	
});
var  Cel = Ti.UI.createLabel({
	color: "#fff",
	top: 10
	
});
var  wMph = Ti.UI.createLabel({
	color: "#fff",
	top: 10
	
});
var  wTemp= Ti.UI.createLabel({
	color: "#fff",
	top: 10
	
});

var lat2 = Ti.UI.createLabel({
	top: 20,
	color: "#fff"
});
var lng2 = Ti.UI.createLabel({
	top: 20,
	color: "#fff"
	
});

var buildUi = function(obj){
	console.log(obj);
	city.text = "City: " + obj.City;
	state.text = "State: " + obj.State;
	condition.text = "Condition: " + obj.Condition;
	Fah.text = "Fahrenheit: " + obj.Fahrenheit;
	Cel.text = "Celsius: " + obj.Celsius;
	wMph.text = "Wind Mph: " + obj.WindMph;
	wTemp.text = "Wind Temperature: " + obj.WindTemp;
	win.add(wTemp);
	win.add(wMph);
	win.add(Cel);
	win.add(Fah);
	win.add(condition);
	win.add(state);
	win.add(city);
	win.open();
	
};

var ltlng = function(arg1, arg2) {
	console.log(arg1);
	console.log(arg2);
	lat2.text = arg1;
	lng2.text = arg2;
	win.add(lat2);
	win.add(lng2);
	win.open();
	
};
exports.ltlng = ltlng;
exports.buildUi = buildUi;