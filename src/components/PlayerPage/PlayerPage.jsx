import '@/components/PlayerPage/PlayerPage.scss';
import { useParams } from 'react-router-dom';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer.jsx'

export default function PlayerPage() {

    const { slug } = useParams();

    return (
        <div>
            <VideoPlayer videoId={slug}/>
            { slug }
        </div>
    );
}