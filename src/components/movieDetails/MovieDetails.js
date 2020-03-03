import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Poster from './Poster';
import SideDetails from './SideDetails';

const styles = (theme) => ({
    root: {
        width: '15rem',
        height: 350,
    },
});
class MovieDetails extends Component {

    state = {
        movieData: JSON.parse(localStorage.selectedMovieDetails)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps) {
            return {
                //   movieData: nextProps.location.movieData
            }
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        console.log(window.location.pathname)  

    }
    render() {

        const { classes } = this.props;

        return (
            <div>
                <Grid item xs={12} style={{ backgroundColor: '#1B1A20', }}>

                    <Grid container justify="center" spacing={4} >
                        <div
                            style={{
                                display: 'flex', position: 'relative',
                            }}
                        >
                            <img src={`https://image.tmdb.org/t/p/w500${this.state.movieData.backdrop_path}`}
                                style=
                                {{
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                }} />
                            <div
                                style={{
                                    position: 'absolute',
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                    background: 'linear-gradient(to left, transparent 0%, black 85%)'
                                }} >

                            </div>

                            <div style={{ position: 'absolute', color: 'white', margin: 50,}} >
                                <div style={{ display: 'flex', flexDirection: 'row' , marginTop:50 }}>
                                    <Poster
                                        movieData={this.state.movieData}
                                    />
                                    <SideDetails
                                        movieData={this.state.movieData}
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MovieDetails))
