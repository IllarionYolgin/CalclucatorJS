// Start writing JavaScript here!
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')
const operatorKeys = keys.querySelectorAll('[data-type="operator"]')

// let displayValue = display.textContent
let displayValue = ''


keys.addEventListener('click', event => {
  console.log(event.target)
  if (!event.target.closest('button')) return

  const key = event.target
  const keyValue = key.textContent
  const { type } = key.dataset
  const { previousKeyType } = calculator.dataset

  if (type === 'number' || type === 'operator') {
    displayValue += key.textContent;
  }

  if (type === 'equal') {
    console.log(displayValue.replace('÷', '/').replace('×', '*'))
    displayValue = eval(displayValue.replace('÷', '/').replace('×', '*'))
    }

  if (type === 'clear') {
    displayValue = ''
  }

  display.value = displayValue

  calculator.dataset.previousKeyType = type
})