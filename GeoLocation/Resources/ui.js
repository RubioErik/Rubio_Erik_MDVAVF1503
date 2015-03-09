var win = Ti.UI.createWindow({

backgroundColor : "White",

});





var fah = Ti.UI.createLabel({

color : "White",

top : "18%",

textAlign: "center",


font : {

    fontSize: 30,

    fontStyle: "bold",

    fontFamily: "Helvetica"

}



});

var con = Ti.UI.createLabel({

color : "White",

top : "37%",

textAlign: "center"



});



var Cel = Ti.UI.createLabel({

color : "White",

top : "69%",

textAlign: "center"



});

var wtmLabel = Ti.UI.createLabel({

color : "White",

top : "85%",

textAlign: "center"



});



var csLabel = Ti.UI.createLabel({

color: "White",

top: "53%",

textAlign: "center"


});



var mainView = Ti.UI.createView({

backgroundColor: "#F5A45E",

top: 0,

height: "100%",

width: "100%",

backgroundGradient: {

        type: 'linear',

        startPoint: { x: '0%', y: '50%' },

        endPoint: { x: '100%', y: '50%' },

        colors: [ { color: '#FF9D3A'}, { color: '#FF3A3A' }],

    }


});



var fView = Ti.UI.createView({

backgroundColor: "Black",

opacity: "0.3",

Width: "100%",

height: "20%",

top: "10%"


});

var conView = Ti.UI.createView({

backgroundColor: "Black",

opacity: "0.3",

Width: "100%",

height: "15%",

top: "31%"

});

var csView = Ti.UI.createView({

backgroundColor: "Black",

opacity: "0.3",

Width: "100%",

height: "15%",

top: "47%"

});

var celView = Ti.UI.createView({

backgroundColor: "Black",

opacity: "0.3",

Width: "100%",

height: "15%",

top: "63%"

});

var wtmView = Ti.UI.createView({

backgroundColor: "Black",

opacity: "0.3",

Width: "100%",

height: "15%",

top: "79%"

});

var ciView = Ti.UI.createImageView({

image: "weather",

height: "10%",

width: "20%",

top: "34%",

right: "10%"

});

var icon = Ti.UI.createImageView({

image: "sun",

height: "7%",

width: "12%",

top: "3%",


});

var for1 = Ti.UI.createLabel({
color: "White",

top: "60%",

textAlign: "center"
	
});




var buildUi = function(obj) {
console.log(obj);
csLabel.text = obj.City + ", " + obj.State;
con.text =  obj.Condition;
fah.text =  obj.Fahrenheit + " F";
Cel.text = obj.Celsius + " C";
wtmLabel.text = "Wind Mph: " + obj.WindMph + " " + " Wind Temp: " + obj.WindTemp;
win.open();
};

var ltlng = function(url) {

var gps = require("geo");
gps.getData(url);



};
var reLabel = Ti.UI.createLabel({
	text: "Refresh",
	color: "White"
	
});
var refresh = Ti.UI.createView ({
	bottom: "0.5%",
	height: "5%",
	width: "30%",
	backgroundColor: "Black",
	opacity: "0.7"
	
	
});

var elist = require("geo");
refresh.addEventListener("click",elist.getGeo);

win.add(mainView);
win.add(fView);
win.add(csView);
win.add(conView);
win.add(celView);
win.add(wtmView);
win.add(fah);
win.add(con);
win.add(csLabel);
win.add(Cel);
win.add(wtmLabel);
win.add(ciView);
win.add(icon);
win.add(refresh);
refresh.add(reLabel);
exports.ltlng = ltlng;
exports.buildUi = buildUi; 