import React, { useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../SCSS/components/head";
import { beerActions, beerService } from './../_factory';
import { connect } from 'react-redux';

class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         search: '',
      };
      this.updateSearch = this.updateSearch.bind(this);
      this.fetchSearchResult = this.fetchSearchResult.bind(this);
   };

   fetchSearchResult() {
      const { dispatch } = this.props;
      //sending the beers got from beerservice to beeractions and the beeractions will update central store

      if (this.state.search != '') {
         beerService.searchBeers(this.state.search)
            .then(beers => {
               dispatch(beerActions.getBeers(beers));
            });

      }
      else {
         beerService.getBeers()
            .then(beers => {
               dispatch(beerActions.getBeers(beers));
            });
      }


   }

   updateSearch(e) {
      this.setState({
         search: e.target.value
      }, () => {
         this.fetchSearchResult();
      });
   }

   render() {

      const activeStyle = { color: "white" };
      return (
         <header className="head">
            <h1><span>B</span>B</h1>
            <div className="headlink">

               <NavLink exact={true} activeStyle={activeStyle} to="/">HOME</NavLink>
               <NavLink exact={true} activeStyle={activeStyle} to="/favourite">FAVOURITE</NavLink>

            </div>

            <div className="headline">
               <h1>The Beer Bank</h1>
               <h3>YOUR FAVOURITE BEER PROVIDER</h3>
            </div>

            <form className="search-form">
               <input className="search-bar" type="text" value={this.search} onChange={this.updateSearch} />
            </form>





         </header>
      );
   }
}

function mapStateToProps(state) {
   const { beers } = state;
   // console.log(beers)
   return {
      beers
   };
}

export default connect(mapStateToProps)(Header);
