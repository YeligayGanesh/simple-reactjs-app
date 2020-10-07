import React, { Component } from 'react';
import './Header.css'
import { Button } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
class Header extends Component {
render(){
    return(
        <div className="header">
        <div className="header__left">
            <nav>
            <ul>
  <li><a href="#home">Shop</a></li>
  <li><a href="#news">Our Story</a></li>
  <li><a href="#contact">Blog</a></li>

</ul>
               
            </nav>
        </div>
        <div className="header__center">
            <h2>Hester</h2>
        </div>
        <div className="header__right">
            {/* <InstagramIcon /> */}
            <ShoppingCartIcon />
            <Button variant='outlined'>Log in</Button>
          
        </div>
        </div>
        
    );
}
}

export default Header