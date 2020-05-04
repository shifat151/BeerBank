import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { beerActions, beerService } from './../_factory';
import { connect } from 'react-redux';
import Beer from "./Beer";
import "../SCSS/components/advSearch"


class advancedSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            abv_gt: 1,
            abv_lt: 100,
            ebc_gt: 1,
            ebc_lt: 500,
            ibu_gt: 1,
            ibu_lt: 100,
        };
        this.handleChange = this.handleChange.bind(this);
        this.fetchSearchResult = this.fetchSearchResult.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    };
    refreshPage() {
        window.location.reload(false);
    }

    componentWillReceiveProps(newProps) {
        this.setState({ ['beers']: newProps.beers });
    }

    fetchSearchResult() {

        const { dispatch } = this.props;
        const { abv_gt, abv_lt, ebc_gt, ebc_lt, ibu_gt, ibu_lt } = this.state;
        // sending the beers got from beerservice to beeractions and the beeractions will update central store
        console.log(ibu_lt);
        if (!isNaN(abv_gt) && !isNaN(abv_lt) && !isNaN(ebc_gt) && !isNaN(ebc_lt) && !isNaN(ibu_gt) && !isNaN(ibu_lt)) {
            beerService.advanceSearchBeers(abv_gt, abv_lt, ebc_gt, ebc_lt, ibu_gt, ibu_lt)
                .then(beers => {
                    dispatch(beerActions.getBeers(beers));

                });
        }




    }






    handleChange(evt) {
        //callback function
        const formValue = parseInt(evt.target.value);
        this.setState({ [evt.target.name]: isNaN(formValue) ? 1 : formValue }, () => {
            this.fetchSearchResult();
        });
    }

    render() {
        const { beers } = this.state;
        return (
            <div className="advSearch">
                <header className="advSearch__head">
                    <h1 style={{ cursor: 'pointer' }} onClick={this.refreshPage}><span>B</span>B</h1>
                    <div className="advSearch__head__headlink">

                        <NavLink style={{ textDecoration: 'none', color: '#DDDDB7' }} exact={true} to="/">Home </NavLink>
                        <NavLink style={{ textDecoration: 'none', color: '#DDDDB7' }} exact={true} to="/favourite">Favourite</NavLink>

                    </div>

                </header>

                <div className="advSearch__headline">
                    <h1>Advanced Search</h1>
                </div>

                <div className="advSearch__search">
                    <form className="advSearch__search__form">
                        <div className="advSearch__search__form__one">
                            <div className="advSearch__search__form__one__formGroup">
                                <label>Min ABV:</label>
                                <input type="number" id="abv_gt" name="abv_gt" min="0" max="100" onChange={this.handleChange}></input>
                            </div>
                            <div className="advSearch__search__form__one__formGroup">
                                <label>Max ABV:</label>
                                <input type="number" id="abv_lt" name="abv_lt" min="0" max="100" onChange={this.handleChange}></input>

                            </div>
                            <div className="advSearch__search__form__one__formGroup">
                                <label>Min EBC:</label>
                                <input type="number" id="ebc_gt" name="ebc_gt" min="0" max="100" onChange={this.handleChange}></input>
                            </div>
                        </div>


                        <div className="advSearch__search__form__two">
                            <div className="advSearch__search__form__two__formGroup">
                                <label>Max EBC:</label>
                                <input type="number" id="ebc_lt" name="ebc_lt" min="0" max="100" onChange={this.handleChange}></input>
                            </div>
                            <div className="advSearch__search__form__two__formGroup">
                                <label>Min IBU:</label>
                                <input type="number" id="ibu_gt" name="ibu_gt" min="0" max="100" onChange={this.handleChange}></input>

                            </div>
                            <div className="advSearch__search__form__two__formGroup">

                                <label>Max IBU:</label>
                                <input type="number" id="ibu_lt" name="ibu_lt" min="0" max="100" onChange={this.handleChange}></input>

                            </div>
                        </div>


                    </form>
                </div>
                {
                    beers &&
                    <Beer details={beers} />
                }

            </div>

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

export default connect(mapStateToProps)(advancedSearch);
