var win = Ti.UI.createWindow({
	backgroundImage : "light",
	
	
});
var win2 = Ti.UI.createWindow({
	
	backgroundGradient: {
        type: 'linear',
        startPoint: { x: '0%', y: '50%' },
        endPoint: { x: '100%', y: '50%' },
        colors: [ { color: '#FF9D3A'}, { color: '#FF3A3A' }],
    }
	
});

var mainView = Ti.UI.createView({
	backgroundColor: "white",
	opacity: "0.2",
	width: "100%",
	height: "100%"
	
});
var fah = Ti.UI.createLabel({
color : "White",
textAlign: "center",
font : {
    fontSize: 50,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
});

var con = Ti.UI.createLabel({
color : "White",
textAlign: "center"
});

var Cel = Ti.UI.createLabel({
color : "White",
textAlign: "center",
font : {
    fontSize: 20,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
});


var csLabel = Ti.UI.createLabel({
color: "White",
textAlign: "center"
});

var fView = Ti.UI.createView({
backgroundColor: "#FF3939",
opacity: "0.7",
Width: 300,
height: 300,
top: 50,
borderRadius: 150
});

var conView = Ti.UI.createView({
backgroundColor: "Black",
opacity: "0.7",
Width: 200,
height: 200,
top: 370,
borderRadius: 100
});

var csView = Ti.UI.createView({
backgroundColor: "Black",
opacity: "0.7",
Width: 200,
height: 200,
top: 250,
left: 30,
borderRadius: 100
});

var celView = Ti.UI.createView({
backgroundColor: "#4B7CFF",
opacity: "0.7",
Width: 200,
height: 200,
top: 250,
right:30,
borderRadius: 100
});

var cloudy1 = Ti.UI.createImageView({
	image: "cloudy",
	width: 200,
	height: 200,
	top: 20
	
});

var cloudy2 = Ti.UI.createImageView({
	image: "cloudy",
	width: 100,
	height: 100,
	top: 30
	
});
var cloudy3 = Ti.UI.createImageView({
	image: "cloudy",
	width: 100,
	height: 100,
	top: 30
	
});
var most = Ti.UI.createImageView({
	Image: "mostly",
	width: 100,
	height: 100,
	top: 30
	
});
var most2 = Ti.UI.createImageView({
	Image: "mostly",
	width: 100,
	height: 100,
	top: 30
	
});
var over = Ti.UI.createImageView({
	Image: "over",
	width: 100,
	height: 100,
	top: 40
	
});
var right = Ti.UI.createView({
	backgroundColor: "black",
	opacity: "0.7",
	width: 200,
	height: 200,
	top: 500,
	right: 50,
	borderRadius: 20
	
});
var left = Ti.UI.createView({
	backgroundColor: "black",
	opacity: "0.7",
	width: 200,
	height: 200,
	top: 500,
	left: 50,
	borderRadius: 30
	
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
	right: "1%",
	bottom: "0.5%",
	height: "5%",
	width: "20%",
	backgroundColor: "Black",
	opacity: "0.7",
	borderRadius: 20
	
	
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
	bottom: 300,
	height: 1,
	width: 600,
	backgroundColor: "Black",
	opacity: "0.3"
	
});
var fore1 = Ti.UI.createView({
	bottom: 70,
	left: 25,
	height: 200,
	width: 150,
	borderRadius: 25,
	backgroundColor: "Black",
	opacity: "0.7"
	
});
var fore2 = Ti.UI.createView({
	bottom: 70,
	left: 200,
	height: 200,
	width: 150,
	borderRadius: 25,
	backgroundColor: "Black",
	opacity: "0.7"
	
});
var fore3 = Ti.UI.createView({
	bottom: 70,
	right: 200,
	height: 200,
	width: 150,
	borderRadius: 25,
	backgroundColor: "Black",
	opacity: "0.7"
	
});
var fore4 = Ti.UI.createView({
	bottom: 70,
	right: 20,
	height: 200,
	width: 150,
	borderRadius: 25,
	backgroundColor: "Black",
	opacity: "0.7"
	
});
var f1 = Ti.UI.createLabel({
	color: "white",
	text: "F",
	textAlign: "center",
	bottom: 35,
	left: 20,
	font : {
    fontSize: 15,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
});

var f2 = Ti.UI.createLabel({
	text: "F",
	color:"white",
	bottom: 35,
	left: 20,
	textAlign: "center",
	font : {
    fontSize: 15,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
});
var f3 = Ti.UI.createLabel({
	color: "white",
	text: "F",
	bottom: 35,
	left: 20,
	textAlign: "center",
	font : {
    fontSize: 15,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
});
var f4 = Ti.UI.createLabel({
	color: "white",
	text: "F",
	bottom: 35,
	left: 20,
	textAlign: "center",
	font : {
    fontSize: 15,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
});
var c1 = Ti.UI.createLabel({
	color: "white",
	text: "C",
	bottom: 35,
	right: 20,
	textAlign: "center",
	font : {
    fontSize: 15,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
});
var c2 = Ti.UI.createLabel({
	color: "white",
	text: "C",
	bottom: 35,
	right: 20,
	textAlign: "center",
	font : {
    fontSize: 15,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
});
var c3 = Ti.UI.createLabel({
	color: "white",
	text: "C",
	bottom: 35,
	right: 20,
	textAlign: "center",
	font : {
    fontSize: 15,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
});
var c4 = Ti.UI.createLabel({
	color: "white",
	text: "C",
	bottom: 35,
	right: 20,
	textAlign: "center",
	font : {
    fontSize: 15,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
});
var open2 = function(){
	win2.open();
	
};
var back = function(){
	win2.close();
	
};

fView.addEventListener('click', function() {
  var matrix = Ti.UI.create2DMatrix();
  matrix = matrix.scale(2, 2);
  var a = Ti.UI.createAnimation({
    transform : matrix,
    duration : 1000,
    autoreverse : true,
    repeat : 1
  });
  fView.animate(a);
});
csView.addEventListener('click', function() {
  var matrix = Ti.UI.create2DMatrix();
  matrix = matrix.scale(2, 2);
  var a = Ti.UI.createAnimation({
    transform : matrix,
    duration : 1000,
    autoreverse : true,
    repeat : 1
  });
  csView.animate(a);
});
conView.addEventListener('click', function() {
  var matrix = Ti.UI.create2DMatrix();
  matrix = matrix.scale(2, 2);
  var a = Ti.UI.createAnimation({
    transform : matrix,
    duration : 1000,
    autoreverse : true,
    repeat : 1
  });
  conView.animate(a);
});
celView.addEventListener('click', function() {
  var matrix = Ti.UI.create2DMatrix();
  matrix = matrix.scale(2, 2);
  var a = Ti.UI.createAnimation({
    transform : matrix,
    duration : 1000,
    autoreverse : true,
    repeat : 1
  });
  celView.animate(a);
});

var elev = Ti.UI.createLabel({
	color: "white"
	
});
var hum = Ti.UI.createLabel({
	color: "white"
	
});
var time = Ti.UI.createLabel({
	color: "white",
	bottom: "0.5%"
	
});
var elev2 = Ti.UI.createLabel({
	color: "white",
	top: 50,
	text: "Elevation"
	
});
var hum2 = Ti.UI.createLabel({
	color: "white",
	top: 50,
	text: "Humidity"
	
});
var buildUI2 = function(obj) {
	csLabel.text = obj.City + ", " + obj.State;
	con.text =  obj.Condition;
	fah.text =  obj.Fahrenheit;
	Cel.text = obj.Celsius ;
	elev.text = obj.elevation;
	hum.text = obj.humid;
	time.text = obj.timestamp;
	
var elist = require("api");
refresh.addEventListener("click",elist.getGeo);
	win.add(mainView);
	win.add(trans1);
	win.add(fore1);
	win.add(fore2);
	win.add(fore3);
	win.add(fore4);
	win.add(fView);
	win.add(csView);
	win.add(conView);
	win.add(celView);
	win.add(right);
	win.add(left);
	fView.add(fah);
	win.add(time);
	conView.add(con);
	conView.add(cloudy1);
	celView.add(Cel);
	csView.add(csLabel);
	win.add(refresh);
	right.add(elev);
	right.add(elev2);
	left.add(hum2);
	left.add(hum);
	backView.add(backLabel);
	refresh.add(reLabel);
	win.open();
	
};

var buildUI = function(dbOutput) {
	
	for (i=0, j=dbOutput.length; i < j; i++){
		
	var day = Ti.UI.createLabel({
	color: "White",
	textAlign: "center",
	top: 2,
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
	bottom : 60,
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
	top: 2,
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
	bottom: 60,
	text: dbOutput[1].con,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}


});
var day3 = Ti.UI.createLabel({
	color: "White",
	top: 2,
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
	bottom: 60,
	text: dbOutput[2].con,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}


});
var day4 = Ti.UI.createLabel({
	color: "White",
	top: 2,
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
	bottom: 60,
	text: dbOutput[3].con,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}


});

	var hFah1 = Ti.UI.createLabel({
	color: "white",
	left: 15,
	bottom: 15,
	text: dbOutput[0].fah + "/" + dbOutput[0].fah2,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
	var hFah2 = Ti.UI.createLabel({
	color: "white",
	left: 15,
	bottom: 15,
	text: dbOutput[1].fah + "/" + dbOutput[1].fah2,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
	var hFah2 = Ti.UI.createLabel({
	color: "white",
	left: 15,
	bottom: 15,
	text: dbOutput[1].fah + "/" + dbOutput[1].fah2,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
	var hFah3 = Ti.UI.createLabel({
	color: "white",
	left: 15,
	bottom: 15,
	text: dbOutput[2].fah + "/" + dbOutput[2].fah2,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
	var hFah4 = Ti.UI.createLabel({
	color: "white",
	left: 15,
	bottom: 15,
	text: dbOutput[3].fah + "/" + dbOutput[3].fah2,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
	var hCel1 = Ti.UI.createLabel({
	color: "white",
	right: 15,
	bottom: 15,
	text: dbOutput[0].cel + "/" + dbOutput[0].cel2,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
	var hCel2 = Ti.UI.createLabel({
	color: "white",
	right: 15,
	bottom: 15,
	text: dbOutput[1].cel + "/" + dbOutput[1].cel2,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
	var hCel3 = Ti.UI.createLabel({
	color: "white",
	right: 15,
	bottom: 15,
	text: dbOutput[2].cel + "/" + dbOutput[2].cel2,
	font : {
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var hCel4 = Ti.UI.createLabel({
	color: "white",
	right: 15,
	bottom: 15,
	text: dbOutput[3].cel + "/" + dbOutput[3].cel2,
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

	
	}
	fore1.add(day);
	fore2.add(day2);
	fore3.add(day3);
	fore4.add(day4);
	fore1.add(con1);
	fore2.add(con2);
	fore3.add(con3);
	fore4.add(con4);
	fore1.add(cloudy2);
	fore2.add(cloudy3);
	fore3.add(most);
	fore4.add(most2);
	fore1.add(hFah1);
	fore1.add(hCel1);
	fore2.add(hFah2);
	fore2.add(hCel2);
	fore3.add(hFah3);
	fore3.add(hCel3);
	fore4.add(hFah4);
	fore4.add(hCel4);
	fore1.add(f1);
	fore1.add(c1);
	fore2.add(f2);
	fore2.add(c2);
	fore3.add(f3);
	fore3.add(c3);
	fore4.add(f4);
	fore4.add(c4);
};

var ltlng = function(url) {
console.log(url);
var gps = require("api");
gps.getData(url);
};

exports.ltlng = ltlng;
exports.buildUI = buildUI;
exports.buildUI2 = buildUI2;