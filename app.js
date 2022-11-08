const keys = [...document.querySelectorAll('.btn')]
const keyscodes = keys.map(key => key.dataset.key)
const screen = document.querySelector('.screen')

keys.forEach(key => {
  key.addEventListener('click', function (e) {
    e.preventDefault()
    const code = e.target.dataset.key
    recup(code)
  })
})

document.addEventListener('keydown', function (e) {
  e.preventDefault()
  const code = e.key
  recup(code)
})

function recup(code) {
  if (keyscodes.includes(code)) {
    if(code === "Backspace") {
      screen.textContent = ""
    } else if (code === "Enter") {
      const result = eval(screen.textContent)
      screen.textContent = result
    } else {
      screen.textContent += code
    }
  }
}

window.addEventListener('error', e => screen.textContent = 'Erreur')