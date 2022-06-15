//called when compute button in clicked
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var ratePerMonth = rate/1200;
    var numberOfPayments = years*12;
    var repayments = principal*(ratePerMonth*Math.pow((1+ratePerMonth),numberOfPayments)/(Math.pow((1+ratePerMonth),numberOfPayments)-1));
    var totalInterest = repayments*numberOfPayments - principal;
    var year = new Date().getFullYear()+parseInt(years);
    repayments = Math.round(repayments*100)/100;
    totalInterest = Math.round(totalInterest*100)/100;

    //validate the input for principal amount
    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return; //return here to stop last line running if there is an error
    }

    document.getElementById("result").innerHTML="If you borrow <mark>$"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+
        "%</mark>\<br\>You will repay <mark>$"+repayments+"</mark> each month"+"\<br\>You will repay your loan in the year <mark>"+year+
        "</mark>\<br\>Your total interest paid will be <mark>$"+totalInterest+"</mark>"
    return;
}

//called when the interest rate slider is moved and released
function updaterate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}        