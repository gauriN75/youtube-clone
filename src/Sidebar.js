import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='sidebar'>
          <SidebarRow selected Icon={<i className="fas fa-home"></i>} title="Home"/>
          <SidebarRow Icon={<i className="fas fa-fire"></i>} title="Trending"/> 
          <SidebarRow Icon={<i className="fas fa-bell"></i>} title="Subscription"/>

          <hr />

          <Sidebar Icon={<i className="fas fa-books-medical"></i>} title="Library"/>
          <Sidebar Icon={<i className="fas fa-history"></i>} title="History"/>
          <Sidebar Icon={<i className="far fa-camcorder"></i>} title="Your videos"/>
          <Sidebar Icon={<i className="fas fa-clock"></i>} title="Watch Later"/>
          <Sidebar Icon={<i className="fas fa-thumbs-up"></i>} title="Liked videos"/>
          <Sidebar Icon={<i className="fad fa-caret-down"></i>} title="Show more"/>

          <hr/>

    </div>
  )
}

export default Sidebar