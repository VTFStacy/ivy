
document.querySelector('#leftHalf').addEventListener('click', left);
document.querySelector('#rightHalf').addEventListener('click', right);

var turn;
var turn1;
var side;
var colorLeft = [0];
var colorRight = [0];
var face = [];
var nextFace = [ ];
var lFace = [2];
var rFace = [3];
var lCheck;
var rCheck;
var background;
var letterDOM = document.getElementById('letter');
var anag = document.getElementById('inputText').value;
console.log(anag);
//if they get the anagram right 


document.getElementById('inputText').onkeypress = function(){
		var anag =document.getElementById('inputText').value;
		console.log(anag);
		if (anag === "silence"){
		console.log("correct");
		document.querySelector(".wrapper").style.display = "none";
		document.body.style.backgroundColor= "black";

	}
}


// a little DRY - maybe sort later :
function left() {
	
	changeColor();
	letterDOM.style.color ="transparent";
	document.body.style.backgroundColor = background;
	colorLeft.push(1);
	var side ="left";
	if  ((colorLeft.length) % 2 == 0) {
		lCheck = "on";
		colorRight = [0, 1];
		right();
		turn1 = window.setTimeout(function change () {
				photo(side);
				turn1 = window.setTimeout(change,500);
				},500);
		}
//this resets the array and runs the code for the opposite side so that the setinteral stops
//when the opposite one starts
		
	if ((colorLeft.length) % 2 != 0 ) {
		turn = window.clearInterval(turn1);
		lCheck = "off";
			
//	console.log("the right had side is " + rCheck + ". the left hand side is " + lCheck);

	if (rCheck === "off" && lCheck === "off") {
		screenChange();
		}
	}
}

function right() {
	changeColor();
	document.body.style.backgroundColor = background;
	letterDOM.style.color ="transparent";

	var side = "right";
	//console.log("you clicked " + side );
	colorRight.push(1);
//	if the right hand side is stationary
	if  ((colorRight.length) % 2 === 0) {
		rCheck = "on";
		colorLeft = [1, 0];
		left();
// turn the right function on
		turn1 = window.setTimeout(function change () {
				photo(side);
				turn1 = window.setTimeout(change,500);
				},500);
		}

//  if the right hand side is moving 
	if ((colorRight.length) % 2 != 0) {
		//console.log("change color called, next face: " + nextFace + "and face: " + face);
		turn1 = window.clearInterval(turn1);
		rCheck = "off";
		
		//console.log("the right had side is " + rCheck + ". the left hand side is " + lCheck);
		if (rCheck === "off" && lCheck === "off") {
				screenChange();
			}
	}
}
	

/*change the photos randomly*/
function photo(side) {
	//console.log("photo called with " + side)
	    num = Math.floor(Math.random()*6) + 1;
	    face = num ;
/*make sure the same photo doesnt show teice */
	    function check(){
		    if (num === nextFace[nextFace.length-1])
		    		{
				    	//console.log("instead of showing image "+ num + " im changing to..")
				    	num = Math.floor(Math.random()*6) + 1;
				    	face = num ;
				    	//console.log("image " + num);
				    	check();
				    	//console.log(colorRight);
	   				}
	     	else { 
	     		good(side);
	  			 }
					
		} check();
		
	    function good(side){
	    	//console.log("good ran with variable " + side);
			var faceDOM = document.querySelector('#'+ side +'Half');
			/*faceDOM.style.display = 'block';*/
			faceDOM.src = side + 'half/img-' + num + '.png'; 
			//console.log("changing to image " + face);
			nextFace.push(face);
		}
	}

function screenChange() {
	//console.log("TURN THE SCREEN TO A DIFF COLOR");
	//changeColor();

	var color1 = document.getElementById("leftHalf").getAttribute("src");
	var color2 = document.getElementById("rightHalf").getAttribute("src");
	var color11 = color1.slice(-5);
	var color22 = color2.slice(-5);
	if (color11 === color22) {
		//console.log("here we go");
		letterDOM.style.color = "white";

		if (color11 === "1.png"){
			document.body.style.backgroundColor = "a0e9dc";
			letterDOM.innerHTML = "S"
			}
		if (color11 === "2.png") {
			document.body.style.backgroundColor = "e9a0bb";
			letterDOM.innerHTML = "L"
		}
		if (color11 === "3.png") {
			document.body.style.backgroundColor = "a0a6e9";
			letterDOM.innerHTML = "E"
		}
		if (color11 === "5.png") {
			document.body.style.backgroundColor = "e9dfa0";
			letterDOM.innerHTML = "N"
		}
		if (color11 === "4.png") {
			document.body.style.backgroundColor = "a0e9b0";
			letterDOM.innerHTML = "C"
		}
		if (color11 === "6.png") {
			document.body.style.backgroundColor = "ef9595";
			letterDOM.innerHTML = "E"
		}
	}
}

function changeColor() {
//console.log("face is this in the change color fuction: " + face);
		if (face === 1){
			background = "a0e9dc";
			}
		if (face === 2) {
			background  = "e9a0bb";
		}
		if (face === 3) {
			background  = "a0a6e9";
		}
		if (face === 5) {
			background = "e9dfa0";
		}
		if (face === 4) {
			background  = "a0e9b0";
		}
		if (face === 6) {
			background  = "ef9595";
		}
//console.log("background changed to " + face);
document.body.style.backgroundColor = background;
	}

