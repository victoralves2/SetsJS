//Maps é uma estrutura de dados que podemos usar para mapear values para keys, as keys podem ser de qualquer tipo

const restaurant = new Map();
restaurant.set('name','Classico Italiano');
restaurant.set(1, 'Firenze, Italy');
restaurant.set(2, 'Lisbon, Portugal');
restaurant.set('categories',['Italian','vegetarian','Pizzeria','Organic'])
.set('open',11)
.set('close',23)
.set(true, 'We are open')
.set(false,'We are closed');//chamar o set metod retorna o mapa atualizado

console.log(restaurant.get('name'));
console.log(restaurant.get(true));

const time = 21;
console.log(restaurant.get(time > restaurant.get('open') && time < restaurant.get('close')));//compara o horario com o e o valor booleano retornado sera usando no get novamente 

console.log(restaurant.has('categories'));
restaurant.delete(2);

console.log(restaurant.size);
//restaurant.clear;

restaurant.set([1,2], 'Test');
console.log(restaurant);

//ao chamar o restaurant.get([1,2]) não funcionará, porque o JS identifica o [1,2] do get como um objeto diferente 

const arr = [1,3];
restaurant.set(arr, 'Test');
console.log(restaurant.get([1,2])); //o resultado será undefined 
console.log(restaurant.get(arr));

/* É possível também usar o set para um elemento do html 
usando .set(document.querySelector('h1'),'Heading'); por exemplo.
o resultado disso será um objeto com o key = h1 e o value = heading */ 

