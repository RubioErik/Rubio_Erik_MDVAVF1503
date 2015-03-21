var getData = function(url) {
	var variable = url;
	console.log(url + "hi");
	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			var json = JSON.parse(this.responseText);
			var gasArray = [];
			var gas = json.stations;
		
		for (i = 0, j = gas.length; i < j; i++){
				var gData = {
				 title: gas[i].station,
				 reg: gas[i].reg_price,
				 mid: gas[i].mid_price,
				 pre: gas[i].pre_price,
				 dies: gas[i].diesel_price,
				 dist: gas[i].distance,
				 adr: gas[i].address,
				 city: gas[i].city,
				 up: gas[i].reg_date
				 };
				 
				 gasArray.push(gData);
			}
			//console.log(gasArray);
			var data = require("data");
			data.save(gasArray);
		},
		onerror : function() {
			alert("Error: " + gas.error);
		}
	});

	xhr.open("GET", url);
	xhr.send();

};


var getGeo = function() {
	console.log("getGeo");
	Ti.Geolocation.purpose = "Current location needed to find gas stations";
	Ti.Geolocation.getCurrentPosition(function(e) {
		console.log(e);
		if (Ti.Platform.osname === "android") {
			var lat = "37.78583526611328";
			var lng = "-122.4064178466797";
			var url = "http://api.mygasfeed.com/stations/radius/37.78583526611328/-122.4064178466797/1/reg/distance/ff7syhp0hg.json";
			getData(url);
			
		} else {
			var lat2 = e.coords.latitude;
			var lng2 = e.coords.longitude;
			console.log("others: " + lat2 + ", " + lng2);
			var url = "http://api.mygasfeed.com/stations/radius/" + lat2 + "/" + lng2 + "/1/reg/distance/ff7syhp0hg.json";
			console.log(url);
			getData(url);
		}
		console.log(lat2, lng2);
	});

};

exports.getGeo = getGeo;
exports.getData = getData;