(() => {
  const form = document.querySelector('.contact__form')
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const message = document.getElementById('message')
  const inputs = [name, email, message]

  for (input of inputs) {
    input.addEventListener('input', (event) => {
      const error = document.querySelector(`.contact__error--${event.target.name}`)

      if (event.target.value.length > 0 && event.target.validity.valid) {
        error.innerText = ""
        event.target.classList.add('valid')
      } else if (input.classList.contains('valid')) {
        event.target.classList.remove('valid')
      }
    }, false)
  }

  form.addEventListener('submit', (event) => {
    const elements = event.target.elements

    for (element of elements) {
      if (element.name && element.value.length === 0) {
        const error = document.querySelector(`.contact__error--${element.name}`)
        error.innerText = ""
        error.insertAdjacentHTML('afterbegin', 'This field is required')

        event.preventDefault()
      }

      if (element.name === 'email' && element.value.length > 0 && !element.validity.valid) {
        const error = document.querySelector(`.contact__error--${element.name}`)
        error.innerText = ""
        error.insertAdjacentHTML('afterbegin', 'Please insert a valid email address')

        event.preventDefault()
      }
    }
  }, false)
})()