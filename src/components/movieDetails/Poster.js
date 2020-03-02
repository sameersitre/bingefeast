import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
const styles = (theme) => ({
    root: {
        width: '15rem',
        height: 350,
    },
});
export class Poster extends Component {
state={

}
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.movieData) {
            return {
                movieData: nextProps.movieData,
                genres: nextProps.user.Genres
            }
        }
    }
    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="350"
                    image={`https://image.tmdb.org/t/p/w500${this.state.movieData.poster_path}`}
                    // image={`https://image.tmdb.org/t/p/w500/riTANvQ8GKmQbgtC1ps3OfkU43A.jpg`}

                    title="Contemplative Reptile"
                />
            </Card>
        )
    }
}


const mapStateToProps = state => ({
    user: state.user
});


const mapDispatchToProps = {

}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Poster))
