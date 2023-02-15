const cardEl = document.getElementById("card");
const frontEl = document.getElementById("front");
const backEl = document.getElementById("back");
const cardContainerEl = document.getElementById("card-container")
const st = window.getComputedStyle(cardEl, null)

const cubicParams = cardContainerEl.getAttribute('data-cubic-params')
cardEl.style.transitionTimingFunction = `cubic-bezier(${cubicParams})`

const transitionTime = +cardContainerEl.getAttribute('data-time-duration')
const preparedTransitionTime = `${transitionTime}s`
cardEl.style.transitionDuration = preparedTransitionTime

const transitionHandler = () => {
  setTimeout(() => {
    let timer = setInterval(() => {
      const tr = st.getPropertyValue('transform')
      
      let trWithoutJunks = tr.replace('(', "")
      trWithoutJunks = trWithoutJunks.replace(')', "")
      trWithoutJunks = trWithoutJunks.replace('matrix3d', "")
      
      const trArray = trWithoutJunks.split(',')
      const trArrayWithoutSpace = trArray.map(item => item.trim())
      
      const k = trArrayWithoutSpace[10]

      if(k === '-1' || k === undefined) {
        clearInterval(timer)
      }
  
      const angleK = Math.round(Math.asin(k) * (180/Math.PI));

      if(angleK < 0 && angleK >= -90){
        frontEl.style.display = 'none'
        backEl.style.display = 'block'
      } else if(angleK > 0 && angleK <= 90) {
        frontEl.style.display = 'block'
        backEl.style.display = 'none'
      }
    }, 1)
  }, 50)
}

cardContainerEl.addEventListener("mouseleave", transitionHandler);
cardContainerEl.addEventListener("mouseenter", transitionHandler);