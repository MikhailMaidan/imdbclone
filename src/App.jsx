import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from '@/components/Header/Header.jsx'
import BackgroundImageComponent from '@/components/BackgroundImageComponent/BackgroundImageComponent.jsx'
import BDscreen from '@/components/BDscreen/BDscreen.jsx'
import BlackBackGround from '@/components/BlackBackGround/BlackBackGround.jsx'
import LiveShow from '@/components/LiveShow/LiveShow.jsx'
import MostPopular from '@/components/MostPopular/MostPopular.jsx'
import MoviesForYou from '@/components/MoviesForYou/MoviesForYou.jsx'
import Bangla from '@/components/LatestBanglaMusic/Latest.jsx'
import Footer from '@/components/Footer/Footer.jsx'
import './index.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/base.css'
// import '@assets/styles/'




function App() {
  return (
  //   <div className="app-container">
  //   <div className="background-container">
  //     <BackgroundImageComponent />
  //     <div className="overlay">
  //       <Header />
  //       <BDscreen />
  //     </div>
  //   </div>
  //   <div className="content">
  //     <LiveShow />
  //     <MostPopular />
  //     <MoviesForYou />
  //     <Bangla />
  //     <Footer />
  //   </div>
  // </div>



    <div className="App main-container">
      
      <div>
      <BackgroundImageComponent /> 
      <Header />
      <BDscreen />
      </div>

      <div className='rest-program'>
      <div className='live-show-styles'>
        <LiveShow /> 
      </div>
      <MostPopular />
      <MoviesForYou />
      <Bangla />
      <Footer />
      </div>
     
      {/* <BlackBackGround /> 
      
      
      
    
      
       {/* <LiveShow />
      
      <MoviesForYou />
      <LatestBanglaMusic /> */}
      
    </div>
  );
}
export default App


/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/