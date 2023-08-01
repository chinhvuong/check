"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
var chars = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
function random() {
    var newString = '';
    for (var i = 0; i < 64; i++) {
        newString += chars[Math.floor(Math.random() * chars.length)];
    }
    return newString;
}
exports.random = random;
