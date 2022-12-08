import React from 'react';
import '../index.css';

function HomeHeader(){
    return(
        // <!-- this is header section -->
        <section className="header">
           <div className="cotainer">
            <div className="animete">
          {/* <div className="load">
        <h1>The Zanzibar Taxi.</h1>
       <h2>We guarantee you taxi transfer service across zanzibar.</h2>
       <p>Any Time Any Where.</p>
       <div className="input-group"> 
           <input type="text" className="form-control" placeholder="search your trip"/>
       </div>
       <div className="input-group-append">
           <button type="submit" className="button">search</button>
       </div>
       <p>welcame to the Zanzibar taxi and tours, we are here to complete the needs of your taxi transfer services from airport to hotel and from hotel to hotel across the Zanzibar. </p>
           </div> */}
                  <div class='row'>
             <div class='col-md-5'>
                 <div className='col-doctor'>
                    <div className='doctor'>
                     <div className='img-doctor'>
                         {/* <img src={Doctor} alt="doctor"/> */}
                     </div>
                    </div>
                 </div>
            </div>
            <div class='col-md-7'>
                <div class="content">
                    <h1><span>stay</span> safe, <span>stay</span>  healthy.</h1>
                    <h2>Find The Niearest Hospital .</h2>
                    <h3>caring for your life.</h3>
                   
                    {/* <Modal/> */}
                </div>
            </div>
      
           </div>
           </div>
           </div>
       </section>
    );
}
export default HomeHeader;
