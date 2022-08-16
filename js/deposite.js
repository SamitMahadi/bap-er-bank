/////step01;add event listener to the deposite button///

document.getElementById('btn-deposite').addEventListener('click', function () {
    //get the deposite amount from the deposit input field//
    //for input field use .value to the value inside the input field//
    const userDiposite = document.getElementById('user-deposite');
    const newdepositeAmountstring = userDiposite.value;
    const newdepositeAmount = parseFloat(newdepositeAmountstring);
    //step03 : get the deposit total//
    //for non-input( element other than input, textarea) use inner text to get that text///
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousdepositeTotal = depositeTotalElement.innerText;

    const currentdepositeTotal = previousdepositeTotal + newdepositeAmount;

    depositeTotalElement.innerText = currentdepositeTotal;

    //step 07: clear the deposite field//
    userDiposite.value = '';

})