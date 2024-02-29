"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicianNames = ["Alistair the Amazing", "Auron the Absurd", "Apollo the Magnificent", "Dionysus the Droll"];
show_magicians(magicianNames);
