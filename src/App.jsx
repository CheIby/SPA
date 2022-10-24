import logo from './logo.svg';
import './App.css';

function App() {
// const noBtn = document.querySelector('.no-btn')
// const warpperRect =warpper.getBoundingClientRect()
// const noBtnRect = noBtn.getBoundingClientRect()

  // noBtn.addEventListener('mouseover',()=>{})
//   noBtn.addEventListener('mouseover',()=>{
//     // const i = Math.floor(Math.random()*(warpperRect.width - noBtnRect.width))+1
//     // const j = Math.floor(Math.random()*(warpperRect.height - noBtnRect.height))+1
//     const i = Math.floor(Math.random()%1600)
//     const j = Math.floor(Math.random()%600)
//     noBtn.style.left=i+'px'
//     noBtn.style.top=j+'px'
// })
  const goBtn =()=>{
    alert("ไม่มีหรอกเหน็ดฟริกมีแต่จู๋เอาไหม")
  }

  const noBtn =()=>{
    const noBTN = document.querySelector('.no-btn')
    const i = Math.floor((Math.random()*100000)%1600)
    const j = Math.floor((Math.random()*100000)%700)
    noBTN.style.left= i+'px'
    noBTN.style.top= j+'px'
  }

  return (
    <div className='flex justify-center items-center h-screen'>
          <div className='wrapper'>
          <div className='text-center'>
              <h1>มาดูเหน็ดฟริกห้องเราไหม?</h1>
              <img src="https://i0.wp.com/dianaurban.com/wp-content/uploads/2017/07/21-honorable-mention.gif?resize=500%2C250&ssl=1" alt="" />
              <div className='flex justify-center'>
                <button className='absolute -ml-40 bg-green-600 p-3 w-20 mt-5 rounded-lg duration-100 hover:bg-green-400' onClick={goBtn}>ไป!!!</button>
                <button className='absolute ml-40 bg-red-600  p-3 w-20 mt-5 rounded-lg duration-100 hover:bg-red-400 no-btn' onMouseEnter={noBtn}>ไม่อะ</button>
              </div>
        </div>
      </div>
    </div>
    
  );
}




export default App;
