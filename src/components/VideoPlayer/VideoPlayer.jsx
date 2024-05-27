import { useEffect } from 'react';
import '@/components/VideoPlayer/VidePlayer.scss';

const VideoPlayer = ({ videoId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kinobox.tv/kinobox.min.js';
    script.async = true;

    script.onload = () => {
      window.kbox('.kinobox_player', {
        search: { kinopoisk: videoId }
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [videoId]);

  return (
    <div className='player-wrapper centered-flex'>
        <div className="kinobox_player" style={{ width: '50%', height: '50%' }}></div>;
    </div>
  ) 
};

export default VideoPlayer;

