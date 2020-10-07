import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="Me at the zoo"
                    views="112M Views"
                    timestamp="15 years ago"
                    channelImage=""
                    channel="jawed"
                    image="https://i.ytimg.com/an_webp/jNQXAC9IVRw/mqdefault_6s.webp?du=3000&sqp=CKCsovsF&rs=AOn4CLDN9AkpS38z7dD6bJe6Ea4YYbps4Q"
                />
                <VideoCard
                    title="Steven Spielberg vs Alfred Hitchcock. Epic Rap Battles of History"
                    views="67M Views"
                    timestamp="5 years ago"
                    channelImage=""
                    channel="ERB"
                    image="https://i.ytimg.com/an_webp/_wYtG7aQTHA/mqdefault_6s.webp?du=3000&sqp=CLDFovsF&rs=AOn4CLBa2t4pW_WV57OqNYGTTc8r9TnNIw"
                /><VideoCard
                    title="Pickup Basketball Stereotypes"
                    views="109M Views"
                    timestamp="7 years ago"
                    channelImage=""
                    channel="Dude Perfect"
                    image="https://i.ytimg.com/an_webp/0gWxHFMog9w/mqdefault_6s.webp?du=3000&sqp=CPihovsF&rs=AOn4CLDSf23cRLP2mqyOszpsP7bOXLo6yA"
                /><VideoCard
                    title="Largest collection of Funko Pops - Guinness World Records"
                    views="85K Views"
                    timestamp="3 days ago"
                    channelImage=""
                    channel="Guinness World Record"
                    image="https://i.ytimg.com/an_webp/cthw5NTseG4/mqdefault_6s.webp?du=3000&sqp=CPzFovsF&rs=AOn4CLBrqxrTH0v2qmr1BS1Qb8-FGc0j4w"
                /><VideoCard
                    title="React in 100 Seconds"
                    views="112K Views"
                    timestamp="1 week ago"
                    channelImage=""
                    channel="Fireship"
                    image="https://i.ytimg.com/an_webp/Tn6-PIqc4UM/mqdefault_6s.webp?du=3000&sqp=CLrGovsF&rs=AOn4CLAylefdMnqfrr1yalcInPOJTBIouA"
                /><VideoCard
                    title="Me at the zoo"
                    views="112M Views"
                    timestamp="15 years ago"
                    channelImage=""
                    channel="jawed"
                    image="https://i.ytimg.com/an_webp/jNQXAC9IVRw/mqdefault_6s.webp?du=3000&sqp=CKCsovsF&rs=AOn4CLDN9AkpS38z7dD6bJe6Ea4YYbps4Q"
                />
                <VideoCard
                    title="Steven Spielberg vs Alfred Hitchcock. Epic Rap Battles of History"
                    views="67M Views"
                    timestamp="5 years ago"
                    channelImage=""
                    channel="ERB"
                    image="https://i.ytimg.com/an_webp/_wYtG7aQTHA/mqdefault_6s.webp?du=3000&sqp=CLDFovsF&rs=AOn4CLBa2t4pW_WV57OqNYGTTc8r9TnNIw"
                /><VideoCard
                    title="Pickup Basketball Stereotypes"
                    views="109M Views"
                    timestamp="7 years ago"
                    channelImage=""
                    channel="Dude Perfect"
                    image="https://i.ytimg.com/an_webp/0gWxHFMog9w/mqdefault_6s.webp?du=3000&sqp=CPihovsF&rs=AOn4CLDSf23cRLP2mqyOszpsP7bOXLo6yA"
                /><VideoCard
                    title="Largest collection of Funko Pops - Guinness World Records"
                    views="85K Views"
                    timestamp="3 days ago"
                    channelImage=""
                    channel="Guinness World Record"
                    image="https://i.ytimg.com/an_webp/cthw5NTseG4/mqdefault_6s.webp?du=3000&sqp=CPzFovsF&rs=AOn4CLBrqxrTH0v2qmr1BS1Qb8-FGc0j4w"
                /><VideoCard
                    title="React in 100 Seconds"
                    views="112K Views"
                    timestamp="1 week ago"
                    channelImage=""
                    channel="Fireship"
                    image="https://i.ytimg.com/an_webp/Tn6-PIqc4UM/mqdefault_6s.webp?du=3000&sqp=CLrGovsF&rs=AOn4CLAylefdMnqfrr1yalcInPOJTBIouA"
                />
            </div>
        </div>
    )
}

export default RecommendedVideos