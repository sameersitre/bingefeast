import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import moment from 'moment';
import Popover from '@material-ui/core/Popover';

import Typography from '@material-ui/core/Typography';
const styles = (theme) => ({
    dialog: {
        width: 500, height: 800,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        width: 450,
        // backgroundColor: 'pink'
    },
    button: {
        color: '#FFFFFF',
        backgroundColor: '#5A5A5A',
        margin: theme.spacing(0.6),
    },
    chipView: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: 400,
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.3),
        },
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
});
class SideDetails extends Component {
    state = {
        genreStrings: [],
        videoData: [],
        dialogOpen: false,
        videoSelected: null,
        popoverOpen: false,
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        return {
            movieData: nextProps.movieData, videoData: nextProps.videoData
        }


    }
    componentDidMount() {
        //this.getGenre()
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

    handleDialogOpen = () => {
        this.setState({ dialogOpen: true })
    }
    handleDialogClose = () => {
        this.setState({ dialogOpen: false })
    }
    handleVideoButton = (value) => {
        this.setState({ videoSelected: value, dialogOpen: true })
        // this.handleDialogOpen()
    }
    handlePopoverOpen = (value) => {
        this.setState({ videoSelected: value, popoverOpen: true })
    };

    handlePopoverClose = () => {
        this.setState({ popoverOpen: false })
    };


    render() {
        const { classes } = this.props;

        return (

            <div
                style={{
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'space-between', margin: 10,
                    color: '#FFFFFF',
                    flexDirection: 'column', width: 600
                }}>
                <Popover

                    id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open={this.state.popoverOpen}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={this.handlePopoverClose}
                    disableRestoreFocus
                >
                    {this.state.videoSelected && this.state.videoSelected.name}
                </Popover>
                <Dialog
                    fullScreen
                    disableBackdropClick
                    disableEscapeKeyDown
                    className={classes.dialog}
                    open={this.state.dialogOpen}
                    style={{ width: '80%', height: '80%', margin: 'auto' }}
                >
                    <IconButton
                        color="inherit"
                        onClick={() => this.handleDialogClose()}
                        aria-label="Close"
                        style={{ position: 'fixed', zIndex: 1, backgroundColor: 'white', marginTop: -45, marginLeft: '80%' }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <iframe
                        src={`https://www.youtube.com/embed/${this.state.videoSelected && this.state.videoSelected.key}`}
                         // height="315"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            left: 0, top: 0,
                        }}
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />
                </Dialog>

                <Typography gutterBottom variant="h6" style={{ color: '#E5CA49', }}  >
                    {this.state.movieData.title
                        ||
                        this.state.movieData.name}
                </Typography>
                <div style={{ flexDirection: 'row' }} >
                    <Typography variant="body2"  >
                        {`${this.state.movieData.vote_average} (${this.state.movieData.vote_count})`}
                    </Typography>
                    <Typography variant="body2"  >
                        {moment(this.state.movieData.release_date).format('LL')} (USA)
                        </Typography>
                </div>

                <div className={classes.chipView} >
                    {this.state.movieData.genres && this.state.movieData.genres.map((value, i) =>
                        <Chip
                            key={i}
                            size="small"
                            label={value.name}
                            component="a"
                            variant="outlined"
                            style={{ color: '#FFFFFF', backgroundColor: '#5A5A5A' }}
                            href="#chip" clickable />
                    )}
                </div>
                <Typography variant="body2" width={300}   >
                    Overview: {this.state.movieData.overview}
                </Typography>

                <Grid container className={classes.buttons} spacing={1} >
                    {this.state.videoData && this.state.videoData.results.map((value, i) =>
                        <div>

                            <Button
                                key={i}
                                variant="contained"
                                size="small"
                                color="#E46E36"
                                // aria-owns={this.state.popoverOpen ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                className={classes.button}
                                onMouseEnter={() => this.handlePopoverOpen(value)}
                                onMouseLeave={this.handlePopoverClose}
                                onClick={() => this.handleVideoButton(value)}
                            >
                                {`${i + 1}.${value.type}`}
                            </Button>

                        </div>
                    )}
                </Grid>
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
