const cardEl = document.getElementById("card");
const frontEl = document.getElementById("front");
const backEl = document.getElementById("back");
const cardContainerEl = document.getElementById("card-container")

let timer1;
let timer2;
let rotateTime = 10;
let rotateCount = 3;
let i = 0;

const mouseEnterFuntion = () => {
  clearInterval(timer2)
  timer1 = setInterval(() => {
    i += rotateCount
    cardEl.style.transform = `rotateX(${i}deg)`
    if(i === 90){
      frontEl.style.display = 'none'
      backEl.style.display = 'block'
    } 
    if(i === 180){
      clearInterval(timer1)
    }
  }, rotateTime);
}

const mouseLeaveFunction = () => {
  clearInterval(timer1)
  timer2 = setInterval(() => {
    i -= rotateCount
    cardEl.style.transform = `rotateX(${i}deg)`
    if(i === 90){
      backEl.style.display = 'none'
      frontEl.style.display = 'block'
    } 
    if(i === 0){
      clearInterval(timer2)
    }
  }, rotateTime);
}

cardContainerEl.addEventListener("mouseleave", mouseLeaveFunction);
cardContainerEl.addEventListener("mouseenter", mouseEnterFuntion);