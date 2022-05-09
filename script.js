const button = document.getElementById('btn')
const inputNumber = document.getElementById('inputNumber')
const password = document.getElementById('password')
const copyIcon = document.getElementById('copyIcon')
const nums = document.getElementById('nums')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const syms = document.getElementById('syms')

let charsUp = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
let chars = 'abcdefghijklmnopqrstuvwxyz'
let numbers = '0123456789'
let symbols = `~\`! @#$%^&*()_-+={[}]|\\:;"'<,>.?/`

let currentLength = inputNumber.value
let passwordFinal = ''
let passwordArray = ''

button.addEventListener('click', (e) => {
  e.preventDefault()
  if (upper.checked) passwordArray += charsUp
  if (lower.checked) passwordArray += chars
  if (nums.checked) passwordArray += numbers
  if (syms.checked) passwordArray += symbols
  createPassword()
  passwordArray = ''
})

inputNumber.addEventListener('input', (e) => {
  currentLength = inputNumber.value
})

function getRandomNumber(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function createPassword() {
  for (let i = 0; i < currentLength; i++) {
    passwordFinal += getRandomNumber(passwordArray)
  }
  password.innerText = passwordFinal
  passwordFinal = ''
}

copyIcon.addEventListener('click', (e) => {
  if (password.innerText) {
    navigator.clipboard
      .writeText(`${password.innerText}`)
      .then(() => {
        alert('Password copied to clipboard!')
      })
      .catch((err) => {
        console.log('Something went wrong', err)
      })
  }
})