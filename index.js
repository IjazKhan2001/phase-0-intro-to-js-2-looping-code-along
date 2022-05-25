const cards = ['Guadalupe', 'Ollie', 'Aki'];
function writeCards(cards){
  for(let i = 0; i < cards.length; i++){
    console.log(`Thank you, ${cards[1]}, for the wonderful surprise gift`);
  }

  return cards
}

writeCards(cards[0]);
writeCards(cards[1]);
writeCards(cards[2]);
