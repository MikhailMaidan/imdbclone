import NewLiveShow from '@/components/NewLiveShow/NewLiveShow.jsx'

import NewTVShow from '@/components/TVShows/TVShow.jsx'
import MiniSeries from '@/components/MiniSeries/MiniSeries.jsx'

import './Home.scss'

export default function Home() {
  return (
    <div> 
      <NewLiveShow />
      <NewTVShow />
      <MiniSeries />
    </div>
  );
}
