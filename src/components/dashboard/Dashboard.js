import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  updateMovieData } from '../../containers/actions/userActions';
import Card from '../commonComponents/Card.js';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: [],
            refresh:true
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
        window.scrollTo(0, 0)

        this.props.updateMovieData()
        console.log(window.location.pathname)  

    }

    render() {
        return (
            <Box display="flex" p={1} bgcolor="#1B1A20">
            <Grid item xs={12} >
                        <Grid container justify="center" spacing={6} style={{paddingTop:80}}>
                            {this.state.movieData && this.state.movieData.map((value, i) => (
                                <Grid key={i} item>
                                    <Card parentData={value} />
                                </Grid>
                            ))}
                        </Grid>
                  
                </Grid>
               
            </Box>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

// export default Dashboard

export default connect(mapStateToProps, { updateMovieData })(withRouter(Dashboard));