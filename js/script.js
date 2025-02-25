// obtendo os elementos
const inputItem = document.getElementById("add-item")
const form = document.querySelector("form")
const list = document.getElementById("list")
const footer = document.querySelector("footer")


// manipulando o input para receber somente texto
inputItem.addEventListener("input", () => {
  const hasNumberRegex = /\d+/g
  inputItem.value = inputItem.value.replace(hasNumberRegex, "")
})

form.onsubmit = (e) => {
  // impede que a pagina seja caregada ao enviar
  e.preventDefault()

  // verifica se o input esta em branco, se sim emite um alerta, se nao prossegue com aplicação
  if(inputItem.value.trim() === ""){
    alert("Preencha o campo com nome do item a ser adicionado!")
    // limpa o input
    inputItem.value = ""
    // foca no input novamente
    inputItem.focus()
  } else {
    // cria um elemento
    const newItem = document.createElement("div")
    // adiciona o conteudo desse elemento
    newItem.innerHTML = `
      <div class="radio-wrapper flex gap-12">
        <input type="checkbox" name="${inputItem.value}" id="${inputItem.value}">
        <label for="${inputItem.value}" >${inputItem.value}</label>
        <span class="sr-only">${inputItem.value}</span>
      </div>
      <button class="btn-remove">
        <img src="assets/icons/trash.svg" alt="ícone de lixeira">
      </button>
      `
    // atribui as classes de estilizacao
    newItem.className = "item-list flex space-between";
    // adicionar o elemento a div pai
    list.appendChild(newItem)
  }

  // limpa o input
  inputItem.value = ""
  // foca no input novamente
  inputItem.focus()
}

// exibe o alerta de item removido da lista
function showAlert() {
  footer.classList.add("show-alert")
}