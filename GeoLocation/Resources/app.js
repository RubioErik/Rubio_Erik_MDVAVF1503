// launch app 
// get geo cordinates 
// populate UI 
if (Ti.Network.online) {
	var Data = require("geo");
	Data.getGeo();
} else {
	alert("Please enable your Network Connection");
	// Load from local storage
}