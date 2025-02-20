const createCells = function () {
  for (i = 0; i < 76; i++) {
    const cell = document.createElement("div") //<div><div/>
    cell.classList.add("borders") //<div class=borders><div/>
    const cellValue = document.createElement("h3") //<h3><h3/>
    cell.appendChild(cellValue) //<div class=borders><h3><h3/><div/>
    cellValue.innerText = i + 1 //<div class=borders><h3>i+1<h3/><div/>
    const numbers = document.getElementById("numberList")
    numbers.appendChild(cell)
  }
}
createCells()

const numberExtraction = function () {
  const result = document.getElementById("result")
  const extraction = Math.ceil(Math.random() * 77)
  result.innerText = extraction
  return extraction
}
const highlight = function () {
  for (i = 0; i < 76; i++) {
    if (numberExtraction() === i + 1) {
      const cell = document.querySelectorAll("main div")[i]
      cell.classList.add("selected")
    }
  }
}

const playerCells = function (e) {
  e.preventDefault()
  playerNumber = document.getElementsByClassName("values")[i]
  console.log(playerNumber)
  for (i = 0; i < 24; i++) {
    const cell = document.createElement("div") //<div><div/>
    cell.classList.add("borders") //<div class=borders><div/>
    const cellValue = document.createElement("h3") //<h3><h3/>
    cell.appendChild(cellValue) //<div class=borders><h3><h3/><div/>
    cellValue.innerText = Math.ceil(Math.random() * 77) //<div class=borders><h3>66<h3/><div/>
    const numbers = document.getElementById("playerList")
    numbers.appendChild(cell)
  }
}
