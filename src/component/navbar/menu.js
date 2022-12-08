import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ContactsIcon from '@mui/icons-material/Contacts';
import './navbar.css'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0.5, p: 1 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <a href='#!' variant="outlined" onClick={handleClickOpen}>
        <MenuIcon/>
      </a>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Menu
        </BootstrapDialogTitle>
        
          <DialogContent dividers>
          <DialogActions>
            <div className='menu'>
                  <ul>
          <Link to='/home' onClick={handleClose}><li><HomeIcon/>Home</li></Link>
          <Link to='/destination' onClick={handleClose}><li><GpsFixedIcon/>Destination</li></Link>
          <Link to='/tours' onClick={handleClose}><li><TheaterComedyIcon/>Excursion & Tours</li></Link>
          <Link to='/booking' onClick={handleClose}><li><BookmarkAddIcon/>Booking</li></Link>
          <Link to='/contact' onClick={handleClose}><li><ContactsIcon/>Contact-Us</li></Link>
          </ul>
            </div>
        </DialogActions>
        </DialogContent>
        
      </BootstrapDialog>
    </div>
  );
}