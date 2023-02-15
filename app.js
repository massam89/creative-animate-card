const cardEl = document.getElementById("card");
const frontEl = document.getElementById("front");
const backEl = document.getElementById("back");
const cardContainerEl = document.getElementById("card-container")

const cubicParams = '.46, .07, 0.9, 0.11'
const transitionTime = '0.5s'

const st = window.getComputedStyle(cardEl, null)

let timer1;

cardEl.style.transitionTimingFunction = `cubic-bezier(${cubicParams})`
cardEl.style.transitionDuration = transitionTime

const animationHandler = (e) => {

  timer1 = setInterval(() => {
    const tr = st.getPropertyValue('transform')
    
    let trWithoutJunks = tr.replace('(', "")
    trWithoutJunks = trWithoutJunks.replace(')', "")
    trWithoutJunks = trWithoutJunks.replace('matrix3d', "")
    
    const trArray = trWithoutJunks.split(',')
    const trArrayWithoutSpace = trArray.map(item => item.trim())
    
    const a = trArrayWithoutSpace[0]
    const b = trArrayWithoutSpace[1]
    const c = trArrayWithoutSpace[2]
    const d = trArrayWithoutSpace[3]
    const e = trArrayWithoutSpace[4]
    const f = trArrayWithoutSpace[5]
    const g = trArrayWithoutSpace[6]
    const h = trArrayWithoutSpace[7]
    const i = trArrayWithoutSpace[8]
    const j = trArrayWithoutSpace[9]
    const k = trArrayWithoutSpace[10]
    const l = trArrayWithoutSpace[11]
    const m = trArrayWithoutSpace[12]
    const n = trArrayWithoutSpace[13]
    const o = trArrayWithoutSpace[14]
    const p = trArrayWithoutSpace[15]

    const angleA = Math.round(Math.asin(a) * (180/Math.PI));
    const angleE = Math.round(Math.asin(e) * (180/Math.PI));
    const angleG = Math.round(Math.asin(g) * (180/Math.PI));
    const angleJ = Math.round(Math.asin(j) * (180/Math.PI));
    const angleK = Math.round(Math.asin(k) * (180/Math.PI));
    const angleP = Math.round(Math.asin(p) * (180/Math.PI));

    console.log(angleK)

      if(angleK < 0){
        frontEl.style.display = 'none'
        backEl.style.display = 'block'
      } else {
        frontEl.style.display = 'block'
        backEl.style.display = 'none'
      }

      if(angleK === 90 || angleK === -90) {
        clearInterval(timer1)
      }
  }, 100)
}

cardContainerEl.addEventListener("mouseleave", animationHandler);
cardContainerEl.addEventListener("mouseenter", animationHandler);