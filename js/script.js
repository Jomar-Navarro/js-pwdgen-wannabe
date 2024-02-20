console.log('esercizio "(insicurissimo) password generator"');

//Nome e Cognome
const firstName = prompt('Scrivi il tuo nome');
const lastName = prompt('Scrivi il tuo cognome');
const fullName = firstName + ' ' + lastName;
console.log(firstName, lastName);


//Colore preferito
const favColor = prompt('Qual é il tuo colore preferito?');
console.log(favColor);

//Anno attuale
const year = 24;
console.log(year);

const password = firstName + lastName + favColor + year;
console.log(password);

//Stampo in HTML
document.getElementById('output').innerHTML += ' ' + password;



