import React, { Component } from 'react';
import "./Home.css"
import { Button } from "@material-ui/core";
class Home extends Component {

    render(){
        return(
            <div className = "home__section">
                <center>
                <h2>Only the Highest Quality Ingredients</h2>
                <p>In fact, We grow most of the ourselves on our 70-acre farm!</p>
                </center>
                <div className="home__banner">
                    <div className="row col-12">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                <img
                    className="home__img"
                    src="https://www.thespruceeats.com/thmb/_pkTfwEHtJl3oLcPjJP7lu1CoJs=/1419x1419/smart/filters:no_upscale()/GettyImages-93605288-582b45af5f9b58d5b1344dfd.jpg"
                    alt=""
                />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                <img
                    className="home__img"
                    src="https://www.thespruceeats.com/thmb/_pkTfwEHtJl3oLcPjJP7lu1CoJs=/1419x1419/smart/filters:no_upscale()/GettyImages-93605288-582b45af5f9b58d5b1344dfd.jpg"
                    alt=""
                />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                <img
                    className="home__img"
                    src="https://www.thespruceeats.com/thmb/_pkTfwEHtJl3oLcPjJP7lu1CoJs=/1419x1419/smart/filters:no_upscale()/GettyImages-93605288-582b45af5f9b58d5b1344dfd.jpg"
                    alt=""
                />
                </div>
                </div>
                <div className="home__btn col-12">
                <Button variant='outlined'>Shop Now</Button>
           </div>
           </div>
            </div>
        );
    }
}

export default Home;