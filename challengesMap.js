const gameEvents = new Map([
    [17,'Goal'],
    [36,'Substituition'],
    [47,'Goal'],
    [61,'Substitution'],
    [64,'Yellow Card'],
    [69,'Red Card'],
    [70,'Substituition'],
    [72,'Substituition'],
    [76,'Goal'],
    [80,'GOal'],
    [92,'Yellow Card'],
]);

//1 array with all events (no duplicates)

const arr = [new Set(...gameEvents)];
console.log(arr);

//2 remover o cartao amarelo
gameEvents.delete(64);
console.log(gameEvents)

//3 media que ocorreram eventos no jogo
const array = [];
let sum = 0;
for(const [x, ] of gameEvents){
    array.push(x);
}
for(let i = 0; i < (array.length - 1); i++){
    sum += (array[i+1] - array[i]);
}
sum = sum / array.length;
console.log(`Ocorreram eventos em media a cada ${sum} minutos`);

//4 separar entre o primeiro e segundo tempo
for(const [time, event] of gameEvents){
    if(time <= 45){
        console.log(`[FIRST HALF] ${time} : ${event}`);
    }else{
        console.log(`[SECOND HALF] ${time} : ${event}`);
    }
}

