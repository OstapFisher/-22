const inputCalc = document.querySelector('.account'),
      resultCalc = document.querySelector('.result');


function input(i) {
    inputCalc.value = inputCalc.value + i
}

function result(){
    if( eval(inputCalc.value) == undefined) {
         resultCalc.value = '0,00';
         inputCalc.value = '0,00';
    }if( eval(inputCalc.value) == Infinity) {
        resultCalc.value = '0,00';
        inputCalc.value = 'Dividing by zero is not allowed';
    }
     resultCalc.value = eval(inputCalc.value);
     inputCalc.value = eval(inputCalc.value);
}

function backspce() { 
    inputCalc.value = inputCalc.Value.substring(0, inputCalc.value.lenght-1);
}

function reset() {
    resultCalc.value = '';
    inputCalc.value = '0,00';
}