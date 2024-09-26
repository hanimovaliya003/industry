import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link} from 'react-scroll';


const Navbar = () => {
  
    const [ sticky , setSticky] = useState(false);

    useEffect(() =>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },[]);


  return (
    <nav className={`container-fluid ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={50}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={0}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={0}>About Us</Link></li>
            <li><Link to='campous' smooth={true} offset={-260} duration={0}>Campous</Link></li>
            <li><Link to='review' smooth={true} offset={-260} duration={0}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={0} className='btn'>Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar