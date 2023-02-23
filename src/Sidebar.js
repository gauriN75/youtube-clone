import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='sidebar'>
          <SidebarRow selected Icon={<i className="fas fa-home"></i>} title="Home"/>
          <SidebarRow Icon={<i className="fas fa-fire"></i>} title="Trending"/> 
          <SidebarRow Icon={<i className="fas fa-bell"></i>} title="Subscription"/>

          <hr/>

          <SidebarRow Icon={<i className="fas fa-photo-video"></i>} title="Library"/>
          <SidebarRow Icon={<i className="fas fa-history"></i>} title="History"/>
          <SidebarRow Icon={<i className="fas fa-camera"></i>} title="Your videos"/>
          <SidebarRow Icon={<i className="fas fa-clock"></i>} title="Watch Later"/>
          <SidebarRow Icon={<i className="fas fa-thumbs-up"></i>} title="Liked videos"/>
          <SidebarRow Icon={<i className="fas fa-caret-down"></i>} title="Show more"/>

          <hr/>

    </div>
  )
}

export default Sidebar