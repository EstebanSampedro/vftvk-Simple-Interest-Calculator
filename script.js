function compute()
{
    var amount = document.getElementById("amount").value;

    if(amount == "" || amount <= 0)
    {
        alert("Introduce a positive number");
        document.getElementById("amount").focus();
        return;
    }

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = amount * years * rate / 100;

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + amount + "</span>"  + ", <br> at an interest rate of "+ "<span class='highlight'>" 
    + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" 
    + yearNow + "</span>";
}

function SliderValue()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_display");

    //Muestra el valor del slider en pantalla y codigo
    output.innerHTML = slider.value; 

    // Actualiza el valor del slider cada vez que se mueva
    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}
