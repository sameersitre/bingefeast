import React, { Component } from 'react'
import axios from 'axios';
import Appbar from './Appbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { productList, updateMovieData } from '../../containers/actions/userActions';
import Card from './Card';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user) {

            return {
                movieData: nextProps.user.movie_data
            }
        }
    }
    componentDidMount() {
        this.props.updateMovieData()

    }

    render() {
        return (
            <div>
                <Appbar />
                <Grid item xs={12} style={{ marginTop: 80, backgroundColor: '#1B1A20' }}>

                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={6}>
                            {this.state.movieData && this.state.movieData.slice(0,5).map((value, i) => (
                                <Grid key={i} item>
                                    <Card movieData={value} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                {/* <div style={{ marginTop: 80, }}>
                    {this.state.movieData && this.state.movieData[1] && this.state.movieData[1].id }
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

// export default Dashboard

export default connect(mapStateToProps, { updateMovieData })(withRouter(Dashboard));