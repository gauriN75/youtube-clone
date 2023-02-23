import React from 'react'
import './SidebarRow.css'

function SidebarRow({selected, Icon, title}) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <div className="sidebarRow__icon">
        {Icon}
      </div>
      <h5 className='sidebarRow__title'>{title}</h5>
    </div>
  )
}

export default SidebarRow