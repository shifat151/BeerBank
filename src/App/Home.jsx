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
      //state is for store data in our component
      this.state = {
         beers: []
      }
   };
   //Fetch data when components the page will mount
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

            <Beer details={beers} />
         </div>
      );
   }
}

//give access states  to props
function mapStateToProps(state) {
   const { beers } = state;
   return {
      beers
   };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
