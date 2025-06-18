const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const Flightarr = flights.split("+");               //seprando a string em strings diferentes, visto que cada voo eh separado por um "+"
console.log(Flightarr);                             //Eh possivel ver que gerou um vetor simples de strings 

for(let i = 0; i<Flightarr.length;i++){
    let aux = Flightarr[i]
    Flightarr[i] = aux.replaceAll("_"," ").trim().split(";");   //separa o a string em um vetor, tornando o Flightarr um vetor de vetores
    aux = Flightarr[i][1];                                     //auxiliar para receber a string 
    Flightarr[i][1] = aux.slice(0,3).toUpperCase();           //filtra as tres primeiras letras e coloca todas em maisculo 
    aux = Flightarr[i][2];
    Flightarr[i][2] = aux.slice(0,3).toUpperCase();
    aux = Flightarr[i][3];
    Flightarr[i][3] = aux.replace(':','h');                 //substitui os dois pontos por h 
}//Apos percorrer todo o vetor 

console.log(Flightarr);

for(const n of Flightarr){
    console.log(`${n[0]} from ${n[1]} to ${n[2]} (${n[3]})`);  //percorre o vetor e para cada vetor de strings exibe as informacoes no console
}