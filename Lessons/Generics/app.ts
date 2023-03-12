const names: Array<string> = ['Max', 'Manuel']

console.log(names)

const promise: Promise<string> = new Promise((res) => {
    setTimeout(() => {
        res('This is done')
    }, 2000)

})

promise
    .then(data => {
        return data.split(' ')
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    })

export {}