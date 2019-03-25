console.log('house connected')

const cardIn = document.getElementById('cardIn');
const styleIn = document.getElementById('styleIn');

console.log(cardIn)
console.log(styleIn)

function setCard(){
    let card = document.getElementById(cardIn.value)
    card.style.color = styleIn.value
    console.log(card)
}