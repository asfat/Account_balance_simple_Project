function deposite_handler(){
    var inputValue=document.getElementById("input_box_deposite").value;
    var convertedInputValue=parseFloat(inputValue);
    var depositeValueElement =document.getElementById("deposite_box_deposite");
    var convertedDepositeValue=parseFloat(depositeValueElement.innerText);
    var sum = convertedInputValue+convertedDepositeValue;
    depositeValueElement.innerText=sum;

    var totalAmmount=document.getElementById("total-ammount").innerText;
    var convertTotalAmmount=convertToNumber(totalAmmount);
    var total_sum= convertTotalAmmount+convertedInputValue;
    document.getElementById("total-ammount").innerText=total_sum;

    document.getElementById("input_box_deposite").value="";

};

function withdraw_handle(){
    var inputValue=document.getElementById("input_box_withdraw").value;
    var convertedInputValue=convertToNumber(inputValue);
    var withdrawValueElement= document.getElementById("withdraw_box_withdraw");
    var convertedWithdrawValue=convertToNumber(withdrawValueElement.innerText);
    var sum=convertedInputValue+convertedWithdrawValue;
    withdrawValueElement.innerText=sum;

    var totalAmmount=document.getElementById("total-ammount").innerText;
    var convertTotalAmmount=convertToNumber(totalAmmount);

    if(convertedInputValue<convertTotalAmmount){
        var total_sub=convertTotalAmmount-convertedInputValue;
        document.getElementById("total-ammount").innerText=total_sub;

    }
    else{
        alert("You havent enough money");
    }




    document.getElementById("input_box_withdraw").value="";

}

function convertToNumber(num){
    return  parseFloat(num);
}