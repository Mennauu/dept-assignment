/* 
  Applying Styles Based on the User Scroll Position with Smart CSS

  By: Rik Schennink
  Source: https://pqina.nl/blog/applying-styles-based-on-the-user-scroll-position-with-smart-css/
*/
const debounce = (fn) => {
  let frame

  return (...params) => {
    if (frame) cancelAnimationFrame(frame)

    frame = requestAnimationFrame(() => fn(...params))
  }
}
const storeScroll = () => document.documentElement.dataset.scroll = window.scrollY

document.addEventListener('scroll', debounce(storeScroll), { passive: true })

storeScroll()