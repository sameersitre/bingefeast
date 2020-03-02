import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addtoCart } from '../../containers/actions/userActions';

//  import ProductImg from '../../assets/products/';
const styles = (theme) => ({
    root: {
        width: 250,
        height: 550,
        backgroundColor: '#101010'
    },
    CardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    media: {
        height: 300,
    },
});

class MediaCard extends Component {
    state = {

    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.movieData) {
            return {
                movieData: nextProps.movieData,
                genres: nextProps.user.Genres
            }

        }
        // if (nextProps.user.Genres) {
        //     return { genres: nextProps.user.Genres }
        // }
    }
    componentDidMount() {
        this.getGenre()
    }

    getGenre =  () => {
        let genres = this.state.genres
        let propGenres = this.state.movieData.genre_ids
        let genreStrings = []
        let temp = null

        propGenres.forEach((value)=>{
            for (let j = 0; j < genres.length; j++) {
                if(value==  genres.id[j]){
                    temp=  genres.name[j]
                    console.log('abc',genres.name[j])
                }
            }
        })

        // for (let i = 0; i < propGenres.length; i++) {
        //     for (let j = 0; j < genres.length; j++) {
        //         console.log(propGenres.genre_ids[i])
        //         if(propGenres.genre_ids[i]==genres.id[i]){
        //             temp=genres.name[j]
        //             console.log('abc',genres.name[j])
        //         }
        //     }
        // }
        console.log(temp)
    }

    _addCartClick = () => {
        // gets cart list from redux and updates the cart
        let userCart = this.props.user.user_cart
        var isDuplicate = false

        //check if clicked product is in cart object
        for (let i = 0; i < userCart.length; i++) {
            if (userCart[i].id === this.props.product.id) {
                alert(`${this.props.product.title} is already in your cart.`)
                isDuplicate = true
                break;
            }
        }

        if (!isDuplicate) {
            userCart.push(this.props.product)
            this.props.addtoCart(userCart)
        }
    }


    render() {
        const { classes } = this.props;

        /* 
adult
false
backdrop_path
"/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg"

genre_ids
[35, 18, 53]
id
496243
media_type
"movie"
original_language
"ko"
original_title
"기생충"
overview
"All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident."
popularity
214.369
poster_path
"/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
release_date
"2019-05-30"
title
"Parasite"
video
false
vote_average
8.6
vote_count
4683
staticContext
undefined

 */


        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`https://image.tmdb.org/t/p/w500${this.state.movieData.poster_path}`}
                    />
                    <CardContent className={classes.CardContent}>
                        <Typography gutterBottom variant="subtitle1" style={{ color: '#E5CA49', }}  >
                            {this.state.movieData.title}
                        </Typography>
                        <div style={{ display: 'flex', color: '#FFFFFF', flexDirection: 'column' }}>
                            <Typography variant="body2"  >
                                Ratings: {`${this.state.movieData.vote_average}(${this.state.movieData.vote_count})`}
                            </Typography>
                            <Typography variant="subtitle2"  >
                                Genre
                            </Typography>
                        </div>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained"
                        style={{
                            color: '#FFFFFF', backgroundColor: 'black',
                            borderRadius: 0, width: 250,
                        }}
                        onClick={() => this._addCartClick()}
                    >
                        Details
                </Button>
                </CardActions>
            </Card>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user
});

//export default withStyles(styles)(IOTAppBar);


export default withStyles(styles)(
    connect(
        mapStateToProps,
        { addtoCart }
    )(withRouter(MediaCard))
);
