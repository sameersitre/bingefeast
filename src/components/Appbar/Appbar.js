import React, { Component } from 'react';
import { withStyles, fade } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import DetailView from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import FilterChips from './filter';
import CartList from '../cartList/CartList';
import { searchResultData } from '../../containers/actions/userActions';
const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
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
function Transition(props) {
  return <Slide direction="left" {...props} />;
}

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
          <Dialog
            fullScreen
            open={this.state.setDialog}
            onClose={this.handleClose}
            TransitionComponent={Transition}
            className={classes.dialogWidth}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={this.handleClose}
              aria-label="close"
              style={{ position: 'fixed', zIndex: 1, backgroundColor: 'white', marginLeft: -45 }}
            >
              <CloseIcon />
            </IconButton>

            <CartList
              allList={this.state.userCart}
            />
          </Dialog>

          <Toolbar>
            <IconButton href='/inMovie-webapp/' >
              <Typography className={classes.title} variant="h6" noWrap  >
                inMovie
            </Typography>
            </IconButton>

            <IconButton href='/inMovie-webapp/' >
              <Typography className={classes.title} variant="subtitle2" noWrap  >
                Home
            </Typography>
            </IconButton>

            <IconButton href='/inMovie-webapp/tvshows' >
              <Typography className={classes.title} variant="subtitle2" noWrap  >
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

export default withStyles(styles)(
  connect(
    mapStateToProps, { searchResultData }
  )(withRouter(Appbar))
);
