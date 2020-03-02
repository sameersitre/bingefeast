import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import Typography from '@material-ui/core/Typography';
const styles = (theme) => ({
    root: {
        width: '15rem',
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
class SideDetails extends Component {
    state = {
        genreStrings: [],
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


    render() {
        const { classes } = this.props;

        return (
            <div style={{ margin: 10 }}>
                <Typography gutterBottom variant="h6" style={{ color: '#E5CA49', alignSelf: 'center', height: 40 }}  >
                    {this.state.movieData.title}
                </Typography>
                <div
                    style={{
                        display: 'flex', color: '#FFFFFF',
                        flexDirection: 'column', width:600
                    }}>
                    <Typography variant="body2"  >
                        Ratings: {`${this.state.movieData.vote_average} (${this.state.movieData.vote_count})`}
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}   >
                        {/* <Typography variant="subtitle2" style={{marginTop:5}}  >
                                Genre:
                                 </Typography> */}
                        <div className={classes.chipView}
                            style={{ width: 270, height: 50 }}>

                            {this.state.genreStrings.map((value, i) =>
                                <Chip key={i} size="small" label={value} component="a" href="#chip" clickable />
                            )}
                        </div>
                    </div>
                    <Typography variant="body2" width='300'   >
                        Overview: {this.state.movieData.overview}
                    </Typography>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = {

}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SideDetails))
