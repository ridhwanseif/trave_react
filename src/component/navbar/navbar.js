
import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from "./logo.png";
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ContactsIcon from '@mui/icons-material/Contacts';
// import './navbar.css';
// import Modal from './logIn/logIn';
// import LogIn from './logIn/logIn';

// import {Link} from 'react-router-dom';
import MenuIcon from './menu';
import MoveNav from './moveNav';

function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div class="banner">
      <div class="navbar top-0">
        {/* {openModal && <Modal closeModal={setOpenModal} />} */}

        
          <h4>
            <span className='logo'><img src={Logo} class="logo" alt="logoError" /></span>
             The Zanzibar Taxi.
          </h4>
        

        <ul>
          <Link to='/home'><li><HomeIcon/>Home</li></Link>
          <Link to='/destination'><li><GpsFixedIcon/>Destination</li></Link>
          <Link to='/tours'><li><TheaterComedyIcon/>Excursion & Tours</li></Link>
          <Link to='/booking'><li><BookmarkAddIcon/>Booking</li></Link>
          <Link to='/contact'><li><ContactsIcon/>Contact-Us</li></Link>
          <li>
            {/* <LogIn/> */}
          </li>
        </ul>
          <div className='menuIcon'>
            {/* <MoveNav/> */}
            <MenuIcon/>
            </div>
      </div>
    </div>
  );
}

export default Navbar;