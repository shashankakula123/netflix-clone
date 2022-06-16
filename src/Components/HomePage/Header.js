import React, { Component } from 'react';
import Button from '@mui/material/Button';
import './Header.css';
class Header extends Component {
      render() {
            return (
                  <div className='header'>
              <div className='header-nav'>

              <Button className='netflix-logo' variant='text' > Netflix</Button>
              <Button className='signIn' variant='text'>SignIn</Button>
              
                  </div>
                  </div>
            );
      }
}

export default Header;