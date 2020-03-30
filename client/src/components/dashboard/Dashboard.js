/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import { trendingList } from '../../containers/actions/userActions';
import Card from '../commonComponents/Card.js';
import Container from '@material-ui/core/Container';

const styles = (theme) => ({

    media: {
        height: window.innerHeight,
        backgroundSize: 'cover'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
});
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: [],
            refresh: true
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user) {
            return {
                movieData: nextProps.user.movie_data
            }
        }
        return null
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        console.log(window.location)

        // if search box is empty, do action below
        let data = { "page": 1, "type": "all" }
         !this.props.user.search_text_available && 
        this.props.trendingList(data)
    }
    render() {
        const { classes } = this.props;

        return (
            <Box
                display="flex"
                justifyContent='center'
                // boxSizing='border-box'
                width={window.innerWidth}
                bgcolor="#1B1A20"
                style={{ marginLeft: -8, }}
            >
                {/* <Backdrop className={classes.backdrop} open={this.props.user.buffer_enable}  >
                    <CircularProgress color="inherit" />
                </Backdrop> */}
                <Grid item xs={10} >
                    <Grid container justify="center" spacing={3} style={{ paddingTop: 100 }}>
                        {this.state.movieData && this.state.movieData.map((value, i) => (
                            <Grid key={i} item>
                                <Card parentData={value} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})
export default withStyles(styles)(connect(mapStateToProps, { trendingList })(withRouter(Dashboard)));