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
const actualYear = 2024;
console.log(actualYear);

//Stampo in HTML
document.getElementById('messaggio').innerHTML = 
`
<p> 
Ciao <strong> ${fullName}!</strong>, il tuo colore preferito é <strong>${favColor}</strong> e siamo nell'anno <strong>${actualYear}</strong>.
</p>

`



