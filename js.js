var numbers 	 = document.querySelectorAll('.number');
var operations   = document.querySelectorAll('.operation');
var decimalBtn   = document.getElementById('decimal');
var display 	 = document.getElementById('screen');
var clearBtn 	 = document.getElementById('c');
var square 		 = document.getElementById('square-root');
var activenumber = 0;    	//
var newnumber 	 = false;  //
var expectoperat = ''; 	  // 

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function(eventmouse) {
		console.log('клик по кнопке: ' + eventmouse.target.textContent);
        presss(eventmouse.target.textContent);
    });
};

for (var i=0; i<operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function(eventmouse) {
       operation(eventmouse.target.textContent); 
	   console.log('клик по кнопке: ' + eventmouse.target.textContent);
    });
};
//clear
clearBtn.addEventListener('click', function (eventmouse) {
        clear(eventmouse.srcElement.id);		//
		console.log('клик по кнопке: ' + eventmouse.target.textContent);
    });
//
decimalBtn.addEventListener('click', decimal,
	function(eventmouse) {
       operation(eventmouse.target.textContent); 
	   console.log('кнопка с дробью : ' + eventmouse.target.textContent);
    }
);
//
function presss(number) {
    if (newnumber) {
        display.value = number;
        newnumber = null;//newnumber = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;//
        };
    };
};

function operation(action) {
    var temporaryvar = display.value;//
	var tempvar = parseFloat(temporaryvar); //tidy up
    if (newnumber && expectoperat !== '=') {
        display.value = activenumber;
    } else {
        newnumber = true;
        if (expectoperat === '+') {
            activenumber += tempvar; //
        } else if (expectoperat === '-') {
            activenumber -= tempvar;
        } else if (expectoperat === '*') {
            activenumber *= tempvar;
        } else if (expectoperat === '/') {
			activenumber /= tempvar;
        }
		else {
            activenumber = tempvar;
        };
        display.value = activenumber;
		if (display.value === 'Infinity') {
			alert('на ноль делить нельзя!!');
        }
        expectoperat = action;
    };
};

//KeyboardEvent(event.keyCode)
document.addEventListener("keydown", function (event) {
  console.log("event.keyCode: " + event.keyCode);
  
  if (event.keyCode === 67){
	  clear();	//c
  }
  if (event.keyCode === 190){
	  decimal();	//.
  }
  
});

//3.14
function decimal() {
    var tempvar = display.value;//
    if (newnumber) {
        tempvar = '0.';
        newnumber = false;// 
    } else {
        if (tempvar.indexOf('.') == -1 ) {
            tempvar += '.';
        };
    };	
    display.value = tempvar;
};
// clear C
function clear(id) {
	//tidy up
        display.value = '0';
        newnumber = true;
        activenumber = 0;
        expectoperat = '';
};

//Math.sqrt
square.addEventListener('click',  extractsquareroot, function(eventmouse) {
	   console.log('0 square '+ square);
	   operation(eventmouse.target.textContent);
	   console.log('корень : ' + eventmouse.target.textContent);
    }
);

function extractsquareroot() {
	 var tempsquar = display.value;//
	 var sqresult = Math.sqrt(tempsquar);//
	 display.value = sqresult;//
};


//расширенный функционал
/*
function sin(){
	...
};
function cos(){
	...
};

function exponentiation(){
	...
}

function back(){
if (presss === "back") {
activenumber = activenumber.substring(0, activenumber.length-1);
}
}
function plusminus(){
(presss === "+/-") {
activenumber *= -1;
}
}

*/