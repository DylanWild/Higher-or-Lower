
let cardCount=0
let card
let cardOne
let cardImg = document.createElement("img");
let cardOneImg = document.createElement("img");
let counter = document.getElementById("counter") 
let firstCard = document.getElementById("firstCard")

getCard = () => {
    card = Math.floor(Math.random() * 13) + 1
    cardImg.src = `images/${card}.png`
   let secondCard = document.getElementById("secondCard")
   secondCard.appendChild(cardImg);
     return card
}
getFirstCard = () => {
   cardOne = Math.floor(Math.random() * 13) + 1
   cardImg.src = `images/${cardOne}.png`
//    let firstCard = document.getElementById("firstCard")
   firstCard.appendChild(cardImg);
   return cardOne
}

compareCardHigher = () => {
   if(card == cardOne){
       return
    //    console.log("equal")
   }
   else if (card == 1) {
        cardCount++
        cardOne = card
        return
        // console.log("ace")
    } else if (card > cardOne) {
        cardCount++
        cardOne = card
        return 
        // console.log("higher")
    } else if (card < cardOne) {
        cardCount = 0
        cardOne = card
         return 
        // console.log("lower")
    }
    
}

compareCardLower = () => {
    if(card == cardOne){
        return
    }
    else if (card == 1) {
        cardCount++
        cardOne = card
        return
    } else if (card < cardOne) {
        cardCount++
        cardOne = card
        return
    } else if (card > cardOne) {
        cardCount=0
        cardOne = card
        return
    }
}
removeCardOne=()=>{
    firstCard.removeChild(cardOneImg)
}

newCardOne=()=>{
cardOneImg.src = `images/${cardOne}.png`
   let firstCard = document.getElementById("firstCard")
   firstCard.appendChild(cardOneImg);}

   winner=()=>{
    if(cardCount >= 5){
  let winner =  document.getElementById("winner")
  winner.innerHTML = "winner"

    }
    else if(cardCount < 5){
    let winner =  document.getElementById("winner")
  winner.innerHTML = ""}
}

// console.log(getFirstCard())
// console.log(getCard())
// compareCardHigher()


window.addEventListener("load", function () {
//    document.getElementById("newGame").addEventListener("click", function(){
    getFirstCard()
})

document.getElementById("higher").addEventListener("click", function () {
    getCard()
    compareCardHigher();
    winner()
    // removeCardOne()
    // newCardOne();
    document.getElementById("counter").innerHTML = cardCount
    
})

document.getElementById("lower").addEventListener("click", function () {
    getCard();
    compareCardLower();
    winner()
    // removeCardOne()
    // newCardOne();
    document.getElementById("counter").innerHTML = cardCount
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}