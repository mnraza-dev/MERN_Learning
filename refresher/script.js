// maps
const names = ["John", "Paul", "George", "Ringo"];
const newNames = names.map(name => {
    return name.toUpperCase() + " G";
})

console.log(newNames);

// filter
const namesFilter = ["John", "Johny", "Paul", "George", "Ringo","Jenee", "Jeneffer", "Jane"];

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

let {zip} = user.address;

console.log(zip);






