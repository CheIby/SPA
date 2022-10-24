const warpper = document.querySelector('.wrapper')
const noBtn = document.querySelector('.no-btn')
// const warpperRect =warpper.getBoundingClientRect()
// const noBtnRect = noBtn.getBoundingClientRect()

noBtn.addEventListener('mouseover',()=>{
    // const i = Math.floor(Math.random()*(warpperRect.width - noBtnRect.width))+1
    // const j = Math.floor(Math.random()*(warpperRect.height - noBtnRect.height))+1
    const i = Math.floor(Math.random()%1600)
    const j = Math.floor(Math.random()%600)
    noBtn.style.left=i+'px'
    noBtn.style.top=j+'px'
})