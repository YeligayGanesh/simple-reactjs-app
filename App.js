import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Banner from "./Banner"
import Home from "./Home";
import Footer from "./Footer"
// import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (
      <div className="app">
      <React.Fragment>
      <Header />
        <Banner />
       <Home />
      <Footer />
        {/* <Switch>
        <Route path="/">
            <Banner />
          </Route>
        </Switch> */}
        {/* <Footer /> */}
        </React.Fragment>
    </div>
    //   <Router basename={process.env.PUBLIC_URL}>
    //     <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Simple React App</h1>
    //     </header>
    //       <Switch>
    //             <Route exact path= "/" render={() => (
    //               <Redirect to="/customerlist"/>
    //             )}/>
    //              <Route exact path='/customerlist' component={Customers} />
    //       </Switch>
    //   </div>
     
    // </Router>
  //   <Router>
  //     <Switch>
  //     <Header />
  //   <Banner />
  //     </Switch>
  
    
  // </ Router>
    );
  }
}

export default App;
