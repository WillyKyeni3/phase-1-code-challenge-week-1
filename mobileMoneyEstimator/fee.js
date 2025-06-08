// simplified estimator for transaction fees
function estimateTransactionFee(amountToSend) {
    const userInput = prompt("Unatuma Ngapi? (KES) :");
    amountToSend = parseInt(userInput);

    if(amountToSend<=0){
        alert("input a valid amount");
        return;
    }
// value calculation constants
    const baseRate = 0.015; // 1.5%
    const minFee = 10;
    const maxFee = 70;
// initial transaction fee
    const initialFee = amountToSend * baseRate;

 //calculates transaction fee 
 let transactionFee;
    if(initialFee < minFee){
        transactionFee = minFee;
    }else if (initialFee > maxFee){
        transactionFee = maxFee;
    }else {
        transactionFee = initialFee;
    }
// total amount to be debited
    const totalAmount = amountToSend + transactionFee;

//Results
    alert (`Sending KES ${amountToSend}:\n`+
           `Calculated Transaction Fee: KES ${transactionFee}\n`+
           `Total amount to be debited: KES ${totalAmount}\n\n`+
           `Send Money Securely!`
        );

}
estimateTransactionFee(); // Call the function