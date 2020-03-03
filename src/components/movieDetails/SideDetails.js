import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
const styles = (theme) => ({
    root: {
        width: '15rem',
        height: 350,
    },
    chipView: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: 400, height: 50,
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
                for (let j = 0; j < genres.length; j++) {
                    if (value === genres[j].id) {
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
                        flexDirection: 'column', width: 600
                    }}>
                    <div style={{display:'flex', flexDirection: 'row' }} >


                        <Typography variant="body2"  >
                            {`${this.state.movieData.vote_average} (${this.state.movieData.vote_count})` }&nbsp;|&nbsp;
                        </Typography>
                        <Typography variant="body2"  >
                             {moment(this.state.movieData.release_date).format('LL')} (USA)
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}   >

                        <div className={classes.chipView} >
                            {this.state.genreStrings.map((value, i) =>
                                <Chip
                                    key={i}
                                    size="small"
                                    label={value}
                                    component="a"
                                    variant="outlined"
                                    style={{ color: '#FFFFFF', backgroundColor: '#5A5A5A' }}
                                    href="#chip" clickable />
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
