// create dropdown selection for teams to play each other
// set the round
// submit the selection to main game
// fixtues is the array which controls the fixtures in app.js

//set a round number

const roundNumber = document.getElementById("roundNumber");
const teams = document.querySelectorAll("select");
const submitButton = document.getElementById("submitButton");

// Console logs the select options from the form in fixtureAdmin.html 
submitButton.addEventListener("click", e => {
  e.preventDefault()

  console.log(roundNumber.innerText);

  for (var i = 0; i < teams.length; i++) {
    if (teams[i].value === "afcBournemouth") {
      console.log("afcBournemouth");
    }
    if (teams[i].value === "arsenal") {
      console.log("arsenal")
    }
    if (teams[i].value === "astonVilla") {
      console.log("astonVilla")
    }
    if (teams[i].value === "brentford") {
      console.log("brentford")
    }
    if (teams[i].value === "brighton") {
      console.log("brighton")
    }
    if (teams[i].value === "chelsea") {
      console.log("chelsea")
    }
    if (teams[i].value === "crystalPalace") {
      console.log("crystalPalace")
    }
    if (teams[i].value === "everton") {
      console.log("everton")
    }
    if (teams[i].value === "fulham") {
      console.log("fulham")
    }
    if (teams[i].value === "leeds") {
      console.log("leeds")
    }
    if (teams[i].value === "leicester") {
      console.log("leicester")
    }
    if (teams[i].value === "liverpool") {
      console.log("liverpool")
    }
    if (teams[i].value === "manCity") {
      console.log("manCity")
    }
    if (teams[i].value === "manU") {
      console.log("manU")
    }
    if (teams[i].value === "newcastle") {
      console.log("newcastle")
    }
    if (teams[i].value === "nottsForest") {
      console.log("nottsForest")
    }
    if (teams[i].value === "southampton") {
      console.log("southampton")
    }
    if (teams[i].value === "spurs") {
      console.log("spurs")
    }
    if (teams[i].value === "westHam") {
      console.log("westHam")
    }
    if (teams[i].value === "wolves") {
      console.log("wolves")
    }
  }
})
