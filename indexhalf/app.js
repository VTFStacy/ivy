
document.querySelector('#leftHalf').addEventListener('click', go );
document.querySelector('#rightHalf').addEventListener('click', go );



var face = [ ];
var nextFace = [ ];

/* change the photo randoml*/

function photo () {

	    num = Math.floor(Math.random()*7) + 1;
	    face = num ;
/*make sure the same photo doesnt show teice */
	    function check(){
		    if (num === nextFace[nextFace.length-1])
		    		{
				    	console.log("instead of showing image "+ num + " im showing..")
				    	num = Math.floor(Math.random()*7) + 1;
				    	face = num ;
				    	console.log("image " + num);
				    	check();
	   				}
	     	else { 
	     		good();
	  			 }
						}
		check();
		
	    function good(){
			var faceDOM = document.querySelector('.face');
			/*faceDOM.style.display = 'block';*/
			faceDOM.src = 'img-' + num + '.png'; 
			console.log("changing to image " + face);
			nextFace.push(face);
		}
	}

var color = true;
var turn;
/*toggle the change of phots */
function go () {
	if (color === true ){

		turn = window.setInterval(photo, 100);
		color = false;
		
		} else {
		turn = window.clearInterval(turn);
		console.log ("no colors for you");
		color = true;
		}
}
		