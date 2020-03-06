import React, { Component } from 'react';
 
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
 
import CardContent from '@material-ui/core/CardContent';
 
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addtoCart } from '../../containers/actions/userActions';
import Poster from './Poster.js';
//  import ProductImg from '../../assets/products/';
const styles = (theme) => ({
    root: {
        width: '13rem',
        backgroundColor: '#101010'

    },
    CardContent: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
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
        if (nextProps.parentData) {
            return {
                movieData: nextProps.parentData,
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
                for (let j = 0; j < genres.length; j++) {
                    if (value === genres[j].id) {
                        genreStrings.push(genres[j].name)
                    }
                }
            })
            this.setState({ genreStrings: genreStrings })
        }
    }

    _addCartClick = () => {

        // gets cart list from redux and updates the cart
        //put on localstorage to avoid undefined on user refresh
        localStorage.setItem('selectedMovieDetails', JSON.stringify(this.state.movieData))
        this.props.history.push({
            pathname: `/moviedetails`,
            //search: '?the=search',
            // movieData: this.state.movieData
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.root}>
                <div onClick={() => this._addCartClick()}>
                    <Poster
                        data={this.state.movieData}
                    />
                </div>

                <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant="subtitle2"
                        style={{
                            color: '#E5CA49', alignSelf: 'center',
                            marginTop: -10
                        }}  >
                        {this.state.movieData.title
                            ||
                            this.state.movieData.name}
                    </Typography>
                    <Grid style={{ display: 'flex', color: '#FFFFFF', flexDirection: 'column' }}>
                        <div  >
                            <Typography variant="body2"  >
                                {`${this.state.movieData.vote_average} (${this.state.movieData.vote_count})`}
                            </Typography>
                            <Typography variant="body2"  >
                                {moment(this.state.movieData.release_date).format('LL')} (USA)
                        </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}   >

                            <div className={classes.chipView}
                            >

                                {this.state.genreStrings.map((value, i) =>
                                    <Chip
                                        key={i}
                                        size="small"
                                        label={value}
                                        style={{ color: '#000000', backgroundColor: '#6A6A6A', height: 20 }}
                                        component="a" />
                                )}
                            </div>
                        </div>
                    </Grid>

                </CardContent>
            </Card>
        );
    }
}
// MediaCard.propTypes = {
//     history: React.PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
    user: state.user
});

export default withStyles(styles)(
    connect(
        mapStateToProps,
        { addtoCart }
    )(withRouter(MediaCard))
);
