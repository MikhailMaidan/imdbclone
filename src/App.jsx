import Header from '@/components/Header/Header.jsx'
import BDscreen from '@/components/BDscreen/BDscreen.jsx'
import BlackBackGround from '@/components/BlackBackGround/BlackBackGround.jsx'
import LiveShow from '@/components/LiveShow/LiveShow.jsx'
import MostPopular from '@/components/MostPopular/MostPopular.jsx'
import MoviesForYou from '@/components/MoviesForYou/MoviesForYou.jsx'
import Bangla from '@/components/LatestBanglaMusic/Latest.jsx'
import Footer from '@/components/Footer/footer.jsx'
import MovieImageContainer from '@/components/MovieImageContainer/MovieImageContainer.jsx'
import './App.scss'

export default function App() {
  return (
    <div>
       <MovieImageContainer 
        header={<Header />}
        poster={<BDscreen />}
      />
    </div>
  );
}