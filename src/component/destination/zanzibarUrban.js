import React from "react";
import './material-kit.css';
import BookingModal from '../bookingModal';
import Data from './destionationData';

const Destination = () => 
  <div className="b">
    <section class="my">
  <div class="container">
    
     {Data.zanzibarUrban.map((item, index)=>{
        return(
          <>
            <div class="row" id="urban">
              <div class="col-md-6 col-12 my-auto">
                <a href="">
                  <img class="w-100 border-radius-lg h-50 shadow-lg" src={item.img} alt="imageError"/>
                </a>
              </div>
              <div class="col-md-6">
                <h4>{item.title}</h4>
                  <p class="pe-md-5">
                    {item.note}</p>
                <div class="github-buttons">
                <BookingModal/>
                </div>
              </div>
              
            </div>
             <hr/>
              <br/>
          </>
        )
    })}

</div>
</section>

  </div>
export default Destination;