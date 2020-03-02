import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './CartCard';
 import Grid from '@material-ui/core/Grid';
 import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { productList } from '../../containers/actions/userActions';

class CartList extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <Grid item xs={12} style={{
                display: 'flex',
                flexDirection: 'column', backgroundColor: '#1B1A20'
            }}>

                <Grid   spacing={4} style={{ flexDirection: 'column', alignItems:'center' }}>
                    {this.props.allList.map((product, index) => (
                        <Grid key={1} item>
                            <Card
                                product={product}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    member: state.user
})

export default (connect(mapStateToProps, { productList })(withRouter(CartList)));

