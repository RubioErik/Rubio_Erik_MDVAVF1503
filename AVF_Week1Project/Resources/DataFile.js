var getData = function() {
	//request data
	// build object from data

	var url = "http://api.wunderground.com/api/233dc7213cacd6e6/conditions/q/32792.json";
	var xhr = Ti.Network.createHTTPClient({
		onload : function(weath) {
			var json = JSON.parse(this.responseText);
			console.log(json.current_observation.display_location.city);
			console.log(json.current_observation.weather);
			 var weathObj = {
			 	City : json.current_observation.display_location.city,
			 	State : json.current_observation.display_location.state,
			 	Conditon: json.current_observation.weather,
			 	Fahrenheit: json.current_observation.temp_f,
			 	Celsius: json.current_observation.temp_c,
			 	WindMph: json.current_observation.wind_mph,
			 	WindTemp: json.current_observation.wind_degrees
			 	
			 };
			
			 var uiFile = require("UI");
	         uiFile.buildUi(weathObj);
		},
		onerror : function(weath) {
			alert("Error: " + weath.error);
		}
	});
	xhr.open("GET", url);
	xhr.send();
	// pass object to UI module
	
};
exports.getData = getData; 