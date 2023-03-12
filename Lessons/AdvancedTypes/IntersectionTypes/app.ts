type Admin = {
    name: string
    privileges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

type ElevatedEmployee = Admin & Employee

interface IAdmin {
    name: string
    privileges: string[]
}

interface IEmployee {
    name: string
    startDate: Date
}

interface IElevatedEmployee extends IAdmin, IEmployee {
}


const e1: ElevatedEmployee = {
    name: 'Marcin',
    privileges: ['pushing-code'],
    startDate: new Date()
}

const e2: IElevatedEmployee = {
    name: 'Klaudia',
    privileges: ['hiring-people'],
    startDate: new Date()
}

console.log(e1, e2)

export {}