import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
import './navBar.css'
import Logo from '../../images/logo.png'
import {links} from '../../data'
import {GoThreeBars} from 'react-icons/go'
import {MdClose} from 'react-icons/md'
const NavBar = () => {
  const [isNavShowing,setIsNavShowing]= useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='logo' onClick={()=> setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {
            links.map(({name,path},index)=>{
              return(
                <li key={index}>
                  <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : ''} onClick={()=> setIsNavShowing(prev =>!prev)}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className="nav__toggle-btn" onClick={()=> setIsNavShowing(prev =>!prev)}>
          {
            isNavShowing?<MdClose/>:<GoThreeBars/>
          }
        </button>
      </div>
    </nav>
  )
}

export default NavBar