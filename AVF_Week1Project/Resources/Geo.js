var getGeo = function() {
	console.log("getGeo");
	Ti.Geolocation.purpose = "Current location needed to update your weather";
	Ti.Geolocation.getCurrentPosition(function(e){
		var UIR = require("ui");
		console.log(e);
		if (Ti.Platform.osname === "android") {
			var lat = "37.78583526611328";
			var lng = "-122.4064178466797";
			UIR.buildUI(lat, lng);
		} else {
			var lat = e.coords.latitude;
			var lng = e.coords.longitude;
			console.log("others: " + lat + ", " + lng);
			UIR.buildUI(lat, lng);
		}
		
		
	});
	
};
exports.getGeo = getGeo;