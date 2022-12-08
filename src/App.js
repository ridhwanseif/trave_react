import React from 'react';
import Nav from './component/navbar/navbar';
import Home from './component/home/home';
import Tours from './component/tours/tours';
import Booking from './component/booking/booking';
import Destination from './component/destination/destination';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import PageNotFound from './component/pageNotFound';
import Social from './component/social';


function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/destination" component={Destination} />
      <Route path="/tours" component={Tours} />
      <Route path="/booking" component={Booking} />
      <Route path="/contact" component={Contact} />
      <Route component={PageNotFound}/>
      </Switch>
            <Social/>
           
      <Footer />
   </div>
   </Router>
  );
}

export default App;
