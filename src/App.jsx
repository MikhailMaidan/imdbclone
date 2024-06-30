import Header from '@/components/Header/Header.jsx'
// import BDscreen from '@/components/BDscreen/BDscreen.jsx'
// import MovieImageContainer from '@/components/MovieImageContainer/MovieImageContainer.jsx'
// import Novelties from '@/components/Novelties/Novelties.jsx'
// import NewLiveShow from '@/components/NewLiveShow/NewLiveShow.jsx'
import { Routes, Route } from 'react-router-dom';
import PlayerPage from '@/components/PlayerPage/PlayerPage.jsx';
import Home from '@/components/Home/Home.jsx';
// import NewTVShow from '@/components/TVShows/TVShow.jsx'
// import MiniSeries from '@/components/MiniSeries/MiniSeries.jsx'

import './App.scss'

export default function App() {
  return (
    <div> 
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/player/:slug" element={<PlayerPage />} />
        {/* <Route component={NotFound} /> */}
      </Routes>
      {/*<Novelties />*/}
      {/*<MovieImageContainer
        header={<Header />}
        poster={<BDscreen />}
      />*/}
      {/* <NewLiveShow />
      <NewTVShow />
      <MiniSeries /> */}
    </div>
  );
}
