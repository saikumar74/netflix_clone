import {useState} from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const[expanded,setExpanded]=useState(false)
  const[isscrolled,setIsscrolled]=useState(false)
  const handleToggle=()=>{
    setExpanded(!expanded)
  }


//event for scroll behaviour
  window.onscroll=()=>{
    setIsscrolled(window.pageYOffset === 0 ? false : true)
    return ()=>(window.onscroll=null)
  }


  return (
    <>


<nav className={`navbar navbar-expand-sm fixed-top ${isscrolled ? 'bg-black':'bg-transparent'}`}>
  <div className="container">
      <a className="navbar-brand" href="#">
        <img src='/src/assets/NLogo.png' alt="Bootstrap" width="150vh" height="60vh"/>
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggle}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className= {`collapse navbar-collapse ${!!expanded && 'show'}`} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className='nav-link' to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to="/Tvshows">TV shows</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
        <NavLink className='nav-link' to="/Movies">Movies</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to="/Popular">New & popular</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to="/Mylist">MyList</NavLink>
        </li>
        <li className="nav-item">
        <a className='nav-link'>Browse by languages</a>
        </li>
      </ul>
      <ul className='navbar-nav ms-auto mb-2 mb-lg-0 '>
        <li className="nav-item">
            <i className="bi bi-search fs-3 mx-3"></i>          
        </li>
        <li className="nav-item">
            <i className="bi bi-bell fs-3 mx-3"></i>
        </li>
        <li className="nav-item">
            <i class="bi bi-person-circle fs-3 mx-3"></i>
        </li>
      </ul>
      
    </div>
    
  </div>
</nav>
  
   </> 
  )
}

export default Navbar
