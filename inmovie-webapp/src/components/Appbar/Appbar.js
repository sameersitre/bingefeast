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
        <AppBar style={{
          position: 'fixed',
          background: 'linear-gradient(to bottom, transparent 0%, black 85%)',
          backgroundColor: (window.scrollY > 60) ? '#000000' : (window.scrollY < 60) && 'none'
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
            <Typography className={classes.title} variant="h6" noWrap>
              IN MOVIE
          </Typography>
            <div className={classes.grow} />
            <div  >
              <IconButton aria-label="show 17 new notifications" color="inherit" onClick={this.handleClickOpen} >
                <Badge badgeContent={this.props.user.user_cart && this.props.user.user_cart.length} color="secondary">
                  <DetailView />
                </Badge>
              </IconButton>
            </div>
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
