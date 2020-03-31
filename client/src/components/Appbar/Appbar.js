/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */

import React, { Component } from 'react';
import { withStyles, fade } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import FilterListIcon from '@material-ui/icons/FilterList';
import FilterChips from './filter';
import ButtonSwitch from './ButtonSwitch';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

import { searchResultData, refreshDashboard, filterMovieData } from '../../containers/actions/userActions';
const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: '#FFFFFF'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.05),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 150,
    },
  },


  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    backgroundColor: '#454545',
    maxWidth: 500,
    borderRadius: 25,
    padding: 0.2,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
});

class Appbar extends Component {
  state = {
    setDialog: false,
    barColor: false,
    searchText: '',

    allGenres: this.props.user.Genres.genres,
    selectedGenres: [],
    allGenresEnabled: false,
    updateOnce: true
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.user_cart) {
      return {
        userCart: nextProps.user.user_cart
      }
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    console.log(window.location.href)
  }
  onScroll = () => {
    if (window.scrollY > 60) {
      this.setState({ barColor: true })
      // console.log(window.scrollY)
    }
    if (window.scrollY < 60) {
      this.setState({ barColor: false })
    }
  }

  handleClickOpen = () => {
    this.setState({ setDialog: true })
  };

  handleClose = () => {
    this.setState({ setDialog: false })
  };

  handleChange = (event) => {
    console.log(event)
    this.setState({ searchText: event.target.value })
    this.props.refreshDashboard(true)
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      window.scrollTo(0, 0)

      this.props.searchResultData({ searchText: this.state.searchText })
    }
    if (this.state.searchText.length === 0) {
      this.props.refreshDashboard(false)
    }
  }

  handleDelete = (chipToDelete) => {

    var filtered = this.state.selectedGenres.filter(function (el) { return el.id !== chipToDelete.id; });
    var allGenres = this.state.allGenres

    allGenres.push(chipToDelete)
    this.setState({ allGenres: allGenres, selectedGenres: filtered })
    if (this.state.selectedGenres.length === 0) {
      this.props.refreshDashboard(false)
    }
  }

  handleAdd = (chipToadd) => {
    var filtered = this.state.allGenres.filter(function (el) { return el.id !== chipToadd.id; });
    var selectedGenres = this.state.selectedGenres

    selectedGenres.push(chipToadd)
    this.setState({ selectedGenres: selectedGenres, allGenres: filtered })
    this.props.refreshDashboard(true)
  }

  handleClear = () => {
    var selectedGenres = this.state.selectedGenres
    var allGenres = this.state.allGenres
    selectedGenres.filter(function (el) { allGenres.push(el) })
    this.setState({ allGenres: allGenres, selectedGenres: [] })
    this.props.refreshDashboard(false)
  }

  filterIconClick = () => {
    this.setState({
      allGenresEnabled: !this.state.allGenresEnabled
    })
  }
  filterClick = () => {
    this.setState({
      allGenresEnabled: false
    })
    this.props.filterMovieData(this.state.selectedGenres)
  }

  render() {
    const { classes } = this.props;
    return (

      <AppBar
        elevation={0}
        style={{
          width: window.innerWidth,
          position: 'fixed',
          height: 80,
          background: 'linear-gradient(to top, transparent 0%, #000000 100%)',
          backgroundColor: 'none'
        }
        }>

        <Toolbar>
          <IconButton href='/' >
            <Typography className={classes.title} variant="h6" noWrap  >
              BingeFeast
            </Typography>
            <Typography className={classes.title} style={{ color: '#E46E36' }} variant="h6" noWrap  >
              .in
            </Typography>
          </IconButton>

          <IconButton  >
            <Typography className={classes.title} variant="subtitle2"
              component={Link}
              to={`/tvshows`}
            >
              Movies
            </Typography>
          </IconButton>

          <IconButton  >
            <Typography className={classes.title}
              style={{ color: window.location.pathname === "/tvshows" && '#E46E36' }}
              variant="subtitle2"
              component={Link}
              to={`/tvshows`}
            >
              TV Shows
            </Typography>
          </IconButton>

          <IconButton  >
            <Typography className={classes.title} variant="subtitle2"
              style={{ color: window.location.pathname.indexOf(`/upcoming/page`)>-1 && '#E46E36' }}
              component={Link}
              to={`/upcoming/page1`}
            >
              Upcoming Movies
            </Typography>
          </IconButton>

          {/* FILTER */}
          {window.location.pathname === '/' ?
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}

                value={this.state.searchText}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            : null}


          <div className={classes.grow} />
          {window.location.pathname === '/'
            ?
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', }} >
              <Paper className={classes.root}>
                <Chip
                  size="small"
                  clickable
                  icon={<FilterListIcon style={{ marginRight: -12 }} />}
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
            :
            null}

        </Toolbar>

      </AppBar>

    );
  }
}


const mapStateToProps = state => ({
  user: state.user
});

export default withStyles(styles)(withRouter(connect(mapStateToProps, { searchResultData, refreshDashboard, filterMovieData })(Appbar)));
