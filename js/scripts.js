/* 

    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e
    comunicagli se può partecipare o no alla festa.

*/

// const guests = [
//     'Donald',
//     'Mickey',
//     'Goofy',
//     'Gino',
//     'Youssef'
// ];

// let name = prompt('Inserisci il tuo nome:');

// let invited = false;

// // for (let i = 0; i < guests.length; i++) {
// /* 
//     Quand è che mi devo fermare?
//     1. quando ho visto tutta la lista
//     2. quando ho trovato la persona nella lista

//     quindi, quale sarà la mia condizione di permanenza?
// */
// let i = 0;
// // while (
// //     i < guests.length && invited == false
// //     // i < guests.length && !invited
// // ) {
// //     console.log(guests[i]);

// //     if (guests[i] == name) {
// //         invited = true;
// //     }

// //     i++;
// // }
// while (
//     i < guests.length
// ) {
//     console.log(guests[i]);

//     if (guests[i] == name) {
//         invited = true;
//         break;
//     }

//     i++;
// }

// if (invited) {
//     alert('Che bello! Sei un amico di Gino!');
// }
// else {
//     alert('Mi dispiace, non sei invitato');
// }

/* 
    -----------------------------------------------------------------------------
*/

/* 
    Crea un array vuoto.
    Chiedi per 6 volte all’utente di inserire un numero,
    se è dispari inseriscilo nell’array.
*/

const numbers = [];

for (let i = 1; i <= 6; i++) {
    const num = parseInt(prompt('Inserisci un numero:'));
    console.log(num);

    if (num % 2 == 1) {
        numbers.push(num);
    }
}

console.log(numbers);