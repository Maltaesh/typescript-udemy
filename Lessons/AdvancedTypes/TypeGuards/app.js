"use strict";
const e1 = {
    name: 'Marcin',
    privileges: ['pushing-code'],
    startDate: new Date()
};
const e2 = {
    name: 'Klaudia',
    privileges: ['hiring-people'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ', emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ', emp.startDate);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation(e2);
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
//# sourceMappingURL=app.js.map