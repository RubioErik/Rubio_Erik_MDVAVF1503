var getData = function(){
	var url = "http://dev.markitondemand.com/Api/v2/Quote/json?symbol=NFLX";
	var xhr = Ti.Network.createHTTPClient({
		onload : function(){
			var json = JSON.parse(this.responseText);
			var stockObj = {
				symbol: json.Symbol,
				name: json.Name,
				price: json.LastPrice,
				high: json.High,
				low: json.Low,
				time: json.Timestamp
			};
			console.log("stockObj: " + JSON.stringify(stockObj));
			var data = require("data");
			data.save(stockObj);
		},
		onerror : function() {
			alert("Data not available");
		},
		timeout: 5000
	});
	xhr.open("GET", url);
	xhr.send();
};
exports.getData = getData;