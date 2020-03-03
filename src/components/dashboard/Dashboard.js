import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  updateMovieData } from '../../containers/actions/userActions';
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
                <Grid item xs={12} style={{  backgroundColor: '#1B1A20' }}>
                        <Grid container justify="center" spacing={6} style={{paddingTop:80}}>
                            {this.state.movieData && this.state.movieData.slice(0,6).map((value, i) => (
                                <Grid key={i} item>
                                    <Card movieData={value} />
                                </Grid>
                            ))}
                        </Grid>
                  
                </Grid>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

// export default Dashboard

export default connect(mapStateToProps, { updateMovieData })(withRouter(Dashboard));