

var html = "" ;

function showExercise() {
 	html = '<div><img src="images/conejos-tragones.png"><form><p>¿Cuántas verduras le corresponden a cada uno para que tengan la misma cantidad?</p><input id="answerCarrots" type="" name="" placeholder="zanahorias"><input id="answerCol" type="" name="" placeholder="Col"><input id="answerRabanos" type="" name="" placeholder="rábanos"></form><p>¿Cuántas verduras sobran?</p><input id="answerCarrotsSobrantes" placeholder="zanahorias"><input id="answerColSobrantes" placeholder="Col"><input id="answerRabanosSobrantes" placeholder="rábanos"></form><a href="javascript:validateAnswer()">Contestar</a></div>'
	document.getElementById("showExerciseContainer").innerHTML = html;
}



function validateAnswer() {

	var keepedAnswerCarrots = document.getElementById("answerCarrots").value;
	console.log(keepedAnswerCarrots);

	var keepedAnswerCol = document.getElementById("answerCol").value;
	console.log(keepedAnswerCol);

	var keepedAnswerRabanos = document.getElementById("answerRabanos").value;
	console.log(keepedAnswerRabanos);

	var keepedAnswerCarrotsSobrantes = document.getElementById('answerCarrotsSobrantes').value;
	console.log(keepedAnswerCarrotsSobrantes);

	var keepedAnswerColSobrantes = document.getElementById('answerColSobrantes').value;
	console.log(keepedAnswerColSobrantes);

	var keepedAnswerRabanosSobrantes = document.getElementById('answerRabanosSobrantes').value;
	console.log(keepedAnswerRabanosSobrantes);


	if (keepedAnswerCarrots == 2 && keepedAnswerCol == 2 && keepedAnswerRabanos == 5 && keepedAnswerCarrotsSobrantes == 1 && keepedAnswerColSobrantes == 3 && keepedAnswerRabanosSobrantes == 0) {
		alert("correct");
	} else {
		alert("incorrect");
	}

}