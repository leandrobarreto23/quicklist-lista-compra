// obtendo os elementos
const inputItem = document.getElementById("add-item")

// manipulando o input para receber somente texto
inputItem.addEventListener("input", () => {
  const hasNumberRegex = /\d+/g
  inputItem.value = inputItem.value.replace(hasNumberRegex, "")
})