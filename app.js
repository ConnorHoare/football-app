// team class to create new teams, with name, logo and their abreviation
class Team {
  constructor(name, badge) {
    this.name = name;
    this.badge = badge;
    this.abreviation = name.slice(0,3).toUpperCase();
  }
}

// All premier league teams
const afcBournemouth = new Team("AFC Bournemouth", "images/teams/Bournemouth2.png");
const arsenal = new Team("Arsenal", "images/teams/Arsenal.png");
const astonVilla = new Team("Aston Villa", "images/teams/AstonVilla2.png");
const brentford = new Team("Brentford", "images/teams/Brentford.png");
const brighton = new Team("Brighton & Hove Albion", "images/teams/Brighton.png");
const chelsea = new Team("Chelsea", "images/teams/Chelsea.png");
const crystalPalace = new Team("Crystal Palace", "images/teams/CrystalPalace.png");
const everton = new Team("Everton", "images/teams/Everton.png");
const fulham = new Team("Fulham", "images/teams/Fulham.png");
const leeds = new Team("Leeds United", "images/teams/Leeds.png");
const leicester = new Team("Leicester City", "images/teams/Leicester.png");
const liverpool = new Team("Liverpool", "images/teams/Liverpool.png");
const manCity = new Team("Manchester City", "images/teams/ManCity.png");
const manU = new Team("Manchester Utd", "images/teams/ManUtd.png");
const newcastle = new Team("Newcastle Utd", "images/teams/Newcastle.png");
const nottsForest = new Team("Nottingham Forest", "images/teams/NottsForest.png");
const southampton = new Team("Southampton", "images/teams/Southampton.png");
const spurs = new Team("Tottenham Hotspur", "images/teams/Spurs.png");
const westHam = new Team("West Ham Utd", "images/teams/WestHam.png");
const wolves = new Team("Wolverhampton Wanderers", "images/teams/Wolves.png");

// round to display tournament round
let round = 1;

// round 1 fixtures
let fixtures = [
  [afcBournemouth, arsenal],
  [astonVilla, brentford],
  [brighton, chelsea],
  [crystalPalace, everton],
  [fulham, leeds],
  [leicester, liverpool],
  [manCity, manU],
  [newcastle, nottsForest],
  [southampton, spurs],
  [westHam, wolves]
];

// function to display the fixtures
function displayFixtures() {
  let div = document.createElement("DIV");
  div.classList.add("fixture-container");
  let ul = document.createElement("UL");
  ul.classList.add("fixture-list");
  div.append(ul);

  for (var i = 0; i < fixtures.length; i++) {

    // Create List item
    let li = document.createElement("LI");
    li.classList.add("fixture");
    ul.append(li);

    // Create home team
    let homeDiv = document.createElement("DIV");
    homeDiv.classList.add("team-1");
    homeDiv.classList.add("team");
    let homeName = document.createElement("P");
    homeName.classList.add("team-name");
    homeName.innerText = `${fixtures[i][0].name}`
    let homeBtn = document.createElement("BUTTON");
    homeBtn.classList.add("btn");
    homeBtn.classList.add("selection-button");
    homeBtn.type = "button"
    homeBtn.name = "button"
    homeBtn.innerText = `${fixtures[i][0].abreviation}`
    homeDiv.append(homeName);
    homeDiv.append(homeBtn);


    // Create VS
    let vsDiv = document.createElement("DIV");
    vsDiv.classList.add("vs");

    let homeImg = document.createElement("IMG");
    homeImg.classList.add("team-logo");
    homeImg.src = `${fixtures[i][0].badge}`

    let vsHeader = document.createElement("H4");
    vsHeader.classList.add("vs-h4");
    vsHeader.innerText = "VS";

    let awayImg = document.createElement("IMG");
    awayImg.classList.add("team-logo");
    awayImg.src = `${fixtures[i][1].badge}`

    let vsDate = document.createElement("DIV");
    vsDate.classList.add("date");
    let vsDateP = document.createElement("P");
    vsDateP.classList.add("date-p");
    vsDateP.innerText = "Saturday 8 Oct 2022"
    vsDate.append(vsDateP);

    vsDiv.append(homeImg);
    vsDiv.append(vsHeader);
    vsDiv.append(awayImg);
    vsDiv.append(vsDate);

    // Create Away team

    let awayDiv = document.createElement("DIV");
    awayDiv.classList.add("team-2");
    awayDiv.classList.add("team");
    let awayName = document.createElement("P");
    awayName.classList.add("team-name");
    awayName.innerText = `${fixtures[i][1].name}`
    let awayBtn = document.createElement("BUTTON");
    awayBtn.classList.add("btn");
    awayBtn.classList.add("selection-button");
    awayBtn.type = "button"
    awayBtn.name = "button"
    awayBtn.innerText = `${fixtures[i][1].abreviation}`
    awayDiv.append(awayName);
    awayDiv.append(awayBtn);

    // add elements to list
    li.append(homeDiv);
    li.append(vsDiv);
    li.append(awayDiv);
  }

  let body = document.querySelector("body");
  body.append(div);
}

displayFixtures();
