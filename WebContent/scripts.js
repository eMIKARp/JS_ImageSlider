/**
 * 
 */

var number=Math.floor(Math.random()*5+1);

function changeSlide(){
	number++;
	if (number>5) number=1;
	var file = "<img src=\""+number+".JPG\"/>";
	document.getElementById("slider").innerHTML = file;
	$("#slider").fadeIn(500);
	setTimeout(() => {
		changeSlide();
	}, 5000);
	setTimeout(() => {
		$("#slider").fadeOut(500);
	}, 4500);
}