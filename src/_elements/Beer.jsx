import React from 'react';
import PropTypes from "prop-types";
import "../SCSS/components/beer";
import { Link } from 'react-router-dom';

// class Beer extends React.Component {
//    constructor(props) {
//       super(props);
//    };

//    render() {
//       const beer = this.props.details;

//       return (
//          <div className="beer">
//             {beer &&
//             <div>
//                <img className="beer__image" src={beer.image_url} alt={beer.name} title={beer.name} />
//                <h3 className="beer__name">{beer.name}</h3>
//                <p className="beer__tagline">{beer.tagline}</p>
//             </div>
//             }
//          </div>
//       );
//    }
// }


const Beer = ({ details }) => (
   <div className="beers">
      {
         details.map(beer => {
            return (
               <div className="beers__beer" key={beer.id}>
                  <Link to={"/" + beer.id}>
                     <img className="beers__image" src={beer.image_url} alt={beer.name} title={beer.name} />
                  </Link>
                  <h3 className="beers__name">{beer.name}</h3>
                  <p className="beers__tagline">{beer.tagline}</p>

               </div>

            );
         })
      }
   </div>


);

Beer.propTypes = {
   details: PropTypes.array.isRequired
};
export default Beer;
