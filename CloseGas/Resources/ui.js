var win = Ti.UI.createWindow({
	fullscreen: true,
	backgroundImage: "background"
	
});

var icon = Ti.UI.createImageView({
	 image: "gas",
	 height: "10%",
	 width: "17%",
	 top: "5%"
});

var trans = Ti.UI.createView({
	width: "90%",
	height: "20%",
	backgroundColor: "black",
	opacity: "0.3",
	top: "14%",
	borderRadius: 15
});
var trans2 = Ti.UI.createView({
	width: "90%",
	height: "20%",
	backgroundColor: "black",
	opacity: "0.3",
	top: "44%",
	borderRadius: 15
});
var trans3 = Ti.UI.createView({
	width: "90%",
	height: "20%",
	backgroundColor: "black",
	opacity: "0.3",
	top: "74%",
	borderRadius: 15
});


var buildUI = function(dbOutput) {
	
	for (i=0, j=dbOutput.length; i < j; i++){
		
var title = Ti.UI.createLabel({
	color: "Red",
	left: "10%",
	top: "15%",
	text: dbOutput[0].title,
	font : {
    fontSize: 16,
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
    fontSize: 16,
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
    fontSize: 16,
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
    fontSize: 16,
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
    fontSize: 16,
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
    fontSize: 16,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	

var dist = Ti.UI.createLabel({
	color: "white",
	left: "10%",
	top: "20%",
	text: dbOutput[0].dist,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dist2 = Ti.UI.createLabel({
	color: "white",
	right: "10%",
	top: "20%",
	text: dbOutput[1].dist,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dist3 = Ti.UI.createLabel({
	color: "white",
	left: "10%",
	top: "50%",
	text: dbOutput[2].dist,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});

var dist4 = Ti.UI.createLabel({
	color: "white",
	right: "10%",
	top: "50%",
	text: dbOutput[3].dist,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dist5 = Ti.UI.createLabel({
	color: "white",
	left: "10%",
	top: "80%",
	text: dbOutput[4].dist,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var dist6 = Ti.UI.createLabel({
	color: "white",
	right: "10%",
	top: "80%",
	text: dbOutput[5].dist,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});
var adr = Ti.UI.createLabel({
	color: "white",
	left: "10%",
	top: "25%",
	text: dbOutput[0].adr,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var adr2 = Ti.UI.createLabel({
	color: "white",
	right: "10%",
	top: "25%",
	text: dbOutput[1].adr,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var adr3 = Ti.UI.createLabel({
	color: "white",
	left: "10%",
	top: "55%",
	text: dbOutput[2].adr,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var adr4 = Ti.UI.createLabel({
	color: "white",
	right: "10%",
	top: "55%",
	text: dbOutput[3].adr,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var adr5 = Ti.UI.createLabel({
	color: "white",
	left: "10%",
	top: "85%",
	text: dbOutput[4].adr,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var adr6 = Ti.UI.createLabel({
	color: "white",
	right: "10%",
	top: "85%",
	text: dbOutput[5].adr,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var reg = Ti.UI.createLabel({
	color: "white",
	left: "10%",
	top: "30%",
	text: "Reg: " + dbOutput[0].reg,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var reg2 = Ti.UI.createLabel({
	color: "white",
	right: "10%",
	top: "30%",
	text: "Reg: " + dbOutput[1].reg,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var reg3 = Ti.UI.createLabel({
	color: "white",
	left: "10%",
	top: "60%",
	text: "Reg: " + dbOutput[2].reg,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var reg4 = Ti.UI.createLabel({
	color: "white",
	right: "10%",
	top: "60%",
	text: "Reg: " + dbOutput[3].reg,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var reg5 = Ti.UI.createLabel({
	color: "white",
	left: "10%",
	top: "90%",
	text: "Reg: " + dbOutput[4].reg,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
var reg6 = Ti.UI.createLabel({
	color: "white",
	right: "10%",
	top: "90%",
	text: "Reg: " + dbOutput[5].reg,
	font : {
    fontSize: 12,
    fontStyle: "bold",
    fontFamily: "Helvetica"
}
	
});	
	}
	win.add(trans3);
	win.add(trans2);
	win.add(trans);
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
};

win.add(icon);
win.open();
exports.buildUI = buildUI;