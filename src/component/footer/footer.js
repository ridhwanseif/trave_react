import React from 'react';
import './footer.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import {Link} from 'react-router-dom';
import Logo from "./logo1.png";
function Footer() {
  return (

    <section className="footer">
          
          <div className="row">
              
          <div className="col-md-4"> 
               <div className="section">
                    <span className='logo'><img src={Logo} class="logo" alt="logoError"/></span>
                    <p>welcame to the Zanzibar taxi and tours, we are here to complete the needs of your taxi transfer services from airport to hotel and from hotel to hotel across the Zanzibar.</p>
               </div>           
                  </div> 

          <div className="col-md-4"> 
                <div className="section-link">
                     <h5>Quick contact</h5>
                          <p><EmailIcon/><a href='mailto:waririzi65@gmail.com' target="_blank"> warirzi65@gmail.com </a></p>
                          <p><HomeIcon/> Zanzibar Stone Town</p>
                          <p><PhoneInTalkIcon/> +255778489968</p>

               </div>           
                  </div>

          <div className="col-md-4">   
                <div className="section-follow">
                     <h5>Follow Us On</h5>
                     <div className="soial-link">
                          <ul>
                          <li><a href="https://m.me/" target="_blank"><FacebookRoundedIcon/> FaceBook</a></li>
                          <li><a href="https://api.whatsapp.com/send?phone+255778489968" target="_blank"><WhatsAppIcon/> WhatsApp</a></li>
                          <li><a href="#"><InstagramIcon/> Instagram</a></li>
                          </ul>
                     </div>
               </div>         
                  </div>
          </div>
          <hr/>
           <div className="foot-copy">
                <h6>&copy;TheZanzibarTaxi.com | designed by Mr_Password:waririzi65@gmail.com</h6>               
           </div>
     </section>    
  );
}

export default Footer;