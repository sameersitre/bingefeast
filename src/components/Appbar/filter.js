import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import FilterListIcon from '@material-ui/icons/FilterList';
import {  filterMovieData } from '../../containers/actions/userActions';

const styles = (theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        backgroundColor: 'grey',
        maxWidth: 800,
        borderRadius: 25,
        padding: 0.2,
    },

    chip: {
        margin: theme.spacing(0.5),
    },
});


class ChipsArray extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allGenres: [],
            selectedGenres: [],
            allGenresEnabled: false,
            updateOnce: true
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.user.Genres  ) {
    //         return {
    //             allGenres: nextProps.user.Genres.genres
    //         }
    //     }
    // }
    componentDidMount() {
        this.setState({ allGenres: this.props.user.Genres.genres })
    }
    handleDelete = (chipToDelete) => {

        var filtered = this.state.selectedGenres.filter(function (el) { return el.id !== chipToDelete.id; });
        var allGenres = this.state.allGenres

        allGenres.push(chipToDelete)
        this.setState({ allGenres: allGenres, selectedGenres: filtered })

    }


    handleAdd = (chipToadd) => {
        var filtered = this.state.allGenres.filter(function (el) { return el.id !== chipToadd.id; });
        var selectedGenres = this.state.selectedGenres

        selectedGenres.push(chipToadd)
        this.setState({ selectedGenres: selectedGenres, allGenres: filtered })


    }

    handleClear = () => {
        var selectedGenres = this.state.selectedGenres
        var allGenres = this.state.allGenres
        selectedGenres.filter(function (el) { allGenres.push(el) })
        this.setState({ allGenres: allGenres, selectedGenres: [] })
    }

    filterIconClick = () => {
        this.setState({
            allGenresEnabled: !this.state.allGenresEnabled
        })
    }
    filterClick = () => {
        this.setState({
            allGenresEnabled: !this.state.allGenresEnabled
        })
        this.props.filterMovieData(this.state.selectedGenres)
    }


    render() {
        const { classes } = this.props;

        return (
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', }} >
                <Paper className={classes.root}>
                    <Chip
                        size="small"
                        clickable
                        icon={<FilterListIcon style={{ marginRight: -13 }} />}
                        className={classes.chip}
                        style={{ display: 'flex', marginLeft: 5 }}
                        onClick={() => this.filterIconClick()}
                    />
                    {this.state.selectedGenres && this.state.selectedGenres.map(data => {
                        let icon;
                        return (
                            <Chip
                                size="small" key={data.id}
                                icon={icon} label={data.name}
                                onDelete={() => this.handleDelete(data)}
                                className={classes.chip}
                            />
                        );
                    })}

                    {this.state.selectedGenres.length > 0
                        ?

                        <div>
                            <Chip
                                size="small" clickable label='CLEAR'
                                className={classes.chip}
                                style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
                                onClick={() => this.handleClear()}
                            />

                            <Chip
                                size="small" clickable label='FILTER'
                                className={classes.chip}
                                style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
                                onClick={() => this.filterClick()}
                            />
                        </div>
                        : null
                    }


                </Paper>

                {this.state.allGenresEnabled
                    ?
                    <Paper variant="outlined"
                        elevation={3}
                        style={{
                            position: 'absolute', justifyContent: 'space-evenly',
                            flexWrap: 'wrap', backgroundColor: '#5E5E5E', width: 250,
                            borderRadius: 13, padding: 5, top: 40, right: 0
                        }} >
                        {this.state.allGenres && this.state.allGenres.map(data => {
                            let icon;
                            return (
                                <Chip
                                    size="small" key={data.id}
                                    icon={icon} label={data.name}
                                    onClick={() => this.handleAdd(data)}
                                    style={{ margin: 3, padding: 0.2, }}
                                    className={classes.chip}
                                />
                            );
                        })}
                    </Paper>
                    : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});
export default withStyles(styles)(connect(mapStateToProps, {filterMovieData})(withRouter(ChipsArray)));
