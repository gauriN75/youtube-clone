import React, { useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
    <div className="header__left">
          <i className="fas fa-bars header__bar"></i>

          <Link to="/">
               <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="youtube logo" />
          </Link>     
    </div>
       

    <div className="header__input">
         <input onChange={e => setInputSearch(e.target.value)} type="text" value={inputSearch}  placeholder='Search' />

         <Link to={`/search/${inputSearch}`}>
              <i className="fas fa-search header__inputButton"></i>
         </Link>
    </div>   
     

    <div className="header__icons">
         <i className="fas fa-video header__icon"></i>
         <i className="fas fa-th header__icon"></i>
         <i className="fas fa-bell header__icon"></i>
         <i className="fas fa-user-circle header__icon" src="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"></i>
    </div> 

    </div>
  )
}

export default Header