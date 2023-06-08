function createGame(player1, hour, player2) {
  return `
    <li>
        <img src="assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="assets/icon-${player2}.svg" alt="Banderia da ${player2}" />
    </li>
`;
}

function createCard(day, date, games) {
  return `
    <div class="card">
          <h2>${day} <span>${date}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
    `;
}

document.querySelector("#cards").innerHTML += `
        ${createCard("24/11", "quinta",
        createGame('brazil', '16:00', 'serbia') + 
        createGame('portugal', '16:00', 'uruguai'))}

        ${createCard("28/11", "segunda", 
        createGame('switzerland', '13:00', 'brazil'))}

        ${createCard("02/12", "sexta",
        createGame('brazil', '16:00', 'cameroon'))}
`;
