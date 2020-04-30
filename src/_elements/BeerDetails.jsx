import React from 'react';
import { connect } from 'react-redux';
import { beerActions, beerService } from './../_factory';
import { newBeer } from '../_factory/mockdata'



class BeerDetails extends React.Component {
    constructor(props) {
        super(props);

        document.title = 'Home | React Redux REST API Boilerplate';

        //declared our state
        //state is for storing data in our component
        this.state = {
            beer: {},
        }
    };
    componentWillMount() {
        const { dispatch } = this.props;
        //sending the beers got from beerservice to beeractions and the beeractions will update central store
        beerService.getBeers()
            .then(beers => {
                dispatch(beerActions.getBeers(beers));
            });
    }


    //recieve data from central store and set the data to component state
    //data got from mapstatetoprop
    componentWillReceiveProps(newProps) {
        // console.log(newProps.beer)
        this.setState({ ['beer']: newProps.beer });
    }

    render() {
        const { beer } = this.state;
        // console.log(beer)

        return (

            < div className="beerDetail" >
                {
                    beer &&

                    <div className="beerDetail__beer" key={beer.id}>
                        <img className="beerDetail__image" src={beer.image_url} alt={beer.name} title={beer.name} />
                        <h3 className="beerDetail__name">{beer.name}</h3>
                        <p className="beerDetail__tagline">{beer.tagline}</p>
                        <p className="beerDetail__description">{beer.description}</p>

                    </div>
                }
            </div >
        );
    }
}
export function getBeerByID(beers, id) {

    const beer = beers.find(beer => beer.id === parseInt(id)) || null;
    // console.log(obj)
    return beer
}



//give access to the central store's data to props
function mapStateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    // console.log(state.beers)
    const beer = id && state.beers.length > 0 ? getBeerByID(state.beers, id) : newBeer
    return {
        beer
    };
}

export default connect(mapStateToProps)(BeerDetails);