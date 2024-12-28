// maps
const names = ["John", "Paul", "George", "Ringo"];

const newNames = names.map(name => {

    return name.toUpperCase() + " G";

})

console.log(newNames);

// filter
const namesFilter = ["John", "Johny", "Paul", "George", "Ringo", "Jenee", "Jeneffer", "Jane"];

const newNamesFilter = namesFilter.filter(name => {

    return name.startsWith("J");
    
})

console.log(newNamesFilter);

// desructuring

const user = {
    name: "John",
    age: 25,
    email: "john@example.com",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }
}

let { zip } = user.address;

console.log(zip);

// Spread & Rest (...)

const namesSpread = ["John", "Paul", "George", "Ringo"];

const copyNames = namesSpread; //this way references the same array, so to copy the array we need to use the spread operator

console.log(namesSpread, copyNames);

const newNamesSpread = [...namesSpread, "Jenee", "Jeneffer", "Jane"];

console.log(newNamesSpread);

// Using spread operator to use in obj

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2009
}
const newCar = { ...car, color: "red" }

console.log(newCar);

console.log(car);

// Rest Operator (...)

const numbers = [1, 12, 3, 14, 5];

const [one, two, ...rest] = numbers;

console.log(one, two, rest);

function restNumbers(a,b,...numbers) {

    console.log(a, b, numbers);
    
}

restNumbers(1, 2, 3, 4, 5);