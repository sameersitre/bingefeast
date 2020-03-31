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
import { searchResultData, trendingList } from '../../containers/actions/userActions';
import Card from '../commonComponents/Card.js';
class TVShows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tvshowData: [],
            refresh: true
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user) {
            return {
                tvshowData: nextProps.user.movie_data
            }
        }
    }

    componentDidMount() {
        let data = { "page": 1, "type": "tv" }
        !this.props.user.search_text_available &&
            this.props.trendingList(data)
        console.log(window.location.pathname)
    }

    render() {
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
                <Grid item xs={11} >
                    <Grid container justify="center" spacing={4} style={{ paddingTop: 100 }}>
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

// export default TVShows

export default connect(mapStateToProps, { searchResultData, trendingList })(withRouter(TVShows));