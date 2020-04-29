import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import { Beer, Header } from './../_elements';
import { beerActions, beerService } from './../_factory';

class Favourite extends React.Component {
   constructor(props) {
      super(props);

      document.title = 'Home | React Redux REST API Boilerplate';

      //declared out state
      //state is for store data in our component
      this.state = {
         beers: []
      }
   };

   componentWillMount() {
      const { dispatch } = this.props;

      beerService.getBeers()
         .then(beers => {
            dispatch(beerActions.getBeers(beers));
         });
   }


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
            <h1>Home</h1>
            <Beer details={beers} />
         </div>
      );
   }
}

function mapStateToProps(state) {
   const { beers } = state;
   return {
      beers
   };
}

const connectedFavourite = connect(mapStateToProps)(Favourite);
export { connectedFavourite as Favourite };
