import React from 'react'
import './ChannelRow.css'

function ChannelRow({image,
      channel,
      subs,
      noOfVideos,
      description,
      verified}) {
            
  return (
    <div className='channelRow'>
            <div className="channelRow__logo">
                  <i className="fas fa-user-circle"></i>            
            </div>

            <div className="channelRow__text">
                  <h4>
                        {channel} 
                        {verified && <i className="fas fa-badge-check"></i>}
                  </h4>
                  
                  <p>
                        {subs} subscribers * {noOfVideos} videos
                  </p>

                  <p>
                        {description}
                  </p>
            </div>
            
    </div>
  )
}

export default ChannelRow