import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { Backdrop, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from './Card';
import Footer from './Footer';
import MediaPagination from './MediaPagination'
import { motion } from "framer-motion"
const styles = (theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
});
class MediaList extends PureComponent {
    state = {
        showCardContent: false,
        enteredCardID: null
    }
    componentDidMount() {
        //   window.addEventListener()
    }
    handleBoxTrue = (param) => this.setState({ showCardContent: true, enteredCardID: param });
    handleBoxFalse = (param) => this.setState({ showCardContent: false, enteredCardID: param });

    render() {
        const { classes, listData, previous, next, refresh } = this.props
        const { showCardContent, enteredCardID } = this.state
        return (
            <div
                style={{
                    display: 'flex', alignContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Grid container lg={10}
                    style={{
                        display: 'flex', alignSelf: 'center',
                        justifyContent: 'center',
                        paddingTop: 80,
                        minHeight: window.innerHeight, 
                    }}>
                    <Backdrop className={classes.backdrop} open={refresh}  >
                        <CircularProgress color="inherit" />
                    </Backdrop>

                    {listData?.map((value, i) => (
                        <motion.div
                            style={{ margin: 5 }}
                            whileHover={{ scale: 1.2, zIndex: 1, delay: 100 }}
                            whileTap={{ scale: 0.9 }}
                            onMouseEnter={() => this.handleBoxTrue(value.id)}
                            onMouseLeave={() => this.handleBoxFalse(value.id)}  >
                            <Card parentData={value}
                                showCardContent={showCardContent}
                                enteredCardID={enteredCardID} />
                        </motion.div>

                    ))}

                    {!refresh && listData?.length > 0 &&
                        <MediaPagination
                            next={next}
                            previous={previous}
                        />}


                </Grid>
                  {listData?.length > 0 &&
                        <Footer />
                    }
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(MediaList))