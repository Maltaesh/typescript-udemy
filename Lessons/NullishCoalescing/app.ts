const fetchedUserData = {
    id: 'u1',
    name: 'Marcin',
    job: {title: "programmer", description: "fullstack"}
}

console.log(fetchedUserData?.job?.description)

const userInput = undefined

const storedData = userInput ?? 'Default'

console.log(storedData)

export {}