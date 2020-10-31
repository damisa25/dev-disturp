import React, {  } from 'react';
import {BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Home from './pages/home';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AllScholar from './pages/allScholar';
import TrackStatus from './pages/trackStatus';
import OfferScholar from './pages/offerScholar';
import CreateOffer from './pages/offerScholar/createOffer';
import ScholarshipDetail from './pages/scholarshipDetail';

library.add(faUser);

const App = () => {

  return (
    <>
      <Router> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sholarships/:id" component={ScholarshipDetail} />
          <Route exact path="/student/allScholar" component={AllScholar} />
          <Route exact path="/student/trackStatus" component={TrackStatus} />
          <Route exact path="/funder/offerScholar" component={OfferScholar} />
          <Route exact path="/funder/offerScholar/create" component={CreateOffer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
