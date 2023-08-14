// step 01: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step: 02 get the email address inside the email input field
  // always remember to use . value to get text form in an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
    //   console.log(email);

    // step 03: get password
    // step 03.a : set id on the html element
    // step 03.b: get the element
    // step 03.c: get the value form the element
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    // Danger: do not verify email password on the client side
    // step 04: verify email and password and check weather valid user or not
   if (email === 'mazharul@gami.com' && password === 'secret') {
    console.log('valid user');
   }
   else{
    console.log('Invalid User');
   }



});
