import React from 'react';
import './tours.css';
import Tab from './tourTab';
import SafariBlue from './safari-blue';
// import './js/scripts.js';


function Tours() {
  return (
   <div className='toursPage'>

<header className="bg-gradient-dark w-100">
    <div className="page-header min-vh-65">
      <span className="mask bg-gradient-dark opacity-6"></span>
      <div className="container">
        <div className="row justify-content-center my-3">
          <div className="col-lg-8 text-center mx-auto my-auto">
            <h1 className="text-white">Tours and Excursions we offer.</h1>
              <p className="lead mb-0 text-white opacity-8">welcame to the Zanzibar taxi and tours, we are here to complete the needs of your taxi transfer services from airport to hotel and from hotel to hotel across the Zanzibar.</p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div className="card card-body shadow-xl mx-2 mx-md-5 mt-n0">

    <section className="py-1">
      
    <div container>
      

        <div class="row">
            <div class="col-md-12 tour-tabs">
                <Tab/>
            </div>
        </div>
    </div>

    </section>

  </div>
       
   </div>
  );
}

export default Tours;
