var operand1 = operand2 = '';
var currentOperator = '';
var screenValue = '';

//declare a function for detecting which key is clicked
function detectKey(){
	//start jquery each function to loop through span
	$('div.buttons span').each(function(){
		$(this).click(function(){
			var selectedButton = $(this).text();
			determineButtonAction(selectedButton);
		});
	});
}

function determineButtonAction(buttonPressed){
	screenValue += buttonPressed;
	$('div#screen').text(screenValue);
	switch(buttonPressed){
		case '+':
		case '-':
		case 'x':
			currentOperator = buttonPressed;
		case "=":
			calculate();
			break;
		case 'C':
			clear();
			break;
		default:
			if(parseInt(buttonPressed)){
				pushNumber(buttonPressed);
			} else {
				currentOperator = '/';
			}
			break;
	}
}

function pushNumber(buttonPressed){
	if(currentOperator){
		operand2 += buttonPressed;
	} else {
		operand1 += buttonPressed;
	}
}

function calculate(){
	if (operand1 && operand2) {
		switch(currentOperator) {
			case '+':
				return $('div#screen').text(add());
			case '-':
				return $('div#screen').text(subtract());
			case 'x':
				return $('div#screen').text(multipy());
			case '÷':
				return $('div#screen').text(divide());
			default:
				return;
		}
	}
}

function multipy() {
	return parseInt(operand1) * parseInt(operand2);
}	

function divide() {
	return parseInt(operand1) / parseInt(operand2);
}

function subtract() {
	return parseInt(operand1) - parseInt(operand2);
}

function add() {
	return parseInt(operand1) + parseInt(operand2);
}

function clear() {
	operand1 = '';
	operand2 = '';
	currentOperator = '';
	screenValue = '';
	$('div#screen').text(screenValue);
}