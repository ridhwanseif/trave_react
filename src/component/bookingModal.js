import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button class="btn btn-primary my-1" variant="outlined" onClick={handleClickOpen}>
        Book Now
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><h2>Book with us</h2></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div class="card-header px-6 py-sm-3 py-0">
                 <p class="lead"> Fill up the form and our Team will get back to you within 24 hours.</p>
            </div>
          </DialogContentText>
          <div class="col-lg-12 haf-booking">  
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
                    
                   
                  </div>
                </form>
                
              </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
