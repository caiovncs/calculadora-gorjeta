const billValueInput = document.querySelector('.bill-number')
const percentSelectInput = document.querySelectorAll(".percents-selects")
const peopleNumberInput = document.querySelector('.people-number')
const amountValueInput = document.getElementById('amount-value')
const customInput = document.querySelector('.custom')
const newValueAmount = document.getElementById('amount-value')
const newValueTotal = document.getElementById('total-value')
NaN == '0'
// const resetBtn = document.getElementById('reset')

// resetBtn.addEventListener('click', () => {
//   parseFloat(billValueInput.value) == 0
//   parseFloat(peopleNumberInput.value) == 0
//   console.log('oi')

// })


percentSelectInput.forEach(btn => {
  btn.addEventListener('click', (event) => {
    percentSelectInput.forEach(removeSelect => {
      removeSelect.classList.remove('select')
    })
    event.target.classList.add('select');
    calcular();
  })
})


const calcular = () => {
  const billValue = parseFloat(billValueInput.value)
  const peopleNumber = parseFloat(peopleNumberInput.value)
  const percentSelect = parseFloat(document.querySelector('.percent-value .select').value);
  const totalAmount = parseFloat((billValue * (percentSelect/100))).toFixed(2)
  const totalPerson = parseFloat((billValue + (billValue * (percentSelect/100)))/peopleNumber).toFixed(2)
  newValueAmount.innerHTML = '$' + totalAmount
  newValueTotal.innerHTML = '$' + totalPerson

}



customInput.addEventListener('keyup', (event) => {
  calcular()
})
peopleNumberInput.addEventListener('keyup', (event) => {
  calcular()
})
billValueInput.addEventListener('keyup', (event) => {
  calcular()
})