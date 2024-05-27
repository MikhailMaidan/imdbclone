import Header from '@/components/Header/Header.jsx'
import BDscreen from '@/components/BDscreen/BDscreen.jsx'
import MovieImageContainer from '@/components/MovieImageContainer/MovieImageContainer.jsx'
import NewLiveShow from './components/NewLiveShow/NewLiveShow.jsx'
// import NewMostPopular from './components/NewMostPopular/NewMostPopular.jsx'
// import NewMoviesForYou from './components/NewMoviesForYou/NewMoviesForYou.jsx'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer.jsx'
import './App.scss'

export default function App() {
  return (
    <div>
       <MovieImageContainer 
        header={<Header />}
        poster={<BDscreen />}
      />
      <NewLiveShow />
      <VideoPlayer videoId="258687"/>
      {/* <NewMostPopular />
      <NewMoviesForYou /> */}
      {/* <MostPopular /> */}
    </div>
  );
}