(() => {
  document.addEventListener('keydown', (key) => {
    if (key.keyCode === 9) {
      handleFirstTab(key)
    }
  })

  const handleFirstTab = (key) => {
    document.body.classList.add('is-tabbing')
    document.removeEventListener('keydown', handleFirstTab)
    document.addEventListener('mousedown', handleMouseDownOnce)
  }

  const handleMouseDownOnce = () => {
    document.body.classList.remove('is-tabbing')
    document.removeEventListener('mousedown', handleMouseDownOnce)
    document.addEventListener('keydown', handleFirstTab)
  }
})()