import React from "react";
import './navbar.css';

import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ContactsIcon from '@mui/icons-material/Contacts';

import {HiOutlineHome} from 'react-icons/hi';
import {FcAbout} from 'react-icons/fc';
import {MdContactMail} from 'react-icons/md';
import {SiVapor} from 'react-icons/si';


const MoveNav = () =>{
    return (
        <nav>
             
          <Link to='/home'><HomeIcon/></Link>
          <Link to='/destination'><GpsFixedIcon/></Link>
          <Link to='/tours'><TheaterComedyIcon/></Link>
          <Link to='/booking'><BookmarkAddIcon/></Link>
          <Link to='/contact'><ContactsIcon/></Link>
          
        </nav>
    )
}
export default MoveNav;