$(document).ready(function(){
  var decknumber = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"];
  var deck = [];
  var suits = ["clubs", "spades", "diamonds", "hearts"];

  suits.forEach(function(suit){

    var tempDeck = decknumber.map(function(card) {
      return card + " of " + suit;
    });

    deck = deck.concat(tempDeck);
  });

// this code has been simplified above
  // var suitClub = decknumber.map(function(card) {
  //   return card + " of clubs";
  // });
  // var suitSpade = decknumber.map(function(card) {
  //   return card + " of spades";
  // });
  // var suitDiamond = decknumber.map(function(card) {
  //   return card + " of diamonds";
  // });
  // var suitHeart = decknumber.map(function(card) {
  //   return card + " of hearts";
  // });
  // deck = deck.concat(suitClub).concat(suitSpade).concat(suitHeart).concat(suitDiamond);

  deck.forEach(function(card) {
    $("ul").append("<li>" + card + "</li>");
  });
});
