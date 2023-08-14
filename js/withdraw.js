/* 
1.add event handler with the withdraw button
2. get the withdraw amount form the withdraw input field
2.5: also make sure convert the input into a number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw amount
4.5: set total withdraw amount
5. get the previous balance total 
6. calculate new balance
6.5: set the new balance total 


7: clear the input field



*/
// step 01: 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step 02:
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step: 7
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number')
    }

    // step: 3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    

    // step 05
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('This is not correct amount')
        return; 
    }

    
    // step : 04
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step 06
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



    

})
