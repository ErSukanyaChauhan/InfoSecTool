import React from 'react'
import './Navbar.css';
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import logo from "../../assets/logo1.png";
import { Link } from 'react-router-dom';
const Navbar = ({ theme, setTheme }) => {
    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
    return (
        <>
            <div className='navbar'>
                <Link to={"/"}>
                    <div className='sub-navbar'>
                        <h1>INF</h1><img src={theme == 'light' ? logo : logo} alt="" className='logo' /><h1>SEC</h1><h5>TOOL</h5>                   </div>
                </Link>

                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                {/* <div className='search-box'>
                <input type="text" placeholder='Search' />
                <img src={search_icon_light}alt=""/>
            </div> */}
                <img onClick={() => { toggle_mode() }} src={theme == 'light' ? toggle_light : toggle_dark} alt=""
                    className='toggle-icon' />
            </div>

        </>


    )
}

export default Navbar