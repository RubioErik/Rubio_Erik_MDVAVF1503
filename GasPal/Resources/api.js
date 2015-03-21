var getData = function(url) {
	var variable = url;
	console.log(url + "hi");
	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			var json = JSON.parse(this.responseText);
			var weathArray = [];
			var fore = json.forecast.simpleforecast.forecastday;
			var cWeath = json.current_observation;
			
			var uiFile = require("ui");
			uiFile.buildUI2(weathObj);
		for (i = 0, j = fore.length; i < j; i++){
				var week = {
				 title: fore[i].date.weekday_short,
				 fah: fore[i].high.fahrenheit,
				 cel: fore[i].high.celsius,
				 con: fore[i].conditions,
				 fah2: fore[i].low.fahrenheit,
				 cel2: fore[i].low.celsius
				 
				 
				 };
				 console.log(fore[i].date.weeday_short);
				 console.log(fore[i].high.fahrenheit);
				 console.log(fore[i].high.celsius);
				 console.log(fore[i].conditions);
				 weathArray.push(week);
				 console.log(weathArray + " hello ");
			}
			console.log(json.current_observation.display_location.city);
			var data = require("data");
			data.save(weathArray);
		},
		onerror : function() {
			alert("Error: " + weath.error);
		}
	});

	xhr.open("GET", url);
	xhr.send();

};















var getGeo = function() {
	console.log("getGeo");
	Ti.Geolocation.purpose = "Current location needed to find crime";
	Ti.Geolocation.getCurrentPosition(function(e) {
		console.log(e);
		if (Ti.Platform.osname === "android") {
			var lat = "37.78583526611328";
			var lng = "-122.4064178466797";
			var url = "http://api.wunderground.com/api" + "/233dc7213cacd6e6" + "/conditions/forecast" + "/q/" + lat + "," + lng + ".json";
			//getData(url);
			
		} else {
			var lat2 = e.coords.latitude;
			var lng2 = e.coords.longitude;
			console.log("others: " + lat2 + ", " + lng2);
			var load = require("ui").ltlng;
			var url = "http://api.mygasfeed.com/stations/radius/" + lat2 + "/" + lng2 + "/1/reg/distance/ff7syhp0hg.json";
			console.log(url);
			//getData(url);
		}
		console.log(lat2, lng2);
	});

};

exports.getGeo = getGeo;