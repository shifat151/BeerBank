import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import { Beer, Header } from './../_elements';
import { beerActions, beerService } from './../_factory';


class Home extends React.Component {
   constructor(props) {
      super(props);

      document.title = 'Home | React Redux REST API Boilerplate';

      //declared our state
      //state is for storing data in our component
      this.state = {
         beers: [],
      }
   };

   //call the service for updating central store
   componentWillMount() {
      const { dispatch } = this.props;
      //sending the beers got from beerservice to beeractions and the beeractions will update central store
      beerService.getBeers()
         .then(beers => {
            dispatch(beerActions.getBeers(beers));
         });
   }

   //recieve data from central store and set the data to component state
   componentWillReceiveProps(newProps) {
      this.setState({ ['beers']: newProps.beers });
   }

   render() {
      const { beers } = this.state;
      // console.log(beers.map(beer => {
      //    console.log(beer)
      // }))
      return (

         <div className="page">
            <Header />
            <Beer details={beers} />
         </div>
      );
   }
}

//give access to the central store data to props
function mapStateToProps(state) {
   const { beers } = state;
   // console.log(beers)
   return {
      beers
   };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
