import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='sidebar'>
          <SidebarRow Icon={<i className="fas fa-home"></i>} title="Home"/>
          <SidebarRow Icon={<i className="fas fa-fire"></i>} title="Trending"/> 
          <SidebarRow Icon={<i className="far fa-bell"></i>} title="Subscription"/>

    </div>
  )
}

export default Sidebar