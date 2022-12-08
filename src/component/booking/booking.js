import * as React from 'react';
import './booking.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// import Timer from './timer';



function Booking() {
  return (
      <div>
  <section class="py-lg-5 my-7">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card box-shadow-xl overflow-hidden mb-5">
            <div class="row">
              <div class="col-lg-5 booking-card position-relative bg-cover px-0">
                <div class="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center">
                  <div class="mask bg-gradient-dark opacity-8"></div>
                  <div class="p-5 ps-sm-8 position-relative text-start my-auto z-index-2">
                    <h3 class="text-white">Contact Information</h3>
                    <p class="text-white opacity-8 mb-4">Fill up the form and our Team will get back to you within 24 hours.</p>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-phone text-sm"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8">(+40) 772 100 200</span>
                      </div>
                    </div>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-envelope text-sm"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8">hello@creative-tim.com</span>
                      </div>
                    </div>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-map-marker-alt text-sm"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8">Dyonisie Wolf Bucharest, RO 010458</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Facebook">
                        <i class="fab fa-facebook"></i>
                      </button>
                      <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Twitter">
                        <i class="fab fa-twitter"></i>
                      </button>
                      <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Dribbble">
                        <i class="fab fa-dribbble"></i>
                      </button>
                      <button type="button" class="btn btn-icon-only btn-link text-white btn-lg mb-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Log in with Instagram">
                        <i class="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-7 haf-booking">  
                <form class="p-2" id="contact-form" method="post">
                  <div class="card-header px-6 py-sm-3 py-0">
                    <h2>Book with us</h2>
                    <p class="lead"> We'd like to book with you.</p>
                  </div>

                  <div class="card-body pt-1">
                    <div class="row">
                      
                      <div class="col-md-12 pe-2 mb-3">
                        <div class="input-group input-group-static mb-4">
                          <div className='col-md-5 a'>
                              <TextField
                            autoFocus
                            margin="dense"
                            id="fname"
                            label="First Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            acteve
                            required
                            />
                          </div>
                           <div className='col-md-6'>
                              <TextField
                            margin="dense"
                            id="Lname"
                            label="Last Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            required
                            />
                          </div>
                          
                     
                          
                        </div>
                      </div>

                      <div class="col-md-12 pe-2 mb-3">
                        <div class="input-group input-group-static mb-4">
                          <TextField
                                margin="dense"
                                id="Email"
                                label="Enter Email"
                                type="text"
                                fullWidth
                                variant="standard"
                                required
                                />
                        </div>
                      </div>

                      <div class="col-md-12 pe-2 mb-3">
                        <div class="input-group input-group-static mb-4">
                           <div className='col-md-5 a'>
                              <TextField
                                margin="dense"
                                id="pickup"
                                label="Pickup Location"
                                type="text"
                                fullWidth
                                variant="standard"
                                required
                                />
                          </div>
                          
                           <div className='col-md-6'>
                               <TextField
                            
                                margin="dense"
                                id="drop"
                                label="Drop Off Location"
                                type="text"
                                fullWidth
                                variant="standard"
                                required
                                />
                          </div>
                          
                        </div>
                      </div>

                      <div class="col-md-12 pe-2 mb-3">
                        <div class="input-group input-group-static mb-4">
                          <label>Your message</label>
                          <textarea name="message" class="form-control" id="message" rows="3" placeholder="I want to say that... " required></textarea>
                        </div>
                      </div>

                    </div>
                    
                    <div class="row">
                      <div class="col-md-6 text-end ms-auto">
                        <button type="submit" class="btn bg-gradient-info mb-0">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
                
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</div>
   
  );
}





export default Booking;
