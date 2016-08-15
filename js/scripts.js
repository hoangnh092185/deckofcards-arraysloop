var deck = [];

$(document).ready(function(){
  setDeck();

  $("#resetCards").click(function() {
    setDeck();
  });

  $("#numberSortBtn").click(function() {
    deck.sort();
    display(deck);
  });

  $("#heartsBtn").click(function() {
    deck = deck.filter(function(card){
      return checkSuit(card, "hearts");
    });
    display(deck);
  });

  $("#clubsBtn").click(function() {
    deck = deck.filter(function(card){
      return checkSuit(card, "clubs");
    });
    display(deck);
  });
  $("#spadesBtn").click(function() {
    deck = deck.filter(function(card){
      return checkSuit(card, "spades");
    });
    display(deck);
  });
  $("#diamondsBtn").click(function() {
    deck = deck.filter(function(card){
      return checkSuit(card, "diamonds");
    });
    display(deck);
  });
});

function checkSuit(card, suit) {
  return card.includes(suit);
};

function setDeck() {
  deck = [];
  var decknumber = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"];
  var suits = ["clubs","diamonds", "hearts", "spades"];
  suits.forEach(function(suit){
    var tempDeck = decknumber.map(function(card) {
      return card + " of " + suit;
    });
    deck = deck.concat(tempDeck);
  });
  display(deck);
};

function display(displayDeck) {
  $("ul").text("");
  displayDeck.forEach(function(card) {
    $("ul").append("<li>" + card + "</li>");
  });
};
