/**
 * 
 */

var number=Math.floor(Math.random()*5+1);
var timer1 = 0;
var timer2 = 0;

function changeSlide(){
	number++;
	if (number>5) number=1;
	var file = "<img src=\""+number+".JPG\"/>";
	document.getElementById("slider").innerHTML = file;
	$("#slider").fadeIn(500);
	timer1 = setTimeout(() => {
		changeSlide();
	}, 5000);
	timer2 = setTimeout(() => {
		$("#slider").fadeOut(500);
	}, 4500);
}

function setSlide(slideNumber){
	clearTimeout(timer1);
	clearTimeout(timer2);
	number = slideNumber-1;
	$("#slider").fadeOut(500);
	setTimeout(() => {
		changeSlide();
	}, 500);
}