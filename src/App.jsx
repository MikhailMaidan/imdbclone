import Header from '@/components/Header/Header.jsx'
import BDscreen from '@/components/BDscreen/BDscreen.jsx'
import MovieImageContainer from '@/components/MovieImageContainer/MovieImageContainer.jsx'
import NewLiveShow from './components/NewLiveShow/NewLiveShow.jsx'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer.jsx'
import NewTVShow from './components/TVShows/TVShow.jsx'
import MiniSeries from './components/MiniSeries/MiniSeries.jsx'
import './App.scss'


export default function App() {
  return (
    <div>
       <MovieImageContainer
        header={<Header />}
        poster={<BDscreen />}
      />
      <NewLiveShow />
      <NewTVShow />
      <MiniSeries />
      <VideoPlayer videoId="1007472"/>
    </div>
  );
}
