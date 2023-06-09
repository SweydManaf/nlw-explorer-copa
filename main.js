const CARDS = [
  {
    date: "21-11",
    day: "segunda",
    plays: [
      {
        player1: "brazil",
        time: "08:00",
        player2: "cameroon",
      },
      {
        player1: "hungary",
        time: "13:00",
        player2: "argentina",
      },
      {
        player1: "colombia",
        time: "20:00",
        player2: "japan",
      }
    ],
  },
   {
    date: "24-11",
    day: "quinta",
    plays: [
      {
        player1: "british",
        time: "08:00",
        player2: "cameroon",
      },
      {
        player1: "india",
        time: "13:00",
        player2: "armenia",
      },
      {
        player1: "comoros",
        time: "20:00",
        player2: "jordan",
      }
    ],
  },
  {
    date: "28-11",
    day: "sexta",
    plays: [
      {
        player1: "korea",
        time: "10:00",
        player2: "gana",
      },
      {
        player1: "brazil",
        time: "13:00",
        player2: "switzerland",
      }
    ],
  },
  {
    date: "02-12",
    day: "terça",
    plays: [
      {
        player1: "portugal",
        time: "16:00",
        player2: "uruguai",
      },
      {
        player1: "serbia",
        time: "22:00",
        player2: "india",
      }
    ],
  }
];

function createGame(player1, hour, player2) {
  return `
    <li>
        <img src="assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
`;
}

let delay = -0.3;
function createCard(date, day) {
  delay += 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
          <h2>${date.replace("-", "/")} <span>${day}</span></h2>
          <ul class="${day + "-" + date}">
          </ul>
        </div>
    `;
}

for (let card = 0; card < CARDS.length; card++) {
  document.querySelector("#cards").innerHTML += `
        ${createCard(CARDS[card].date, CARDS[card].day)}`;
  for (play = 0; play < CARDS[card].plays.length; play++) {
    document.querySelector(
      `.${CARDS[card].day + "-" + CARDS[card].date}`
    ).innerHTML += createGame(
      CARDS[card].plays[play].player1,
      CARDS[card].plays[play].time,
      CARDS[card].plays[play].player2
    );
  }
}
