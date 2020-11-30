//import file index.js
import players from "./index.js";

var users = (userId) => players.find(item => item.id == userId);
console.log(users(2));

var userNameOrSurname = (name, surname) => {
    if(name || surname){
        return players.filter(item => item.name == name || item.surname == surname);
    }
}   
console.log(userNameOrSurname('Luigi', ''));


var userNational = (nationality) => players.every(item => item.nationality == nationality);
console.log(userNational('Italy'));

var userSick = (nationality) =>  players.some(item => item.sick == nationality);
console.log(userSick('yes'));

