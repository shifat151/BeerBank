import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../SCSS/components/head"

class Header extends React.Component {
   constructor(props) {
      super(props);
   };

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
               <input className="search-bar" placeholder="Search for beeer name" type="text" />
            </form>





         </header>
      );
   }
}

export default Header;
