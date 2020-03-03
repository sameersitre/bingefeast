import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addtoCart } from '../../containers/actions/userActions';

//  import ProductImg from '../../assets/products/';
const styles = (theme) => ({
    root: {
        width: '15rem',
        height: 550,
        backgroundColor: '#101010'

    },
    CardContent: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    },
    media: {
        height: 350,
    },
    chipView: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.3),
        },
    },
});

class MediaCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genreStrings: [],
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.movieData) {
            return {
                movieData: nextProps.movieData,
                genres: nextProps.user.Genres
            }
        } 
    }
    
    componentDidMount() {
        this.getGenre()
    }

    getGenre = () => {
        if (this.state.genres) {
            let genres = this.state.genres.genres
            let propGenres = this.state.movieData.genre_ids
            let genreStrings = []
            propGenres.forEach((value) => {
                // console.log(value)
                for (let j = 0; j < genres.length; j++) {
                    console.log(genres)
                    if (value === genres[j].id) {
                        console.log(genres[j].name)
                        genreStrings.push(genres[j].name)
                    }
                }
            })
            this.setState({ genreStrings: genreStrings })
        }
    }

    _addCartClick = () => {
        // gets cart list from redux and updates the cart
        localStorage.setItem('selectedMovieDetails',JSON.stringify(this.state.movieData))
        this.props.history.push({
            pathname: `/movieDetails`,
            //search: '?the=search',
            movieData: this.state.movieData
          })
    }

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.root}>

                <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w500${this.state.movieData.poster_path}`}
                />
                <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant="subtitle2" style={{ color: '#E5CA49', alignSelf: 'center', height: 40 }}  >
                        {this.state.movieData.title}
                    </Typography>
                    <div style={{ display: 'flex', color: '#FFFFFF', flexDirection: 'column' }}>
                        <Typography variant="body2"  >
                            Ratings: {`${this.state.movieData.vote_average}(${this.state.movieData.vote_count})`}
                        </Typography>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}   >
                            {/* <Typography variant="subtitle2" style={{marginTop:5}}  >
                                Genre:
                                 </Typography> */}
                            <div className={classes.chipView}
                                style={{ width: 270, height: 50 }}>

                                {this.state.genreStrings.map((value, i) =>
                                    <Chip 
                                    key={i}
                                     size="small" 
                                     label={value}
                                     style={{color:'#000000',backgroundColor:'#6A6A6A'}}
                                      component="a" href="#chip" clickable />
                                )}
                            </div>
                        </div>
                    </div>
 
                    <div style={{
                        zIndex: 2,
                        position: 'absolute',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bottom: '-25px'
                    }}>
                        <Button
                            style={{
                                color: '#FFFFFF', backgroundColor: 'black',
                                borderRadius: 0, width: '13rem'
                            }}
                            onClick={() => this._addCartClick()}
                        >  Details
                        </Button>
                    </div>
               </CardContent>
            </Card>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user
});

export default withStyles(styles)(
    connect(
        mapStateToProps,
        { addtoCart }
    )(withRouter(MediaCard))
);
