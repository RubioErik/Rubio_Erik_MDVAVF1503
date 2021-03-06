var getData = function(url) {
	var variable = url;
	console.log(url + "hi");
	var key = "/233dc7213cacd6e6";

	var apData = "/conditions";

	var com = "http://api.wunderground.com/api";

	//request data
	// build object from data

	var xhr = Ti.Network.createHTTPClient({
		onload : function(e) {
			var json = JSON.parse(this.responseText);
			console.log(json);
			var weathObj = {
				City : json.current_observation.display_location.city,
				State : json.current_observation.display_location.state,
				Condition : json.current_observation.weather,
				Fahrenheit : json.current_observation.temp_f,
				Celsius : json.current_observation.temp_c,
				WindMph : json.current_observation.wind_mph,
				WindTemp : json.current_observation.wind_degrees

			};

			var uiFile = require("ui");
			uiFile.buildUi(weathObj);
		},
		onerror : function(e) {
			alert("Error: " + weath.error);
		}
	});

	xhr.open("GET", url);
	xhr.send();

};

var getGeo = function() {
	console.log("getGeo");
	Ti.Geolocation.purpose = "Current location needed to update your weather";
	Ti.Geolocation.getCurrentPosition(function(e) {
		//var UIR = require("ui");
		console.log(e);
		if (Ti.Platform.osname === "android") {
			var lat = "37.78583526611328";
			var lng = "-122.4064178466797";
			var url = "http://api.wunderground.com/api" + "/233dc7213cacd6e6" + "/conditions" + "/q/" + lat + "," + lng + ".json";
			getData(url);
			
		} else {
			var lat = e.coords.latitude;
			var lng = e.coords.longitude;
			console.log("others: " + lat + ", " + lng);
			var load = require("ui").ltlng;
			console.log(load);
			var url = "http://api.wunderground.com/api" + "/233dc7213cacd6e6" + "/conditions" + "/q/" + lat + "," + lng + ".json";
			console.log(url);
			getData(url);
		}
		console.log(lat, lng);
	});

};



/**/
exports.getGeo = getGeo;
exports.getData = getData;
