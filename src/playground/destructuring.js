
/* const person = {
    name: 'Andre',
    age: 34,
    location: {
        city: 'Atlanta',
        temp: 92
    }
};

const {name: firstName = 'Anonymous', age} = person;

const {city, temp: temperature } = person.location;
console.log(`${firstName} is ${age}.`);

console.log(`It's ${temperature} in ${city}.`); */
//********************************************************************* */
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);
//************************************************************************ */
// const address = ['1299 S Juniper Street', 'Atlanta', 'Georgia', '31520'];

// const [street, city, state, zip] = address;

// console.log(`You are in ${city}, ${state}. `);

//************************************************************************ */

const item = ['Coffee (cold)', '$2.00', '$3.80', '$2.75'];

const [ coffee, , medium] = item;

console.log(`A medium ${coffee} cost ${medium}`);