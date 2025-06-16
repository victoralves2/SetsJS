const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto','Pizza']);// não importa se tem itens repetidos, apenas exisitira um elemento pizza unico


console.log(orderSet);
console.log(new Set('Jonas')); //cada letra será um elemento do set 
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread')); //retorna true or false 
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');//vai adicionar apenas uma vez o Garlic Bread 
orderSet.delete('Risotto');//Remove o elemento do set

for(const order of orderSet) console.log(order); //como o set é uma iterável então é possível usar um for para percorrer

console.log(orderSet);
orderSet.clear();//Remove todos os elementos do set 

/*não há index nos sets, não é possivel fazer orderSet[0]
Se todos os valores são unicos, e a ordem não importa, então não há sentido em saber o indice e retornar um valor
apenas verificar se existe ou não o elemento no set(.has), caso o intuito seja armazenar em ordem e depois recuperar os valores 
então é melhor usar os vetores (array)
*/

//USO: remover valores duplicas de um vetor 
const staff = ['Waiter','Chef','Chef','Manager','Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

//O spread operator funciona em todas iteráveis, incluindo os sets 
const staffUnique1 = [...new Set(staff)]; //já cria um novo vetor a partir de outro, filtrando os valores repetidos
console.log(staffUnique1);

console.log(new Set(staff).size); //contar quantos valores unicos possuem em um array usando os sets 
console.log(new Set('Jonas').size); //contar quantas letras possui uma string usando sets 

