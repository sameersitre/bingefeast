/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Poster from '../commonComponents/Poster.js';
import SideDetails from './SideDetails';
import { getDetails } from '../../containers/actions/userActions';
// import Iframe from '../commonComponents/YoutubeIframe';

const styles = (theme) => ({
    root: {
        width: window.innerWidth + 16,
        height: window.innerHeight  ,
        margin: 0,
        backgroundColor : 'grey'
    },
    media: {
        height: window.innerHeight,
        backgroundSize: 'cover'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
});
class MovieDetails extends Component {

    state = {
        movieData: []
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user.details_data) {
            return {
                movieData: nextProps.user.details_data[0],
                videoData: nextProps.user.details_data[1],
                streamAvailablity: nextProps.user.details_data[2],
                bufferEnabled: nextProps.user.buffer_enable
            }
        }
        return null
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getDetails(JSON.parse(localStorage.selectedMovieDetails))
        // this.props.getDetails(JSON.parse(this.props.location.state.movieData))

        // console.log(localStorage.selectedMovieDetails)
        // console.log(window.location.pathname)


    }
    render() {

        const { classes } = this.props;

        return (
            <Box display="flex" bgcolor="#000000" style={{margin:0,padding:0, width: window.innerWidth - 50 }}>
                <Backdrop className={classes.backdrop} open={this.props.user.buffer_enable}  >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Grid item xs={12} style={{ backgroundColor: '#1B1A20', }}>

                    <Grid container justify="center" spacing={4} >
                        <div
                            style={{
                                display: 'flex', position: 'relative',
                            }}
                        >
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image={`https://image.tmdb.org/t/p/w500${this.state.movieData && this.state.movieData.backdrop_path}`  }

                                />
                            </Card>
                            <div
                                style={{
                                    position: 'absolute',
                                    backgroundSize: 'cover',
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                    background: 'linear-gradient(to left, transparent 0%, black 85%)'
                                }} >

                            </div>

                            <div style={{ position: 'absolute', margin: 50, }} >
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 50 }}>
                                    <Poster
                                        data={this.state.movieData}
                                    />
                                    <SideDetails
                                        movieData={this.state.movieData}
                                        videoData={this.state.videoData}
                                        streamAvailablity={this.state.streamAvailablity}
                                    />

                                </div>
                            </div>

                        </div>

                    </Grid>


                </Grid>
            </Box>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user
})



export default withStyles(styles)(connect(mapStateToProps, { getDetails })(withRouter(MovieDetails)))
