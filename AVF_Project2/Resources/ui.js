var win = Ti.UI.createWindow({
	backgroundColor : "#ccc",
	
	
});
var win2 = Ti.UI.createWindow({
	
	backgroundGradient: {
        type: 'linear',
        startPoint: { x: '0%', y: '50%' },
        endPoint: { x: '100%', y: '50%' },
        colors: [ { color: '#FF9D3A'}, { color: '#FF3A3A' }],
    }
	
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
var foreLabel = Ti.UI.createLabel({
	text: "Forecast >",
	color: "White"
	
});
var foreView = Ti.UI.createView ({
	bottom: "0.5%",
	right: "2%",
	height: "5%",
	width: "30%",
	backgroundColor: "Black",
	opacity: "0.7"
	
	
});
var backLabel = Ti.UI.createLabel({
	text: "< Back",
	color: "White"
	
});
var backView = Ti.UI.createView({
	bottom: "0.5%",
	height: "5%",
	width: "30%",
	backgroundColor: "Black",
	opacity: "0.7"
	
	
});

var trans1 = Ti.UI.createView({
	top: 150,
	left: 50,
	height: 375,
	width: 300,
	backgroundColor: "Black",
	
});
var trans2 = Ti.UI.createView({
	top: 150,
	right: 50,
	height: 375,
	width: 300,
	backgroundColor: "Black",
	
});
var trans3 = Ti.UI.createView({
	top: 575,
	left: 50,
	height: 375,
	width: 300,
	backgroundColor: "Black",
	
});
var trans4 = Ti.UI.createView({
	top: 575,
	right: 50,
	height: 375,
	width: 300,
	backgroundColor: "Black",
	
});
var open2 = function(){
	win2.open();
	
};
var back = function(){
	win2.close();
	
};

var buildUI2 = function(obj) {
	csLabel.text = obj.City + ", " + obj.State;
	con.text =  obj.Condition;
	fah.text =  obj.Fahrenheit + " F";
	Cel.text = obj.Celsius + " C";
	wtmLabel.text = "Wind Mph: " + obj.WindMph + " " + " Wind Temp: " + obj.WindTemp;
	
var elist = require("api");
refresh.addEventListener("click",elist.getGeo);
foreView.addEventListener("click",open2);
backView.addEventListener("click", back);
	
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
	win.add(refresh);
	win.add(foreView);
	backView.add(backLabel);
	foreView.add(foreLabel);
	refresh.add(reLabel);
	win.open();
	
};

var buildUI = function(dbOutput) {
	win2.add(backView);
	win2.add(trans1);
	win2.add(trans2);
	win2.add(trans3);
	win2.add(trans4);
	
	for (i=0, j=dbOutput.length; i < j; i++){
		
	var day = Ti.UI.createLabel({
	color: "White",
	textAlign: "center",
	top: 225,
	text: dbOutput[0].title,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}


});
	var con1 = Ti.UI.createLabel({
	color: "White",
	textAlign: "center",
	top: 250,
	text: dbOutput[0].con,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}


});
var day2 = Ti.UI.createLabel({
	color: "White",
	textAlign: "center",
	top: 225,
	text: dbOutput[1].title,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}

});
	var con2 = Ti.UI.createLabel({
	color: "White",
	textAlign: "center",
	top: 250,
	text: dbOutput[1].con,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}


});
var day3 = Ti.UI.createLabel({
	color: "White",
	top: 225,
	text: dbOutput[2].title,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}

});
var con3 = Ti.UI.createLabel({
	color: "White",
	textAlign: "center",
	top: 250,
	text: dbOutput[2].con,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}


});
var day4 = Ti.UI.createLabel({
	color: "White",
	top: 225,
	text: dbOutput[3].title,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}

});
var con4 = Ti.UI.createLabel({
	color: "White",
	textAlign: "center",
	top: 250,
	text: dbOutput[3].con,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}


});

	var fah = Ti.UI.createLabel({
	color: "black",
	top: 20,
	text: "F: " + dbOutput[i].fah,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
	var cel = Ti.UI.createLabel({
	color: "black",
	top: 20,
	text: "C: " + dbOutput[i].cel,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
	var con = Ti.UI.createLabel({
	color: "black",
	top: 20,
	text: dbOutput[i].con,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
   }
});
	var fah2 = Ti.UI.createLabel({
	color: "black",
	top: 20,
	text: dbOutput[i].fah2,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
});
	var cel2 = Ti.UI.createLabel({
	color: "black",
	top: 20,
	text: dbOutput[i].cel2,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
});
	trans1.add(day);
	trans2.add(day2);
	trans3.add(day3);
	trans4.add(day4);
	trans1.add(con1);
	trans2.add(con2);
	trans3.add(con3);
	trans4.add(con4);
	//win2.add(fah);
	//win2.add(cel);
	//win2.add(con);
	//win2.add(fah2);
	//win2.add(cel2);
	}
	
	
	
};

var ltlng = function(url) {
console.log(url);
var gps = require("api");
gps.getData(url);
};

exports.ltlng = ltlng;
exports.buildUI = buildUI;
exports.buildUI2 = buildUI2;
