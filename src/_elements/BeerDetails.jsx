import React from 'react';
import { connect } from 'react-redux';
import { beerActions, beerService } from './../_factory';
import { newBeer } from '../_factory/mockdata'
import "../SCSS/components/beerDetail"



class BeerDetails extends React.Component {
    constructor(props) {
        super(props);

        document.title = 'Home | React Redux REST API Boilerplate';

        //declared our state
        //state is for storing data in our component
        this.state = {
            beer: {},
            pairs: []
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
        this.setState({
            ['beer']: newProps.beer,
            ['pairs']: newProps.beer.food_pairing

        });
    }

    render() {
        const { beer, pairs } = this.state;
        console.log(pairs)


        return (

            < div className="detail" >

                {
                    beer &&

                    < div className="detail__beer" key={beer.id}>

                        <div className="detail__beer__left">
                            {/* <button>&#10005;</button> */}
                            <img className="detail__beer__left__image" src={beer.image_url} alt={beer.name} title={beer.name} />
                        </div>

                        <div className="detail__beer__right">
                            <h3 >{beer.name}</h3>
                            <br />
                            <h5 >{beer.tagline}</h5>
                            <div className="detail__beer__right__number">
                                <p>IBU: {beer.ibu}</p>
                                <p>ABV: {beer.abv}</p>
                                <p>EBC: {beer.ebc}</p>



                            </div>
                            <div className="detail__beer__right__desciption">
                                <h6>{beer.description}</h6>

                            </div>



                            <ul>
                                {
                                    pairs.map(pair => (
                                        <li>{pair}</li>
                                    ))
                                }
                            </ul>

                        </div>







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
    // console.log(ownProps);
    // const id = ownProps.match.params.id;
    // console.log(state.beers)
    const id = ownProps.id;
    const beer = id && state.beers.length > 0 ? getBeerByID(state.beers, id) : newBeer
    return {
        beer,
    };
}

export default connect(mapStateToProps)(BeerDetails);