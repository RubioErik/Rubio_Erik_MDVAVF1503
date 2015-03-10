var ui = require("ui");
if (Ti.Network.online) {
	var api = require("loc");
	api.getData();
} else {
	alert("Please enable your Network Connection");
	// Load from local storage
	var data = require("data");
	data.read();
}
