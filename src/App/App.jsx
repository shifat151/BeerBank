import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import BeerDetails from '../_elements/BeerDetails'
import advancedSearch from '../_elements/advancedSearch'



import { history } from '../_factory';
import { Home } from './Home';
import { Favourite } from './Favourite';

class App extends React.Component {
   constructor(props) {
      super(props);
      document.title = 'React Redux REST API Boilerplate';
   }

   render() {
      return (
         <div>
            <Router history={history}>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/beer/:id" component={BeerDetails} />
                  <Route exact path="/favourite" component={Favourite} />
                  <Route exact path="/advance-search" component={advancedSearch} />
                  <Route component={Home} />
               </Switch>
            </Router>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      state
   };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
