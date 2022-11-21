function createGame(
  grupo = "",
  player1 = "A confirmar",
  player2 = "A confirmar",
  hour,
  player1result = "",
  player2result = ""
) {
  return `
    <li>
      <div>
        <h1>${grupo}</h1>
      </div>
      <div id="game">
        <div>
          <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">      
          <p>${player1}</p>
          <h1>${player1result}</h1>
        </div>

        <strong>${hour}</strong>

        <div>
          <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
          <p>${player2}</p>
          <h1>${player2result}</h1>
        </div>
      </div>
    </li>
  `;
}

let delay = -0.4;
function createCard(fase, date, day, games) {
  delay = delay + 0.4;

  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h1>${fase}</h1>

      <h2>${date} <span>${day}</span> </h2>
      <ul>
        ${games}
      </ul>
    </div>
  `;
}

document.querySelector("#cards").innerHTML =
  createCard(
    "Fase de grupos",
    "20/11",
    "domingo",
    createGame("Grupo A", "qatar", "ecuador", "13:00", 0, 2)
  ) +
  createCard(
    "Fase de grupos",
    "21/11",
    "segunda",
    createGame("Grupo B", "england", "iran", "10:00") +
      createGame("Grupo A", "senegal", "netherlands", "13:00") +
      createGame("Grupo B", "united-states", "wales", "16:00")
  ) +
  createCard(
    "Fase de grupos",
    "22/11",
    "terça",
    createGame("Grupo C", "argentina", "saudi-arabia", "07:00") +
      createGame("Grupo D", "denmark", "tunisia", "10:00") +
      createGame("Grupo C", "mexico", "poland", "13:00") +
      createGame("Grupo D", "france", "australia", "16:00")
  ) +
  createCard(
    "Fase de grupos",
    "23/11",
    "quarta",
    createGame("Grupo F", "morocco", "croatia", "07:00") +
      createGame("Grupo E", "germany", "japan", "10:00") +
      createGame("Grupo E", "spain", "costa-rica", "13:00") +
      createGame("Grupo D", "belgium", "canada", "16:00")
  ) +
  createCard(
    "Fase de grupos",
    "24/11",
    "quinta",
    createGame("Grupo G", "switzerland", "cameroon", "07:00") +
      createGame("Grupo H", "uruguay", "south-corea", "10:00") +
      createGame("Grupo H", "portugal", "ghana", "13:00") +
      createGame("Grupo G", "brazil", "serbia", "16:00")
  ) +
  createCard(
    "Fase de grupos",
    "25/11",
    "sexta",
    createGame("Grupo B", "wales", "iran", "07:00") +
      createGame("Grupo A", "qatar", "senegal", "10:00") +
      createGame("Grupo A", "netherlands", "ecuador", "13:00") +
      createGame("Grupo B", "england", "united-states", "16:00")
  ) +
  createCard(
    "Fase de grupos",
    "26/11",
    "sabado",
    createGame("Grupo D", "tunisia", "australia", "07:00") +
      createGame("Grupo C", "poland", "saudi-arabia", "10:00") +
      createGame("Grupo D", "france", "denmark", "13:00") +
      createGame("Grupo C", "argentina", "mexico", "16:00")
  ) +
  createCard(
    "Fase de grupos",
    "27/11",
    "domingo",
    createGame("Grupo E", "japan", "costa-rica", "07:00") +
      createGame("Grupo F", "belgium", "morocco", "10:00") +
      createGame("Grupo F", "croatia", "canada", "13:00") +
      createGame("Grupo E", "spain", "germany", "16:00")
  ) +
  createCard(
    "Fase de grupos",
    "28/11",
    "segunda",
    createGame("Grupo G", "cameroon", "serbia", "07:00") +
      createGame("Grupo H", "south-corea", "ghana", "10:00") +
      createGame("Grupo G", "brazil", "switzerland", "13:00") +
      createGame("Grupo H", "portugal", "uruguay", "16:00")
  ) +
  createCard(
    "Fase de grupos",
    "29/11",
    "terca",
    createGame("Grupo A", "ecuador", "senegal", "07:00") +
      createGame("Grupo A", "netherlands", "qatar", "10:00") +
      createGame("Grupo B", "iran", "united-states", "13:00") +
      createGame("Grupo B", "wales", "england", "16:00")
  ) +
  createCard(
    "Fase de grupos",
    "30/11",
    "quarta",
    createGame("Grupo D", "tunisia", "france", "07:00") +
      createGame("Grupo D", "australia", "denmark", "10:00") +
      createGame("Grupo C", "poland", "argentina", "13:00") +
      createGame("Grupo C", "saudi-arabia", "mexico", "16:00")
  ) +
  createCard(
    "Fase de grupos",
    "01/12",
    "quinta",
    createGame("Grupo F", "croatia", "belgium", "12:00") +
      createGame("Grupo F", "canada", "morocco", "12:00") +
      createGame("Grupo E", "japan", "spain", "16:00") +
      createGame("Grupo E", "costa-rica", "germany", "16:00")
  ) +
  createCard(
    "Fase de grupos",
    "02/12",
    "sexta",
    createGame("Grupo H", "south-corea", "portugal", "12:00") +
      createGame("Grupo H", "ghana", "uruguay", "12:00") +
      createGame("Grupo G", "serbia", "switzerland", "16:00") +
      createGame("Grupo G", "cameroon", "brazil", "16:00")
  ) +
  createCard(
    "Oitavas de final",
    "03/12",
    "sabado",
    createGame("", "confirmar", "confirmar", "12:00") +
      createGame("", "confirmar", "confirmar", "16:00")
  ) +
  createCard(
    "Oitavas de final",
    "04/12",
    "domingo",
    createGame("", "confirmar", "confirmar", "12:00") +
      createGame("", "confirmar", "confirmar", "16:00")
  ) +
  createCard(
    "Oitavas de final",
    "05/12",
    "segunda",
    createGame("", "confirmar", "confirmar", "12:00") +
      createGame("", "confirmar", "confirmar", "16:00")
  ) +
  createCard(
    "Oitavas de final",
    "06/12",
    "terca",
    createGame("", "confirmar", "confirmar", "12:00") +
      createGame("", "confirmar", "confirmar", "16:00")
  ) +
  createCard(
    "Quartas de final",
    "09/12",
    "sexta",
    createGame("", "confirmar", "confirmar", "12:00") +
      createGame("", "confirmar", "confirmar", "16:00")
  ) +
  createCard(
    "Quartas de final",
    "10/12",
    "sábado",
    createGame("", "confirmar", "confirmar", "12:00") +
      createGame("", "confirmar", "confirmar", "16:00")
  ) +
  createCard(
    "Semifinais",
    "13/12",
    "terca",
    createGame("", "confirmar", "confirmar", "16:00")
  ) +
  createCard(
    "Semifinais",
    "14/12",
    "quarta",
    createGame("", "confirmar", "confirmar", "16:00")
  ) +
  createCard(
    "Terceiro Lugar",
    "17/12",
    "sábado",
    createGame("", "confirmar", "confirmar", "12:00")
  ) +
  createCard(
    "Final",
    "18/12",
    "domingo",
    createGame("", "confirmar", "confirmar", "12:00")
  );
