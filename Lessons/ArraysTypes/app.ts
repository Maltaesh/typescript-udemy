const person = {
    name: 'Marcin',
    age: 31,
    address: {
        street: 'Wrocławska',
        code: '55-555'
    },
    hobbies: ['Programming', 'Sleeping']
}


let favoriteActivities: string[] = []// creating a variable with type array of strings
// favoriteActivities = 'Sleeping' // impossible because this variable has type of array of strings
favoriteActivities.push('Sleeping') // possible because this pushes string to an array
// favoriteActivities.push(1) // imposible because 1 is type of number

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()) // because TS knows what type of hobby is, it can tell us witch methods can be safely used on hobby!
}
