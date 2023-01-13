const billValueInput = document.querySelector('.bill-number')
const percentSelectInput = document.querySelectorAll(".percents-selects")
const peopleNumberInput = document.querySelector('.people-number')
const amountValueInput = document.getElementById('amount-value')
const customInput = document.querySelector('.custom')
const newValueAmount = document.getElementById('amount-value')
const newValueTotal = document.getElementById('total-value')
const resetBtn = document.getElementById('reset')

billValueInput.addEventListener('input', billInput)

peopleNumberInput.addEventListener('input', peopleInput)

percentSelectInput.forEach(item => {
  item.addEventListener('click', handleclick)
})

customInput.addEventListener('input', () => {
  calcular()
})

resetBtn.addEventListener('click', reset)

let billValue = 0.0
let peopleNumber = 1


function billInput() {
  billValue = parseFloat(billValueInput.value)
  calcular()
}

function peopleInput() {
  peopleNumber = parseFloat(peopleNumberInput.value)
  if (peopleNumber < 1) {
    peopleNumber.style.border = '2px solid red'
  }
  calcular()
}


function handleclick(event) {
  percentSelectInput.forEach(removeSelect => {
    removeSelect.classList.remove('select')
    customInput.value = ""
  })
  event.target.classList.add('select');
  calcular()
}


function calcular() {
  if (peopleNumber >= 1) {
    let percentSelect = parseFloat(document.querySelector('.percent-value .select').value);
    let totalAmount = parseFloat((billValue * (percentSelect/100))).toFixed(2);
    let totalPerson = parseFloat((billValue + (billValue * (percentSelect/100)))/peopleNumber).toFixed(2);
    newValueAmount.innerHTML = '$' + totalAmount;
    newValueTotal.innerHTML = '$' + totalPerson;
  }
}


function reset() {
  billValueInput.value = ''
  peopleNumberInput.value = ''
  newValueAmount.innerHTML = '$0.00';
  newValueTotal.innerHTML = '$0.00';
  customInput.value = ''
  percentSelectInput.forEach(item => {
    item.classList.remove('select')
  })
}