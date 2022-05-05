function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * (rate / 100) * years;

    if (principal == "" || principal <= 0) {
        alert("Please enter a valid amount" );
        principal.focus();
        return;
    }

    var year = new Date();
    year.setFullYear(year.getFullYear() + parseInt(years));

    document.getElementById("result").innerHTML = "If you deposit \<span class='highlight'\>"+principal+"\</span\>,\<br\>at an interest rate of \<span class='highlight'\>"+rate+"%\</span\>\<br\>You will receive an amount of \<span class='highlight'\>"+amount+"\</span\>,\<br\>in the year \<span class='highlight'\>"+year.getFullYear()+"\</span\>\<br\>"
 
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
