//const person = {
//    name: 'Shreshth',
//    age: 45,
//    location : {
//        city: 'Delhi',
//        temperature: 32
//    }
//};
//
//
//const {age, name} = person;
//
//const {city, temperature : temp} = person.location;
//console.log(`${name} is ${age}`);
//console.log(`temp: ${temp}`);
//

//const book = {
//    title: 'Book',
//    author: 'Ryan Holiday',
//    publisher: {
//        name: 'Penguin'
//    }
//};
//
//const {name: publisherName = 'self published' } = book.publisher;
//
//console.log(publisherName);
//
const address = ['28 BP', 'Malviya Nagar', 'New Delhi'];

const item = ['Coffee', '$2.00', '$2.50', '$2.75'];

const [drinkName, , medCost,] = item;

console.log(`A medium ${drinkName} for ${medCost}`)
