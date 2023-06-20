
let convertButton = document.getElementById('convert');
let resultLabel = document.getElementById('result');

convertButton.addEventListener('click', function(){
    let montant = document.getElementById('montant');
    let baseCurrency = document.getElementById('baseCurrency').value;
    let targetCurrency = document.getElementById('targetCurrency').value;
    let valeur = 0.9;
    console.log(montant.value);
    console.log(baseCurrency);
    console.log(targetCurrency);
    

    let urlapi = "https://api.freecurrencyapi.com/v1/latest?apikey=Pb1ZeebWnAAcmN5LSXXf6ijwU27LtGzXpxQpOb3D&currencies=" + targetCurrency + "&base_currency=" + baseCurrency;
    console.log(urlapi)


    $.ajax({
        url: urlapi,
        method: 'GET',
        success: function(response) {
            let conv = response.data[targetCurrency];
            let resultat = valeur * montant.value;           
            console.log(conv)      
            console.log(montant.value * conv);


            resultLabel.innerHTML = `Résultat : ${resultat}`;
            
        },
        error: function() {
            console.log('Erreur lors de la récupération du taux de change.');
        }
    });
});



































// let montant= document.getElementById('montant').value;
// let baseCurrency=document.getElementById('baseCurrency').value;
// let targetCurrency= document.getElementById('targetCurrency').value;
// let convertButton = document.getElementById('convert');
// let valeur= 0.9;

// console.log(montant);
// console.log(baseCurrency);
// console.log(targetCurrency);

// convertButton.addEventListener('click',function(){
//     console.log(montant);
//     console.log(baseCurrency);
//     console.log(targetCurrency);
//     let resultat = valeur * montant ;
//     console.log(resultat);
  


// });



















// var amountInput = document.getElementById('amount');
// var convertButton = document.getElementById('convert');

// convertButton.addEventListener('click', function() {
//   var amount = amountInput.value;
//   var baseCurrency = 'EUR'; 
//   var targetCurrency = 'USD'; 
  
 
  































//   $.ajax({
//     url:urlapi,
//     method: 'GET',
//     success: function(response) {


//       var rate = response[baseCurrency + '_' + targetCurrency];
      
//       console.log(response.data)
//     },
//     error: function() {
//       console.log('Erreur lors de la récupération du taux de change.');
//     }
//   });
// });






