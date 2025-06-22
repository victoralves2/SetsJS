const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

//challenge 

const greet2 = greeting => name => console.log(`${greeting} ${name}`);

//call and apply method

const lufthansa = {
    airline: 'Lufthanse Air Lines',
    iataCode:'LH',
    bookings: [],
};

const book = function(flightNum, Name){
    console.log(`${Name} was booked a set on ${this.airline} flight ${this.iataCode} ${flightNum}`);
    this.bookings.push({flight: `${this.iataCode},${flightNum}`, Name});
}

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'SW',
    bookings: [],
}
book.call(lufthansa, 23, 'Sarah Williams');
console.log(lufthansa);

const arr = [45, 'John Smith'];
book.apply(swiss, arr);
console.log(swiss);

book.call(lufthansa, ...arr);
console.log(lufthansa);