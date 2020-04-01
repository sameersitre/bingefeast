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

import { searchResultData, trendingList, upcomingMoviesData, refreshDashboard } from '../../containers/actions/userActions';
import Card from '../commonComponents/Card.js';

const styles = (theme) => ({
    root: {
        color: '#FFFFFF',
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
    button: {
        color: '#FFFFFF',
        backgroundColor: '#E46E36',
        margin: theme.spacing(1),
    },

})
class Upcoming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingData: [],
            refresh: true,
            pageNumber: this.props.match.params.pageNumber,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user) {
            return {
                upcomingData: nextProps.user.movie_data
            }
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        // this.setState({pageNumber:this.props.match.params.pageNumber})
        let data = { "page": 1, "type": "movie" }
        this.props.trendingList(data)
        console.log(window.location.pathname)
    }

    render() {
        const { classes } = this.props;

        return (
            <Box
                style={{
                    display: "flex",
                    justifyContent: 'center',
                    justifySelf: 'center',
                    backgroundColor: "#1B1A20",
                    minHeight: window.innerHeight
                }}
            >
                <Grid item xs={11}>
                    <Grid container justify="center" spacing={4} style={{ paddingTop: 100 }}>
                        {this.state.upcomingData && this.state.upcomingData.map((value, i) => (
                            <Grid key={i} item>
                                <Card parentData={value} />
                            </Grid>
                        ))}
                    </Grid>

                    <Grid style={{ marginTop: 100 }}>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default withStyles(styles)(connect(mapStateToProps, { searchResultData, refreshDashboard, trendingList, upcomingMoviesData })(withRouter(Upcoming)));