import React from 'react';
import "../SCSS/components/beer";
import BeerDetails from "./BeerDetails"

class Beer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showPopup: false,
         showId: ''
      };
      this.handleClick = this.handleClick.bind(this);
   };

   handleClick(id) {
      // console.log(id)
      this.setState({
         showPopup: !this.state.showPopup,
         showId: id
      });
   }

   render() {
      const beers = this.props.details;
      if (Object.keys(beers).length > 1) {
         console.log(beers);

         return (
            <div className="beers">

               {

                  beers.map(beer => (
                     <div className="beers__beer" key={beer.id} style={{ cursor: 'pointer' }} id={beer.id} >
                        {/* <Link to={"beer/" + beer.id}>
                              <img className="beers__image" src={beer.image_url} alt={beer.name} title={beer.name} />
                           </Link> */}
                        <img className="beers__beer__image" src={beer.image_url} alt={beer.name} title={beer.name} onClick={this.handleClick.bind(this, beer.id)} />
                        <h3 className="beers__beer__name">{beer.name}</h3>
                        <p className="beers__beer__tagline">{beer.tagline}</p>
                        {this.state.showPopup ?
                           <BeerDetails
                              id={this.state.showId}
                              closePopup={this.handleClick.bind(this)}
                           />
                           : null
                        }
                     </div>




                  ))


               }
            </div>
         );


      }
      else {
         return (
            <div></div>
         )

      }

   }
}

export default Beer;


// const Beer = ({ details }) => {
//    console.log(details);
//    return (
// <div className="beers">

//    {
//       details.map(beer => (

//          <div className="beers__beer" key={beer.id}>
//             <Link to={"beer/" + beer.id}>
//                <img className="beers__image" src={beer.image_url} alt={beer.name} title={beer.name} />
//             </Link>
//             <h3 className="beers__name">{beer.name}</h3>
//             <p className="beers__tagline">{beer.tagline}</p>

//          </div>


//       ))
//    }
// </div>
//    );



// }



