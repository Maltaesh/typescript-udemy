var person = {
    name: 'Marcin',
    age: 31,
    address: {
        street: 'Wrocławska',
        code: '55-555'
    },
    hobbies: ['Programming', 'Sleeping'],
    role: [2, 'author']
};
var favoriteActivities = []; // creating a variable with type array of strings
// favoriteActivities = 'Sleeping' // impossible because this variable has type of array of strings
favoriteActivities.push('Sleeping'); // possible because this pushes string to an array
// favoriteActivities.push(1) // imposible because 1 is type of number
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // because TS knows what type of hobby is, it can tell us witch methods can be safely used on hobby!
}
person.role.push(1); // TS allows to push new elements to the tuple
// person.role = ['ad', 'ad'] // this is not allowed because tuple element on index 0 should be type of number
// person.role = [1, 'ad', 'e'] // this is not allowed to assign to a tuple array witch is not compatible with tuple type
console.log(person.role);
