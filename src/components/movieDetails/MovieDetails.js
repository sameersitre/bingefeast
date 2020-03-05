import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Poster from '../commonComponents/Poster.js';
import SideDetails from './SideDetails';
import { getDetails } from '../../containers/actions/userActions';
// import Iframe from '../commonComponents/YoutubeIframe';
import YouTube from 'react-youtube';

const styles = (theme) => ({
    root: {
        width: '15rem',
        height: 350,
    },
    margin: {
        margin: theme.spacing(1),
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
                movieData: nextProps.user.details_data[1],
                videoData: nextProps.user.details_data[0],
                bufferEnabled: nextProps.user.buffer_enable
            }
        }
    }

    componentDidMount() {
        this.props.getDetails(JSON.parse(localStorage.selectedMovieDetails))
console.log(localStorage.selectedMovieDetails)
        window.scrollTo(0, 0)
        console.log(window.location.pathname)

    }
    render() {

        const { classes } = this.props;
        const opts = {
            height: '200',
            width: '400',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        return (
            <Box display="flex" p={1} bgcolor="background.paper">
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
                            <img src={`https://image.tmdb.org/t/p/original${this.state.movieData && this.state.movieData.backdrop_path}`}
/*  <img src={`https://image.tmdb.org/t/p/w500${this.state.movieData && this.state.movieData.backdrop_path}`} */
                                style=
                                {{
                                    width: window.innerWidth,
                                    // height: window.innerHeight,
                                    backgroundSize: 'cover'
                                }} />
                            <div
                                style={{
                                    position: 'absolute',
                                    backgroundSize: 'cover',
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                    background: 'linear-gradient(to left, transparent 0%, black 85%)'
                                }} >

                            </div>

                            <div style={{ position: 'absolute',  margin: 50, }} >
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 50 }}>
                                    <Poster
                                        data={this.state.movieData}
                                    />
                                    <SideDetails
                                        movieData={this.state.movieData}
                                        videoData={this.state.videoData}
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

const mapDispatchToProps = {
}

export default withStyles(styles)(connect(mapStateToProps, { getDetails })(MovieDetails))
