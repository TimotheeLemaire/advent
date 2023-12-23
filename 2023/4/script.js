"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)("./input.txt", "utf-8");
var sum = 0;
file.split("\n").forEach(function (line) {
    if (line === "") {
        return;
    }
    var _a = line.split(":"), header = _a[0], data = _a[1];
    var _b = data
        .split("|")
        .map(function (part) { return part.split(" ").filter(function (number) { return number !== ""; }); }), winning = _b[0], playerNUmber = _b[1];
    console.log(header);
    console.log(winning);
    console.log(playerNUmber);
    var matches = playerNUmber.filter(function (number) { return winning.includes(number); });
    console.log(Math.pow(2, matches.length));
    if (matches.length > 0) {
        sum += Math.pow(2, matches.length - 1);
    }
});
console.log(sum);
