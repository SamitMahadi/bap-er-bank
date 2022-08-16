
///////STEP 01: Add click Event Handler With The Submit Button//////

document.getElementById('btn-submit').addEventListener('click', function () {
    /////STEP02: get the email adress inside the input field///////
    ////always remember to use .valuee in input field//
    const emailField = document.getElementById('user-email');
    const email = emailField.value
    ///STEP03; get password
    //set id on the html element//
    //get the element//
    //get the value from Element//
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;

    //STEP04 VERIFY THE MAIL AND PASSWORD//
    if (email === 'samit@therich.com' && password === 'i am the king') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid motherfucker')
    }

})