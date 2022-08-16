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
    const previousdepositeTotalstring = depositeTotalElement.innerText;
    const previousdepositeTotal = parseFloat(previousdepositeTotalstring);

    //   step04 add numbers to total deposite//
    const currentdepositeTotal = previousdepositeTotal + newdepositeAmount;

    depositeTotalElement.innerText = currentdepositeTotal;


    //step 05 :get balance current total//
    const balancetotalelment = document.getElementById('balance-total');
    const previousbalancetotalstring = balancetotalelment.innerText;
    const previousbalancetotal = parseFloat(previousbalancetotalstring);
    //step06 : calculate total balance//
    const currentbalancetotal = previousbalancetotal + newdepositeAmount;
    //set the balance total//
    balancetotalelment.innerText = currentbalancetotal;

    //step 07: clear the deposite field//
    userDiposite.value = '';

})