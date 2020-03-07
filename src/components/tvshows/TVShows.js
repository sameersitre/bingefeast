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
import {  updateTvShowData } from '../../containers/actions/userActions';
import Card from '../commonComponents/Card.js';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tvshowData: [],
            refresh:true
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user) {

            return {
                tvshowData: nextProps.user.tvshow_data
            }
        }
    }
    componentDidMount() {

        this.props.updateTvShowData()
        console.log(window.location.pathname)  

    }

    render() {
        return (
            <Box display="flex" p={1} bgcolor="#1B1A20">
            <Grid item xs={12} >
                        <Grid container justify="center" spacing={6} style={{paddingTop:80}}>
                            {this.state.tvshowData && this.state.tvshowData.map((value, i) => (
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

// export default Dashboard

export default connect(mapStateToProps, { updateTvShowData })(withRouter(Dashboard));