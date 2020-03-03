import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
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
import FilterChips from './filter';
import CartList from '../cartList/CartList';
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
  dialogWidth: {
    width: '40%', marginLeft: 'auto', marginRight: 0
  }
});
function Transition(props) {
  return <Slide direction="left" {...props} />;
}

class Appbar extends Component {
  state = {
    setDialog: false,
    barColor: false,

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
      console.log(window.scrollY)
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
            <IconButton href='/' >
              <Typography className={classes.title} variant="h6" noWrap  >
                IN MOVIE
            </Typography>
            </IconButton>

            <IconButton href='/' >
              <Typography className={classes.title} variant="subtitle2" noWrap  >
                Home
            </Typography>
            </IconButton>

            <IconButton href='/' >
              <Typography className={classes.title} variant="subtitle2" noWrap  >
                Genre
            </Typography>
            </IconButton>

            <div className={classes.grow} />

            {window.location.pathname==='/' || window.location.pathname==='/inMovie-webapp/'? <FilterChips/>:null}
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user,

});

export default withStyles(styles)(
  connect(
    mapStateToProps,
  )(withRouter(Appbar))
);
