import React, { Component } from 'react';
import "./Banner.css"
import { Button } from "@material-ui/core";
class Banner extends Component {
    render() {
        return(
           <div className = "banner">
               <div className = "banner-btn">
               <Button variant='outlined'>Shop Now</Button>
           </div>
           </div>
        ); 

    }
}

export default Banner;