import { TimelineMax } from 'gsap'

export default {
  bind: (el, { value }) => {
    const { circles, text } = value
    //here we create markup
    const container = document.createElement('div')
    container.className = 'container'
    const loader = document.createElement('div')
    loader.className = 'loader'
    container.appendChild(loader)
    let tl = new TimelineMax({
      repeat: -1,
      yoyo: true
    })
    let dots = []
    tl.to({}, 0.6, {})

    for (let i = 0; i < circles; i++) {
      const dot = document.createElement('div')
      dot.className = 'loader--dot'
      loader.appendChild(dot)
      dots.push(dot)
    }
    tl.staggerTo(
      dots,
      1.5,
      {
        x: 230
      },
      +0.1
    )
    //add text
    let textDiv = document.createElement('div')
    textDiv.className = 'loader--text'
    textDiv.innerHTML = text
    //dots
    let textDotsDiv = document.createElement('span')
    textDotsDiv.innerHTML = '...'
    textDiv.appendChild(textDotsDiv)
    //animation for dots
    loader.appendChild(textDiv)
    document.body.appendChild(container)
  }
}
