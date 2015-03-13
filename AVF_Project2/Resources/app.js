if (Ti.Network.online) {
	var api1 = require("cloud");
	api1.loginCloud();
} else {
	alert("Please enable your Network Connection");
	// Load from local storage
	var data = require("data");
	data.read();
}
