 const utente = document.getElementById("nomeUtente");
 const km = document.getElementById("km").value;
 const eta = document.getElementById("anni");
 const element = document.getElementById("message");


// Se età e distanza sono numerici
if( Number.isFinite(eta) && Number.isFinite(km) ){
    let costo = km * 0.21;
    console.log("Costo iniziale: ", costo);
    let message = "";

    // sconto under 18
    if(eta < 18){
        
        costo = costo * 0.8;
        message = `Hai diritto allo sconto Under. `;

     // sconto over 65
    }else if (eta >= 65){
        costo = costo * 0.6;
        message = `Hai diritto allo sconto Under. `;
    }

    //Dopo if/else dell'età
    message += `Costo biglietto: ${costo} $`;
    element.innerHTML = message;

   
}else {
    element.innerHTML = "Errore: i dati inseriti non sono numerici";
}