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

var lat2 = Ti.UI.createLabel({

color : "Black"

});

var lng2 = Ti.UI.createLabel({

color : "Black"



});



var buildUi = function(obj) {
console.log(obj);
csLabel.text = obj.City + ", " + obj.State;
con.text =  "Overcast";
fah.text =  obj.Fahrenheit + " F";
Cel.text = obj.Celsius + " C";
wtmLabel.text = "Wind Mph: " + obj.WindMph + " " + " Wind Temp: " + obj.WindTemp;
win.open();
};

var ltlng = function(arg1, arg2) {

var gps = require("geo");

console.log(arg1 + " Figure this out you idiot");

console.log(arg2);

gps.getData(arg1, arg2);



};



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

exports.ltlng = ltlng;

exports.buildUi = buildUi; 