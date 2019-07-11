export default class NavigationModal {
  constructor(el) {
    const header = document.querySelector('.header__navigation')
    const modal = document.querySelector('.navigation-modal')

    el.addEventListener("click", () => {
      if (modal.classList.contains('visible')) {
        modal.classList.remove('visible')
        header.classList.remove('header__navigation--dark')
        document.body.classList.remove('disable-scroll')
      } else {
        modal.classList.add('visible')
        header.classList.add('header__navigation--dark')
        document.body.classList.add('disable-scroll')
      }
    })
  }
}