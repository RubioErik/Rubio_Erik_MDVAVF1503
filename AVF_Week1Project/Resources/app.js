if (Ti.Network.online) {
	var Data = require("DataFile");
	Data.getData();
} else {
	alert("Please enable your Network Connection");
	// Load from local storage
}
var geo = require("Geo");
geo.getGeo();