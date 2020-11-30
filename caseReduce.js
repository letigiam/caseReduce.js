// var module = require('letigiamnpmtest');
// console.log(module.players); 
import players from "./index.js";

var users = (userId) => players.find(item => item.id == userId);
console.log(users(2));

var userNameOrSurname = (name, surname) => {
    if(name || surname){
        return players.filter(item => item.name == name || item.surname == surname);
    }
}   
console.log(userNameOrSurname('Luigi', ''));



// var userSurname = (surname) => players.filter(item => item.surname == surname);
// console.log(userSurname('Allan'));

var userNational = (nationality) => players.every(item => item.nationality == nationality);
console.log(userNational('Italy'));

var userSick = (nationality) =>  players.some(item => item.sick == nationality);
console.log(userSick('yes'));

// console.log('userName: ', userName);
// console.log('userSurname: ', userSurname);
// console.log('userNational: ', userNational);
// console.log('userSick: ', userSick);