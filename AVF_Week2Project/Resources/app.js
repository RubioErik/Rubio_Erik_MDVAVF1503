if (Ti.Network.online) {
	var api1 = require("api");
	api1.getGeo();
} else {
	alert("Please enable your Network Connection");
	// Load from local storage
	var data = require("data");
	data.read();
}
