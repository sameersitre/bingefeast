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
import FilterChips from './filter';
import { searchResultData } from '../../containers/actions/userActions';
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
      width: 200,
    },
  },
  dialogWidth: {
    width: '40%', marginLeft: 'auto', marginRight: 0
  },
});

class Appbar extends Component {
  state = {
    setDialog: false,
    barColor: false,
    searchText: ''
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
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      window.scrollTo(0, 0)

      this.props.searchResultData(this.state.searchText)
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.grow} >
        <AppBar
          elevation={0}
          style={{
            position: 'fixed',
            height: 100,
            background: 'linear-gradient(to top, transparent 0%, #000000 100%)',
            backgroundColor: 'none'
          }
          }>

          <Toolbar>
            <IconButton href='/' >
              <Typography className={classes.title} variant="h6" noWrap  >
                BingeFeast
            </Typography>
            </IconButton>

            <IconButton  >
              <Typography className={classes.title} variant="subtitle2"
                component={Link}
                to={`/tvshows`}
              >
                TV Shows
            </Typography>
            </IconButton>


            {window.location.pathname === '/' || window.location.pathname === '/inMovie-webapp/' ?
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
            {window.location.pathname === '/' || window.location.pathname === '/inMovie-webapp/' ? <FilterChips /> : null}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user
});

export default withStyles(styles)(withRouter(connect(mapStateToProps, { searchResultData })(Appbar)));
