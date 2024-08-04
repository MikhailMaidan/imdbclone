import './App.scss'
import Header from '@/components/Header/Header.jsx'
import { Routes, Route } from 'react-router-dom';
import PlayerPage from '@/components/PlayerPage/PlayerPage.jsx';
import Home from '@/components/Home/Home.jsx';
import MoviePage from '@/pages/MoviePage/MoviePage.jsx';

export default function App() {
  return (
    <div> 
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/player/:slug" element={<PlayerPage />} />
        <Route exact path="/movies" element={<MoviePage />} />
      </Routes>
    </div>
  );
}
