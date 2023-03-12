"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const fetchedUserData = {
    id: 'u1',
    name: 'Marcin',
    job: { title: "programmer", description: "fullstack" }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.description);
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'Default';
console.log(storedData);
//# sourceMappingURL=app.js.map