// CSS SWITCHER: switch localStorage.readingtype.value
function CSSswitch(){	// function name, launched on click (see .html)
	if (localStorage.readingtype == "learn-em" )
		{ 
		localStorage.readingtype= "blind-em";// then readingtypeCSS = my CSS 1.
		}		
	else if (localStorage.readingtype !== "learn-em" ) // difference, so abscence is managed
			{
			localStorage.readingtype= "learn-em"; // then readingtypeCSS = my CSS 2.
			} 
}

// CSS Update (without switching):
function CSSupdate(){	// on THIS page, update the CSS
	if (localStorage.readingtype == "learn-em" )
		{
		localStorage.readingtypeCSS= "easy { color: black; } part { color: chocolate; } news { color: red; } #augmentedtext { color: purple; } div#logo { background-image: url(火64.png); background-repeat: no-repeat;  width: 64px;  height: 64px;  padding: 0;}"; 
		localStorage.readingtypeEN= "Learner's feeling" ; // inser in HTML my localStorage's CSS
		}// then readingtypeCSS = my CSS 1.		
	else if (localStorage.readingtype == "blind-em" )
			{
			localStorage.readingtypeCSS= "easy { color: black; } part { color: #808080; } news { color: #E0E0E0; } #augmentedtext { color: lavender; } nojs { color: lavender; } div#logo { background-image: url(火64-b.png); background-repeat: no-repeat;  width: 64px;  height: 64px;  padding: 0;}";
			localStorage.readingtypeEN= "Illiterate's feeling" ; // inser in HTML my localStorage's CSS
			} // then readingtypeCSS = my CSS 2.
	document.getElementById("readingtypeCSS").innerHTML= localStorage.readingtypeCSS ; // inser in HTML my localStorage's CSS
	document.getElementById("readingtypeEN").innerHTML= localStorage.readingtypeEN ; // ...readingtype
	document.getElementById("readingtypeENtitle").innerHTML= localStorage.readingtypeEN ; // ...readingtype
}
// in html: <element id="switch" onmouseover="CSStoggle();">
function CSStoggle(){
	$("#switch").toggle(
		function () {
			$("easy").css({"color":"black"});
			$("part").css({"color":"chocolate"});
			$("news").css({"color":"red"});
			$("#augmentedtext").css({"color":"purple"});
			localStorage.readingtype= "learn-em" ; // inser in HTML my localStorage's CSS
			localStorage.readingtypeEN= "Learner's feeling" ; // inser in HTML my localStorage's CSS
		},
		function () {
			$("easy").css({"color":"black"});
			$("part").css({"color":"#808080"});
			$("news").css({"color":"#E0E0E0"});
			$("#augmentedtext").css({"color":"purple"});
			localStorage.readingtype= "blind-em" ;
			localStorage.readingtypeEN= "Illiterate's feeling" ; // inser in HTML my localStorage's CSS
		}/*,
		function () {
			$("easy").css({"color":"black"});
			$("part").css({"color":"#808080"});
			$("news").css({"color":"#E0E0E0"});
			$("#augmentedtext").css({"color":"purple"});
			localStorage.readingtypeEN= "Comprehensive input" ; // inser in HTML my localStorage's CSS
		} */
	);
//document.getElementById("readingtypeEN").innerHTML= localStorage.readingtypeEN ; // ...readingtype
//document.getElementById("readingtypeENtitle").innerHTML= localStorage.readingtypeEN ; // ...readingtype
}