import React from 'react';
import PropTypes from "prop-types";

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
   <div>
      {
         details.map(beer => {
            return (

               <div key={beer.id}>
                  <img className="beer__image" src={beer.image_url} alt={beer.name} title={beer.name} />
                  <h3 className="beer__name">{beer.name}</h3>
                  <p className="beer__tagline">{beer.tagline}</p>
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
