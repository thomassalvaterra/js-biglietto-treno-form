const kmtariff = 0.21
let kmInput  = document.querySelector("#kilometers");
let nameInput = document.querySelector("#username");
let ageInput = document.querySelector("#ageselect");
let btn = document.querySelector("#generateBtn");
let discount = document.getElementById("discountId");
let carriageId = document.getElementById("carriage");
let priceId = document.getElementById("priceId");
let codeId = document.getElementById("codeCp");
btn.addEventListener("click", function() {
    let carriage = parseInt((Math.random() * 9) + 1);
    let cpCode = parseInt((Math.random() * 90000) + 1);
    const mainCon = document.getElementById("mainContent");
    const errorMsg = document.getElementById("errorMsg");
    
    if (document.getElementById("kilometers").value == "" || document.getElementById("kilometers").value == 0) {
        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Controlla di aver inserito correttamente i dati.";
        mainCon.style.display = "none";
    } else if (ageInput.value=="senior") {
        errorMsg.style.display = "none";
        mainCon.style.display = "block";
        document.getElementById("nameId").innerHTML = nameInput.value;
        discount.innerHTML = "Sconto Over 65";
        carriageId.innerHTML = carriage;
        codeId.innerHTML = cpCode;
        priceId.innerHTML = ((Number(kmInput.value) * kmtariff) * 0.6).toFixed(2) + " €";
    } else if (ageInput.value=="underage") {
        errorMsg.style.display = "none";
        mainCon.style.display = "block";
        document.getElementById("nameId").innerHTML = nameInput.value;
        discount.innerHTML = "Sconto Under 18";
        carriageId.innerHTML = carriage;
        codeId.innerHTML = cpCode;
        priceId.innerHTML = ((Number(kmInput.value) * kmtariff) * 0.8).toFixed(2) + " €";
    } else {
        mainCon.style.display = "block";
        errorMsg.style.display = "none";
        document.getElementById("nameId").innerHTML = nameInput.value;
        discount.innerHTML = "Biglietto Standard";
        carriageId.innerHTML = carriage;
        codeId.innerHTML = cpCode;
        priceId.innerHTML = (Number(kmInput.value) * kmtariff).toFixed(2) + " €";
    }
});