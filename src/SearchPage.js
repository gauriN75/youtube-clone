import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'

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

            <VideoRow/>
    </div>
  )
}

export default SearchPage