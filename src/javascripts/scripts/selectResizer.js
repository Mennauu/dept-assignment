/* 
  How to make the Selected Option the width of the current Selected Option's text?

  By: Samanime
  Source: https://stackoverflow.com/a/49693251
*/

(() => {
  const select = document.querySelector('select')

  select.addEventListener('change', function () {
    const dummySelect = document.createElement('select')
    dummySelect.classList.add('dummy')

    const dummyOption = document.createElement('option')
    dummyOption.innerHTML = this.value
    dummySelect.appendChild(dummyOption)

    document.body.appendChild(dummySelect)
    select.style.width = `${dummySelect.offsetWidth}px`

    document.body.removeChild(dummySelect)
  })

  // Trigger for the first time
  select.dispatchEvent(new Event('change'))
})()