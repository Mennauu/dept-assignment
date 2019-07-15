import Animate from 'animate.js'

(() => {
  const animate = new Animate({
    target: '[data-animate]',
    animatedClass: 'js-animated',
    offset: [0.01, 0],
    delay: 0,
    remove: true,
    scrolled: false,
    reverse: false,
    onLoad: true,
    onScroll: true,
    onResize: false,
    disableFilter: false
  })

  animate.init()
})()