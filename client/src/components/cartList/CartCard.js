import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
 import Typography from '@material-ui/core/Typography';
 import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addtoCart } from '../../containers/actions/userActions';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        width: '95%',
        height: 130,
        margin: 20,
        backgroundColor: '#222028'
    },
    CardContent: {
        flexDirection: 'row',
    },
    media: {
        width: 100,
        height: '100%',
    },
});

function CartCard(props) {
    const classes = useStyles();
    function _removeFromCartClick() {
        // gets cart list from redux and updates the cart
        let userCart = props.user.user_cart
        var filtered = userCart.filter(function (el) { return el.id !== props.product.id; });
        props.addtoCart(filtered)
    }

    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={require("../../assets" + props.product.src_1)}
            />
            <CardContent className={classes.CardContent}>
                <Typography gutterBottom variant="body2" style={{ color: '#FFFFFF' }} >
                    {props.product.title}
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography variant="body1" style={{ color: '#E5CA49' }}  >
                        $ {props.product.price.toString() }
                    </Typography>
                   
                </div>
            </CardContent>



            <IconButton
                style={{
                    backgroundColor: 'grey', marginLeft: 'auto',
                    marginBottom: 'auto', marginRight: 0, 
                }}
                aria-label="close"
                onClick={() => _removeFromCartClick()}
            >
                <DeleteIcon color='secondary' fontSize='small' />
            </IconButton>

        </Card>
    );
}


const mapStateToProps = state => ({
    user: state.user
});

export default (
    connect(
        mapStateToProps,
        { addtoCart }
    )(withRouter(CartCard))
);
