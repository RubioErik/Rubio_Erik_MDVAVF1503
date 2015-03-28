var win = Ti.UI.createWindow({
	fullscreen: true,
	backgroundColor: "white"
	
});
var gasT = Ti.UI.createLabel({
	text: "Gas",
	color: "White",
	top: "2%",
	left: "35%",
	font : {
    fontSize: 40,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var gSha = Ti.UI.createLabel({
	text: "Gas",
	color: "Black",
	opacity: "0.5",
	top: "2.1%",
	left: "34.6%",
	font : {
    fontSize: 40,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var at = Ti.UI.createLabel({
	text: "@",
	color: "White",
	top: "2.6%",
	font : {
    fontSize: 24,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var handT = Ti.UI.createLabel({
	text: "Hand",
	color: "White",
	top: "2%",
	right: "32%",
	font : {
    fontSize: 40,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var hSha = Ti.UI.createLabel({
	text: "Hand",
	color: "Black",
	opacity: "0.5",
	top: "2.1%",
	right: "32.4%",
	font : {
    fontSize: 40,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var red = Ti.UI.createView({
	backgroundColor: "#E92020",
	width: "100%",
	height: "100%",
	
});
var rb1 = Ti.UI.createView({
	backgroundColor: "#E92020",
	width: "100%",
	height: "100%",
	
});
var rb2 = Ti.UI.createView({
	backgroundColor: "#E92020",
	width: "100%",
	height: "100%",
	
});
var rb3 = Ti.UI.createView({
	backgroundColor: "#E92020",
	width: "100%",
	height: "100%",
	
});
var rb4 = Ti.UI.createView({
	backgroundColor: "#E92020",
	width: "100%",
	height: "100%",
	
});
var rb5 = Ti.UI.createView({
	backgroundColor: "#E92020",
	width: "100%",
	height: "100%",
	
});
var rb6 = Ti.UI.createView({
	backgroundColor: "#E92020",
	width: "100%",
	height: "100%",
	
});
var g1 = Ti.UI.createView({
	width: "100%",
	height: "100%",
	backgroundColor: "#E8E8E8",
	top: "6%",
	
});
var g2 = Ti.UI.createView({
	width: "100%",
	height: "100%",
	backgroundColor: "#E8E8E8",
	top: "6%",
	
});
var g3 = Ti.UI.createView({
	width: "100%",
	height: "100%",
	backgroundColor: "#E8E8E8",
	top: "6%",
	
});
var g4 = Ti.UI.createView({
	width: "100%",
	height: "100%",
	backgroundColor: "#E8E8E8",
	top: "6%",
	
});
var g5 = Ti.UI.createView({
	width: "100%",
	height: "100%",
	backgroundColor: "#E8E8E8",
	top: "6%",
	
});
var g6 = Ti.UI.createView({
	width: "100%",
	height: "100%",
	backgroundColor: "#E8E8E8",
	top: "6%",
	
});

var b1 = Ti.UI.createWindow({
	fullscreen: true,
	backgroundColor: "white"
	
});
var b2 = Ti.UI.createWindow({
	fullscreen: true,
	backgroundColor: "white"
	
});
var b3 = Ti.UI.createWindow({
	fullscreen: true,
	backgroundColor: "white"
	
});
var b4 = Ti.UI.createWindow({
	fullscreen: true,
	backgroundColor: "white"
	
});
var b5 = Ti.UI.createWindow({
	fullscreen: true,
	backgroundColor: "white"
	
});
var b6 = Ti.UI.createWindow({
	fullscreen: true,
	backgroundColor: "white"
	
});
var icon = Ti.UI.createImageView({
	 image: "gas",
	 height: "10%",
	 width: "14%",
	 top: "1%"
});
var butView = Ti.UI.createView({
	backgroundColor: "White",
	bottom: "1%",
	height: 60,
	width: 60,
	borderRadius: 30.5
	});
var shad1 = Ti.UI.createView({
	backgroundColor: "Black",
	right: "46.2%",
	bottom: "0.8%",
	height: 61,
	width: 61,
	borderRadius: 30.5,
	opacity: "0.5"
	});	

var butLabel = Ti.UI.createLabel({
	text: "R",
	textAlign: "center",
	color: "Black"
	
});
var label1 = Ti.UI.createLabel({
	text: "More..",
	color: "black",
		font : {
    fontSize: 13,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}

});
var label2 = Ti.UI.createLabel({
	text: "More..",
	color: "black",
		font : {
    fontSize: 13,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}

});
var label3 = Ti.UI.createLabel({
	text: "More..",
	color: "black",
		font : {
    fontSize: 13,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}

});
var label4 = Ti.UI.createLabel({
	text: "More..",
	color: "black",
		font : {
    fontSize: 13,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}

});
var label5 = Ti.UI.createLabel({
	text: "More..",
	color: "black",
		font : {
    fontSize: 13,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}

});
var label6 = Ti.UI.createLabel({
	text: "More..",
	color: "black",
		font : {
    fontSize: 13,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}

});
var backView = Ti.UI.createView({
	backgroundColor: "White",
	bottom: "1%",
	height: 60,
	width: 60,
	borderRadius: 30.5
	});
var bs1 = Ti.UI.createView({
	backgroundColor: "Black",
	right: "46.2%",
	bottom: "0.8%",
	height: 61,
	width: 61,
	borderRadius: 30.5,
	opacity: "0.5"
	});	
var bL = Ti.UI.createLabel({
	text: "B",
	color: "black"
	
});
var backView2 = Ti.UI.createView({
	backgroundColor: "White",
	bottom: "1%",
	height: 60,
	width: 60,
	borderRadius: 30.5
	});
var bs2 = Ti.UI.createView({
	backgroundColor: "Black",
	right: "46.2%",
	bottom: "0.8%",
	height: 61,
	width: 61,
	borderRadius: 30.5,
	opacity: "0.5"
	});	
var bL2 = Ti.UI.createLabel({
	text: "B",
	color: "black"
	
});
var backView3 = Ti.UI.createView({
	backgroundColor: "White",
	bottom: "1%",
	height: 60,
	width: 60,
	borderRadius: 30.5
	});
var bs3 = Ti.UI.createView({
	backgroundColor: "Black",
	right: "46.2%",
	bottom: "0.8%",
	height: 61,
	width: 61,
	borderRadius: 30.5,
	opacity: "0.5"
	});	
var bL3 = Ti.UI.createLabel({
	text: "B",
	color: "black"
	
});
var backView4 = Ti.UI.createView({
	backgroundColor: "White",
	bottom: "1%",
	height: 60,
	width: 60,
	borderRadius: 30.5
	});
var bs4 = Ti.UI.createView({
	backgroundColor: "Black",
	right: "46.2%",
	bottom: "0.8%",
	height: 61,
	width: 61,
	borderRadius: 30.5,
	opacity: "0.5"
	});	
	
var bL4 = Ti.UI.createLabel({
	text: "B",
	color: "black"
	
});
var backView5 = Ti.UI.createView({
	backgroundColor: "White",
	bottom: "1%",
	height: 60,
	width: 60,
	borderRadius: 30.5
	});
var bs5 = Ti.UI.createView({
	backgroundColor: "Black",
	right: "46.2%",
	bottom: "0.8%",
	height: 61,
	width: 61,
	borderRadius: 30.5,
	opacity: "0.5"
	});	
var bL5 = Ti.UI.createLabel({
	text: "B",
	color: "black"
	
});
var backView6 = Ti.UI.createView({
	backgroundColor: "White",
	bottom: "1%",
	height: 60,
	width: 60,
	borderRadius: 30.5
	});
var bs6 = Ti.UI.createView({
	backgroundColor: "Black",
	right: "46.2%",
	bottom: "0.8%",
	height: 61,
	width: 61,
	borderRadius: 30.5,
	opacity: "0.5"
	});	
var bL6 = Ti.UI.createLabel({
	text: "B",
	color: "black"
	
});	
var shad2= Ti.UI.createView({
	backgroundColor: "black",
	opacity: "0.5",
	width: "19.1%",
	height: "4.5%",
	left: "6.9%",
	top: "35%",
	borderRadius: 11
});
var butView2 = Ti.UI.createView({
	backgroundColor: "white",
	top: "35%",
	left: "7%",
	height:"4%",
	width: "19%",
	borderRadius: 10
	
});

var butView3 = Ti.UI.createView({
	backgroundColor: "white",
	top: "35%",
	right: "7%",
	height:"4%",
	width: "19%",
	borderRadius: 10
	
});
var shad3= Ti.UI.createView({
	backgroundColor: "black",
	opacity: "0.5",
	width: "19.1%",
	height: "4.5%",
	right : "7.0%",
	top: "35%",
	borderRadius: 11
});



var butView4 = Ti.UI.createView({
	backgroundColor: "white",
	top: "65%",
	left: "7%",
	height:"4%",
	width: "19%",
	borderRadius: 10
	
});
var shad4 = Ti.UI.createView({
	backgroundColor: "black",
	opacity: "0.5",
	width: "19.1%",
	height: "4.5%",
	left : "6.9%",
	top: "65%",
	borderRadius: 11
});
var butView5 = Ti.UI.createView({
	backgroundColor: "white",
	top: "65%",
	right: "7%",
	height:"4%",
	width: "19%",
	borderRadius: 10
	
});
var shad5 = Ti.UI.createView({
	backgroundColor: "black",
	opacity: "0.5",
	width: "19.1%",
	height: "4.5%",
	right : "7.0%",
	top: "65%",
	borderRadius: 11
});
var butView6 = Ti.UI.createView({
	backgroundColor: "white",
	top: "95%",
	left: "7%",
	height:"4%",
	width: "19%",
	borderRadius: 10
	
});
var shad6 = Ti.UI.createView({
	backgroundColor: "black",
	opacity: "0.5",
	width: "19.1%",
	height: "4.5%",
	left : "6.9%",
	top: "95%",
	borderRadius: 11
});
var butView7 = Ti.UI.createView({
	backgroundColor: "white",
	top: "95%",
	right: "7%",
	height:"4%",
	width: "19%",
	borderRadius: 10
	
});
var shad7 = Ti.UI.createView({
	backgroundColor: "black",
	opacity: "0.5",
	width: "19.1%",
	height: "4.5%",
	right : "7.0%",
	top: "95%",
	borderRadius: 11
});




butView.add(butLabel);
butView2.add(label1);
butView3.add(label2);
butView4.add(label3);
butView5.add(label4);
butView6.add(label5);
butView7.add(label6);

butView.addEventListener('click', function() {
 var api2 = require("api");
 api2.getGeo();
});
butView2.addEventListener('click', function() {
  b1.open();
});
backView.addEventListener('click', function(){
b1.close();	
});
butView3.addEventListener('click', function() {
	b2.open();
});
backView2.addEventListener('click', function(){
	b2.close();
});
butView4.addEventListener('click', function() {
  b3.open();
});
backView3.addEventListener('click', function(){
	b3.close();
});
butView5.addEventListener('click', function() {
  b4.open();
});
backView4.addEventListener('click', function(){
	b4.close();
});
butView6.addEventListener('click', function() {
  b5.open();
});
backView5.addEventListener('click', function(){
	b5.close();
});
butView7.addEventListener('click', function() {
  b6.open();
});
backView6.addEventListener('click', function(){
	b6.close();
});

var text = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  textAlign: "center",
  top: 10, left: 10,
  width: "10%", height: "3%"
});
win.add(text);

var trans = Ti.UI.createView({
	width: "100%",
	height: "100%",
	backgroundColor: "#E8E8E8",
	top: "6%",
	
});

var buildUI = function(dbOutput) {
	
	for (i=0, j=dbOutput.length; i < j; i++){
		
var title = Ti.UI.createLabel({
	color: "Red",
	left: "10%",
	top: "15%",
	text: dbOutput[0].title,
	font : {
    fontSize: 24,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	

var btitle = Ti.UI.createLabel({
	color: "White",
	top: "2%",
	text: dbOutput[0].title,
	font : {
    fontSize: 32,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var title2 = Ti.UI.createLabel({
	color: "Red",
	right: "10%",
	top: "15%",
	text: dbOutput[1].title,
	font : {
    fontSize: 24,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var btitle2 = Ti.UI.createLabel({
	color: "White",
	top: "2%",
	text: dbOutput[1].title,
	font : {
    fontSize: 32,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});

var title3 = Ti.UI.createLabel({
	color: "Red",
	left: "10%",
	top: "45%",
	text: dbOutput[2].title,
	font : {
    fontSize: 24,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var btitle3 = Ti.UI.createLabel({
	color: "White",
	top: "2%",
	text: dbOutput[2].title,
	font : {
    fontSize: 32,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var title4 = Ti.UI.createLabel({
	color: "Red",
	right: "10%",
	top: "45%",
	text: dbOutput[3].title,
	font : {
    fontSize: 24,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var btitle4 = Ti.UI.createLabel({
	color: "White",
	top: "2%",
	text: dbOutput[3].title,
	font : {
    fontSize: 32,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var title5 = Ti.UI.createLabel({
	color: "Red",
	left: "10%",
	top: "75%",
	text: dbOutput[4].title,
	font : {
    fontSize: 24,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});		
var btitle5 = Ti.UI.createLabel({
	color: "White",
	top: "2%",
	text: dbOutput[4].title,
	font : {
    fontSize: 32,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var title6 = Ti.UI.createLabel({
	color: "Red",
	right: "10%",
	top: "75%",
	text: dbOutput[5].title,
	font : {
    fontSize: 24,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var btitle6 = Ti.UI.createLabel({
	color: "White",
	top: "2%",
	text: dbOutput[5].title,
	font : {
    fontSize: 32,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var dist = Ti.UI.createLabel({
	color: "Black",
	left: "10%",
	top: "20%",
	text: dbOutput[0].dist,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var bDist = Ti.UI.createLabel({
	color: "Black",
	top: "15%",
	text: dbOutput[0].dist,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dist2 = Ti.UI.createLabel({
	color: "black",
	right: "10%",
	top: "20%",
	text: dbOutput[1].dist,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var bDist2 = Ti.UI.createLabel({
	color: "Black",
	top: "15%",
	text: dbOutput[1].dist,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dist3 = Ti.UI.createLabel({
	color: "black",
	left: "10%",
	top: "50%",
	text: dbOutput[2].dist,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var bDist3 = Ti.UI.createLabel({
	color: "Black",
	top: "15%",
	text: dbOutput[2].dist,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});

var dist4 = Ti.UI.createLabel({
	color: "black",
	right: "10%",
	top: "50%",
	text: dbOutput[3].dist,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var bDist4 = Ti.UI.createLabel({
	color: "Black",
	top: "15%",
	text: dbOutput[3].dist,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dist5 = Ti.UI.createLabel({
	color: "black",
	left: "10%",
	top: "80%",
	text: dbOutput[4].dist,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var bDist5 = Ti.UI.createLabel({
	color: "Black",
	top: "15%",
	text: dbOutput[4].dist,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dist6 = Ti.UI.createLabel({
	color: "black",
	right: "10%",
	top: "80%",
	text: dbOutput[5].dist,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var bDist6 = Ti.UI.createLabel({
	color: "Black",
	top: "15%",
	text: dbOutput[5].dist,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var adr = Ti.UI.createLabel({
	color: "black",
	left: "10%",
	top: "25%",
	text: dbOutput[0].adr,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var bAdr = Ti.UI.createLabel({
	color: "Black",
	top: "10%",
	text: dbOutput[0].adr,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var adr2 = Ti.UI.createLabel({
	color: "black",
	right: "10%",
	top: "25%",
	text: dbOutput[1].adr,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var bAdr2 = Ti.UI.createLabel({
	color: "black",
	top: "10%",
	text: dbOutput[1].adr,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var adr3 = Ti.UI.createLabel({
	color: "black",
	left: "10%",
	top: "55%",
	text: dbOutput[2].adr,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var bAdr3 = Ti.UI.createLabel({
	color: "black",
	top: "10%",
	text: dbOutput[2].adr,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var adr4 = Ti.UI.createLabel({
	color: "black",
	right: "10%",
	top: "55%",
	text: dbOutput[3].adr,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var bAdr4 = Ti.UI.createLabel({
	color: "black",
	top: "10%",
	text: dbOutput[3].adr,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var adr5 = Ti.UI.createLabel({
	color: "black",
	left: "10%",
	top: "85%",
	text: dbOutput[4].adr,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var bAdr5 = Ti.UI.createLabel({
	color: "black",
	top: "10%",
	text: dbOutput[4].adr,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var adr6 = Ti.UI.createLabel({
	color: "black",
	right: "10%",
	top: "85%",
	text: dbOutput[5].adr,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var bAdr6 = Ti.UI.createLabel({
	color: "black",
	top: "10%",
	text: dbOutput[5].adr,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var reg = Ti.UI.createLabel({
	color: "black",
	left: "10%",
	top: "30%",
	text: "REG: " + dbOutput[0].reg,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var bReg = Ti.UI.createLabel({
	color: "black",
	top: "20%",
	text: "REGULAR: " + dbOutput[0].reg,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var reg2 = Ti.UI.createLabel({
	color: "black",
	right: "10%",
	top: "30%",
	text: "REG: " + dbOutput[1].reg,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var bReg2 = Ti.UI.createLabel({
	color: "black",
	top: "20%",
	text: "REGULAR: " + dbOutput[1].reg,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var reg3 = Ti.UI.createLabel({
	color: "black",
	left: "10%",
	top: "60%",
	text: "REG: " + dbOutput[2].reg,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var bReg3 = Ti.UI.createLabel({
	color: "black",
	top: "20%",
	text: "REGULAR: " + dbOutput[2].reg,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var reg4 = Ti.UI.createLabel({
	color: "black",
	right: "10%",
	top: "60%",
	text: "REG: " + dbOutput[3].reg,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var bReg4 = Ti.UI.createLabel({
	color: "black",
	top: "20%",
	text: "REGULAR: " + dbOutput[3].reg,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var reg5 = Ti.UI.createLabel({
	color: "black",
	left: "10%",
	top: "90%",
	text: "REG: " + dbOutput[4].reg,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var bReg5 = Ti.UI.createLabel({
	color: "black",
	top: "20%",
	text: "REGULAR: " + dbOutput[4].reg,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var reg6 = Ti.UI.createLabel({
	color: "black",
	right: "10%",
	top: "90%",
	text: "REG: " + dbOutput[5].reg,
	font : {
    fontSize: 18,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var bReg6 = Ti.UI.createLabel({
	color: "black",
	top: "20%",
	text: "REGULAR: " + dbOutput[5].reg,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	

});	
var mid = Ti.UI.createLabel({
	color: "Black",
	top: "25%",
	text: "MIDGRADE: " +dbOutput[0].mid,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var mid2 = Ti.UI.createLabel({
	color: "Black",
	top: "25%",
	text: "MIDGRADE: " +dbOutput[1].mid,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var mid3 = Ti.UI.createLabel({
	color: "Black",
	top: "25%",
	text: "MIDGRADE: " +dbOutput[2].mid,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var mid4 = Ti.UI.createLabel({
	color: "Black",
	top: "25%",
	text: "MIDGRADE: " +dbOutput[3].mid,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var mid5 = Ti.UI.createLabel({
	color: "Black",
	top: "25%",
	text: "MIDGRADE: " +dbOutput[4].mid,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var mid6 = Ti.UI.createLabel({
	color: "Black",
	top: "25%",
	text: "MIDGRADE: " +dbOutput[5].mid,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var prem = Ti.UI.createLabel({
	color: "Black",
	top: "30%",
	text: "PREMIUM: " +dbOutput[0].pre,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var prem2 = Ti.UI.createLabel({
	color: "Black",
	top: "30%",
	text: "PREMIUM: " +dbOutput[1].pre,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var prem3 = Ti.UI.createLabel({
	color: "Black",
	top: "30%",
	text: "PREMIUM: " +dbOutput[2].pre,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var prem4 = Ti.UI.createLabel({
	color: "Black",
	top: "30%",
	text: "PREMIUM: " +dbOutput[3].pre,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var prem5 = Ti.UI.createLabel({
	color: "Black",
	top: "30%",
	text: "PREMIUM: " +dbOutput[4].pre,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var prem6 = Ti.UI.createLabel({
	color: "Black",
	top: "30%",
	text: "PREMIUM: " +dbOutput[5].pre,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dies = Ti.UI.createLabel({
	color: "Black",
	top: "35%",
	text: "DIESEL: " +dbOutput[0].pre,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dies2 = Ti.UI.createLabel({
	color: "Black",
	top: "35%",
	text: "DIESEL: " +dbOutput[1].pre,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dies3 = Ti.UI.createLabel({
	color: "Black",
	top: "35%",
	text: "DIESEL: " +dbOutput[2].pre,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dies4 = Ti.UI.createLabel({
	color: "Black",
	top: "35%",
	text: "DIESEL: " +dbOutput[3].pre,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dies5 = Ti.UI.createLabel({
	color: "Black",
	top: "35%",
	text: "DIESEL: " +dbOutput[4].pre,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dies6 = Ti.UI.createLabel({
	color: "Black",
	top: "35%",
	text: "DIESEL: " +dbOutput[5].pre,
	font : {
    fontSize: 26,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
	}
	
	win.add(red);
	win.add(trans);
	win.add(icon);
	win.add(title6);
	win.add(title5);
	win.add(title4);
	win.add(title3);
	win.add(title2);
	win.add(title);
	win.add(dist);
	win.add(dist2);
	win.add(dist3);
	win.add(dist4);
	win.add(dist5);
	win.add(dist6);
	win.add(adr);
	win.add(adr2);
	win.add(adr3);
	win.add(adr4);
	win.add(adr5);
	win.add(adr6);
	win.add(reg);
	win.add(reg2);
	win.add(reg3);
	win.add(reg4);
	win.add(reg5);
	win.add(reg6);
	win.add(shad1);
	win.add(shad2);
	win.add(shad3);
	win.add(shad4);
	win.add(shad5);
	win.add(shad6);
	win.add(shad7);
	win.add(butView);
	win.add(butView2);
	win.add(butView3);
	win.add(butView4);
	win.add(butView5);
	win.add(butView6);
	win.add(butView7);
	win.add(gSha);
	win.add(gasT);
	win.add(hSha);
	win.add(handT);
	win.add(at);
	b1.add(rb1);
	b1.add(g1);
	b1.add(btitle);
	b1.add(bAdr);
	b1.add(bDist);
	b1.add(bReg);
	b1.add(prem);
	b1.add(bs1);
	b1.add(backView);
	b1.add(mid);
	b1.add(dies);
	b2.add(rb2);
	b2.add(g2);
	b2.add(bs2);
	b2.add(backView2);
	b2.add(dies2);
	b2.add(bAdr2);
	b2.add(bDist2);
	b2.add(prem2);
	b2.add(btitle2);
	b2.add(bReg2);
	b2.add(mid2);
	b3.add(rb3);
	b3.add(g3);
	b3.add(btitle3);
	b3.add(dies3);
	b3.add(bAdr3);
	b3.add(prem3);
	b3.add(bDist3);
	b3.add(mid3);
	b3.add(bReg3);
	b3.add(bs3);
	b3.add(backView3);
	b4.add(rb4);
	b4.add(g4);
	b4.add(bs4);
	b4.add(backView4);
	b4.add(prem4);
	b4.add(dies4);
	b4.add(bAdr4);
	b4.add(bDist4);
	b4.add(mid4);
	b4.add(bReg4);
	b4.add(btitle4);
	b5.add(rb5);
	b5.add(g5);
	b5.add(bs5);
	b5.add(backView5);
	b5.add(dies5);
	b5.add(prem5);
	b5.add(btitle5);
	b5.add(bReg5);
	b5.add(mid5);
	b5.add(bAdr5);
	b5.add(bDist5);
	b6.add(rb6);
	b6.add(g6);
	b6.add(bAdr6);
	b6.add(bDist6);
	b6.add(dies6);
	b6.add(btitle6);
	b6.add(prem6);
	b6.add(mid6);	
	b6.add(bReg6);
	b6.add(bs6);
	b6.add(backView6);
	
};


win.open();
exports.buildUI = buildUI;