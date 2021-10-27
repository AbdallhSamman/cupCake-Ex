let firstName = document.querySelector('.name')
let counter = document.querySelector('.counter')
let type = document.querySelector('.type')
let infoTable=document.querySelector('#cupcake-table')
let namePattern = /[a-zA-Z0-9]{6,18}$/gm
let nameAleartMessage = document.querySelector('.name-erorr-msg')
let countAleartMessage = document.querySelector('.counter-erorr-msg')
let typeAleartMessage = document.querySelector('.type-erorr-msg')
let delivery = document.querySelector('.delivery')
let deliveryAleartMessage = document.querySelector('.delivery-erorr-msg')
let allergies = document.querySelector('.allergies')
let allergiesAleartMessage = document.querySelector('.Allergies-erorr-msg')

$(document).ready(show_cupcakes)

var cup_cakes = [
  { name: 'Chocolate', calories: 'high', weight: '200gm' },
  { name: 'Carrot', calories: 'medium', weight: '150gm' },
  { name: 'Banana', calories: 'high', weight: '200gm' },
  { name: 'Strawberry', calories: 'low', weight: '160gm' },
  { name: 'Peanut', calories: 'medium', weight: '200gm' },
]

function show_cupcakes() {
  //write code that shows the cupcakes in the table as per the instructions
  for (i=0;i<=4;i++){
    var firstRow = document.createElement("tr")
    infoTable.appendChild(firstRow)
    var firstColome = document.createElement("td")
    infoTable.appendChild(firstColome)
    firstColome.innerText=cup_cakes[i].name
    var secondColome = document.createElement("td")
    infoTable.appendChild(secondColome)
    secondColome.innerText=cup_cakes[i].calories
    var theridColome = document.createElement("td")
    infoTable.appendChild(theridColome)
    theridColome.innerText=cup_cakes[i].weight
    if (cup_cakes[i].calories=="high"){secondColome.style.backgroundColor="red"}
    if (cup_cakes[i].calories=="medium"){secondColome.style.backgroundColor="orange"}
    if (cup_cakes[i].calories=="low"){secondColome.style.backgroundColor="green"}
  }
}

function validate() {
  //write code that validates the form
  if (firstName.value === '') {
    nameAleartMessage.innerHTML = 'this filed is required to fill'
    nameAleartMessage.style.color = 'red'
  } else if (firstName.value !== namePattern) {
    nameAleartMessage.innerHTML = 'the name must be between 5-16 character'
    nameAleartMessage.style.color = 'red'
  } else if (firstName.value === namePattern) {
    nameAleartMessage.innerHTML = ''
  }

  if (counter.value === '') {
    countAleartMessage.innerHTML = 'this filed is required to fill'
    countAleartMessage.style.color = 'red'
  } else if (counter.value <= 0) {
    countAleartMessage.innerHTML = 'should be greater than zero'
    countAleartMessage.style.color = 'red'
  } else {
    countAleartMessage.innerHTML = ''
  }

  for (let i = 0; i <= type.value; i++) {
    if (i === 0) {
      typeAleartMessage.innerHTML = 'this filed is required to fill'
      typeAleartMessage.style.color = 'red'
    } else {
      typeAleartMessage.innerHTML = ''
    }
  }

  for (let i = 0; i <= delivery.value; i++) {
    if (i === 0) {
      deliveryAleartMessage.innerHTML = 'this filed is required to fill'
      deliveryAleartMessage.style.color = 'red'
    } else {
      deliveryAleartMessage.innerHTML = ''
    }
  }

  for (let i = 0; i <= allergies.value; i++) {
    if (i === 0) {
      allergiesAleartMessage.innerHTML = 'this filed is required to fill'
      allergiesAleartMessage.style.color = 'red'
    } else {
      allergiesAleartMessage.innerHTML = ''
    }
  }
  localStorage.setItem('user', firstName.value)
}

function show_storage() {
  //write code that shows the name from local storage
  let name = localStorage.getItem('user')
  let welcoming = document.querySelector('.welcome')
  welcoming.innerHTML = `Welcome ${name}`
}

document.addEventListener('click', function (e) {
  const subBtn = document.querySelector('.submit-btn')
  const show = document.querySelector('.show')
  if (e.target === subBtn) {
    validate()
  }
  if (e.target === show) {
    show_storage()
  }
})
