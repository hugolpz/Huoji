//Load fuctions on window´s loading: working !
addEventListener("load", fillVals, false);
addEventListener("load", clickPrint, false); 
addEventListener("load", CSSupdate, false);
/* document.getElementById('submitter').addEventListener("click", getVals, false);
document.getElementById('submitter').addEventListener("click", CSSupdate, false);
document.getElementById('submitter').addEventListener("click", clickPrint, false); */
//fillVals() : FILL MCQ with localStorage values
function fillVals() {
	// Multi-choice
	var storec = localStorage.readingtype;
	for(var i=0; i < document.optform.readingtype.length; ++i) {	// i=0, augmente de 1 tantque moins de cycles que d'options
		if(document.optform.readingtype[i].value == storec) {			// Si dans dataset, value = localStorage['dataset'];
			document.optform.readingtype[i].selected = true; 			// Alors selected est vrai
			break;
		}
	}
	// Multi-choice
	var store = localStorage.dataset ;
	for(var i=0; i < document.optform.dataset.length; ++i) {	// i=0, augmente de 1 tantque moins de cycles que d'options
		if(document.optform.dataset[i].value == store) {			// Si dans dataset, value = localStorage['dataset'];
			document.optform.dataset[i].selected = true; 			// Alors selected est vrai
			break;
		}
	}
	// Multi-choice
	var storeb = localStorage['hanzidb'];
	if (localStorage.dataset == "taiwan_(frequency)"){
		localStorage.hanzidb   = "trad";
		}
	else {
		localStorage.hanzidb = "simp";
		}
	for(var i=0; i < document.optform.hanzidb.length; ++i) { // CAN BE CLEANED UP !
		if(document.optform.hanzidb[i].value == storeb) {
			document.optform.hanzidb[i].selected = true;
			break;																// until there !
		}
	}
	// Input : automatic.
}
// getVals(): LOAD option values into localStorage
function getVals() {
	// LOAD option values into localStorages
	localStorage.dataset     = document.optform.dataset.value;
	localStorage.readingtype = document.optform.readingtype.value;
	localStorage.threshold1  = document.optform.threshold1.value;
	localStorage.threshold2  = document.optform.threshold2.value;
	// Seems to 
/*	chrome.extension.getBackgroundPage().ppcMain.config.dataset = localStorage["dataset"];
	chrome.extension.getBackgroundPage().ppcMain.config.readingtype = localStorage["readingtype"];
	chrome.extension.getBackgroundPage().ppcMain.config.threshold = localStorage["threshold1"];
	chrome.extension.getBackgroundPage().ppcMain.config.threshold = localStorage["threshold2"];
	chrome.extension.getBackgroundPage().ppcMain.config.hanzidb = localStorage["hanzidb"];
*/	}

// clickPrint(): INSER localStorage()s into HTML...
function clickPrint(){	// new function, lauched onclick (see options.html)
if (localStorage.dataset == "taiwan_(frequency)"){
	localStorage.hanzidb = "trad";
	}
else {
	localStorage.hanzidb = "simp";
	};
//	document.getElementById("readingtypeCod").innerHTML		= " ("+localStorage.readingtype+")";
//	document.getElementById("readingtypeCSS").innerHTML	= localStorage.readingtypeCSS ; 	// CSS style
	document.getElementById("readingtypeENttl").innerHTML	= localStorage.readingtypeEN;	// again
	document.getElementById("thresholdoneLG").innerHTML	= localStorage.threshold1 ; 	// threshold1 in ?
	document.getElementById("thresholdtwoLG").innerHTML	= localStorage.threshold2 ; 	// threshold2 in ?
	$("#textFull").val($('#entry_2:input').val());
	$("#readingtypeEN").val(localStorage.readingtypeEN);
	$("#coverage").val(localStorage.coverage+"%");			// coverage
	$("#coverageEasy").val(localStorage.coverageEasy+"%");	// coverageEasy
	$("#datasetEN").val(localStorage.dataset); 		// dataset name
	$("#hanzidbEN").val(localStorage.hanzidb); 		// database type: trad/simp ?
	$("#thresholdone").val(localStorage.threshold1+"th 字"); 	// threshold1 in ?
	$("#thresholdtwo").val(localStorage.threshold2+"th 字"); 	// threshold2 in ?
	$("#ziCounter").val(localStorage.ziCounter);		// ziCounter
	$("#easyCounter").val(localStorage.easyCounter); 	// easyCounter
	$("#partCounter").val(localStorage.partCounter); 	// partCounter
	$("#newsCounter").val(localStorage.newsCounter); 	// newsCounter
	$("#sentCounter").val(localStorage.sentCounter); 	// sentense Counter
	$("#ziBySentCounter").val(localStorage.ziBySentCounter); 	// ziBySentCounter
}
