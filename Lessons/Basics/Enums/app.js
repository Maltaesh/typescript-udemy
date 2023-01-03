"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Marcin',
    age: 31,
    address: {
        street: 'Wrocławska',
        code: '55-555'
    },
    hobbies: ['Programming', 'Sleeping'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN)
    console.log('is Admin!');
//# sourceMappingURL=app.js.map