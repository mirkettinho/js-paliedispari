
const domanda = prompt("inserisci una parola");

function palindroma(){
  const lettere = domanda.split("");
  const girareParola = lettere.reverse();
  const unione = girareParola.join("");


  if(domanda == unione){
    alert("vero")
  }else{
    alert("falso")
  }
}
palindroma()

