// step 01: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    
    // step 02: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
   

    // step-03: get the current deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-04: add number to the set the total deposit
    const currentDepositeTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositeTotal;

    

    //step- 07: clear the deposit field
    depositField.value = '';


})