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




    componentDidMount() {
        console.log(this.props.beer.food_pairing)
        this.setState({
            ['beer']: this.props.beer,
            ['pairs']: this.props.beer.food_pairing

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
                                <p>IBU: {beer.ibu}  </p>
                                <p>ABV: {beer.abv}  </p>
                                <p>EBC: {beer.ebc}  </p>



                            </div>
                            <div className="detail__beer__right__desciption">
                                <p>{beer.description}</p>

                            </div>


                            <h4>Best Serverd with:</h4>
                            <ul>
                                {pairs &&
                                    pairs.map(pair => (
                                        <li key={pair}>{pair}</li>
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
    // console.log(beers)
    const beer = beers.find(beer => beer.id === parseInt(id)) || null;
    // console.log(beer)
    return beer
}



//give access to the central store's data to props
function mapStateToProps(state, ownProps) {
    // console.log(ownProps);
    // const id = ownProps.match.params.id;
    // console.log(state.beers)
    const id = ownProps.id;
    // console.log(id)
    const beer = id && state.beers.length > 0 ? getBeerByID(state.beers, id) : newBeer
    return {
        beer,
    };
}

export default connect(mapStateToProps)(BeerDetails);