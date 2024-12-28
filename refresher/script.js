// maps
const names = ["John", "Paul", "George", "Ringo"];
const newNames = names.map(name => {
    return name.toUpperCase() + " G";
})

console.log(newNames);

// filter
const namesFilter = ["John", "Paul", "George", "Ringo"];

const newNamesFilter = namesFilter.filter(name => {
    return name.length > 4;
})

console.log(newNamesFilter);



