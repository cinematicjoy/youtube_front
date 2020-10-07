import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTRAR</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/a/AATXAJzej3xmWMFrIwhyU5FNcwiwcn5ful6HozjomQ=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="jawed" 
                verified
                subs="1.12M"
                noOfVideos={1}
                description="A technical talk about YouTube: From Concept to Hypergrowth."
            />

            <hr />

            <VideoRow 
                views="112M Views"
                subs="1.12M"
                description="The first video on YouTube. Maybe it's time to go back to the zoo?"
                timestamp="15 years ago"
                channel="jawed"
                title="Me at the zoo"
                image="https://i.ytimg.com/an_webp/jNQXAC9IVRw/mqdefault_6s.webp?du=3000&sqp=CKCsovsF&rs=AOn4CLDN9AkpS38z7dD6bJe6Ea4YYbps4Q"
            />
        </div>
    )
}

export default SearchPage