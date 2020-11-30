/*Creare un nuovo npm 
inserire un json che contiene una lista di giocatori
creare una funzione che restuisce un giocatore sulla base dell'id (find)
creare una funzione che restuisce una ricerca sulla base del nome e/o cognome (filter)
creare una funzione che restuisce true/false se i giocatori sono tutti di una nazionalità passata come parametro (every)
creare una funzione che restusce true/false se c'è almeno un giocatore infortunato*/

var players = [{
    id: 1,
    name : "Tommaso",
    surname : "Allan",
    nationality : "Italy",
    cityOfBirth : "Vicenza",
},
{
    id: 2,
    name : "Mattia",
    surname : "Bellini",
    nationality : "Italy",
    cityOfBirth : "Padova",
},
{
    id: 3,
    name : "Tommaso",
    surname : "Benvenuti",
    nationality : "Italy",
    cityOfBirth : "Vittorio Veneto",
},
{
    id: 4,
    name : "Luigi",
    surname : "Bigi",
    nationality : "Italy",
    cityOfBirth : "Reggio Emilia",
},
{
    id: 5,
    name : "Michelangelo",
    surname : "Biondi",
    nationality : "Italy",
    cityOfBirth : "Ferrara",
    sick: "yes",
}];

export default players;