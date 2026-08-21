const names = ['alice', 'bob', 'carol'];

// Return a new array with names capitalized

const capitalized = names.map(name => name[0].toUpperCase() + name.slice(1));

console.log(capitalized);