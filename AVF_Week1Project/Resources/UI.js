var win = Ti.UI.createWindow({
	backgroundColor: "d02090",
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
var buildUi = function(obj){
	console.log(obj);
	city.text = "City: " + obj.City;
	state.text = "State: " + obj.State;
	condition.text = "Condtion: " + obj.Condition;
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
exports.buildUi = buildUi;