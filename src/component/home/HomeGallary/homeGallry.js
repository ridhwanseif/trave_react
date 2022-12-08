import React from 'react';
import '../index.css';
import Blue1 from "./blue1.jpg";
import Blue2 from "./blue2.jpg";
import Dolphin1 from "./dolphin1.jpg";
import Dolphin2 from "./dolphin2.jpg";
import Kizimkazi1 from "./kizimkazi1.jpg";
import Data from './gallaryData';


function HomeGallary(){
    return(
        // <!-- gallary section -->
       <section className="gallary">
           <h1>Tours and Excursions we offer.</h1>
                  <p>The Zanzibar taxi offer excursions and tours for your memorable holiday of our stay in Zanzibar, we have number of Zanzibar excursions and tours to offer for the guests as follow.</p>

           <div className="container">
               <div className="row">
         
          {Data.gallary.map((item, index)=>{
                return(
                        <div className="col-lg-3 d-lg-block">
                <div className="card g-card">
                 <div className="gallary-box">
                                <div className="slider">
                                    <a href="tours.php#SBlue">
                                <figure>
                                    <div className="slide">
                                        <img src={item.img}/>
                                    </div>
                                    <div className="slide">
                                        <img src={item.img}/>
                                    </div>
                                    <div className="slide">
                                        <img src={item.img}/>
                                    </div>
                                </figure></a>
                                </div>
                                </div>
                                
                  <h4>{item.title}</h4>
                </div>
            </div>
                )
            })}
                           
               </div>
           </div>
       </section> 
    );
}

export default HomeGallary;