import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
  return (
    <div className='searchPage'>
            <div className="searchPage__filter">
                   <i class="fas fa-filter"></i>
                   <h2>FILTER</h2>    
            </div>
            <hr />

            <ChannelRow
                  image="https://yt3.googleusercontent.com/ytc/AL5GRJX7LBvNaQFl0ODpVbrt2F4ajG_wY0fKpZGsEqi8Jw=s176-c-k-c0x00ffffff-no-rj"
                  channel="CodeWithHarry"
                  verified
                  subs="yes"
                  noOfVideos={345}
                  description="You can find awesome programming videos here"
            />

            <hr />

            <VideoRow
              title="Python Tutorial For Beginners In Hindi (With Notes) 🔥"
              views="19,916,459 views"
              subs="456K"
              description="Programming videos"
              timestamp="sep24, 2020"
              channel="CodeWithHarry"
              image="https://i.ytimg.com/vi/gfDE2a7MKjA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtJ2JwWHPIxoLaONsyI-041XMjCA"
            />

            <VideoRow
              title="Python Tutorial For Beginners In Hindi (With Notes) 🔥"
              views="19,916,459 views"
              subs="456K"
              description="Programming videos"
              timestamp="sep24, 2020"
              channel="CodeWithHarry"
              image="https://i.ytimg.com/vi/gfDE2a7MKjA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtJ2JwWHPIxoLaONsyI-041XMjCA"
            />

            <VideoRow
              title="Python Tutorial For Beginners In Hindi (With Notes) 🔥"
              views="19,916,459 views"
              subs="456K"
              description="Programming videos"
              timestamp="sep24, 2020"
              channel="CodeWithHarry"
              image="https://i.ytimg.com/vi/gfDE2a7MKjA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtJ2JwWHPIxoLaONsyI-041XMjCA"
            />
    </div>
  )
}

export default SearchPage