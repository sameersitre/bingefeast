import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from "react-router-dom";

import {
     Card,
    CardContent,
    Button,
    Typography,
    TextField,
    IconButton,
    InputAdornment
    // FormControlLabel,
    // Checkbox,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import Container from '@material-ui/core/Container';
class Register extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Container maxWidth="xl">
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
                        fuhdsufhds ufehn
                    </Typography>
                    <div className={classes.main}>
                        <Typography variant="h4" className={classes.header4}>
                            Sign In
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Access your Schrocken Ecosystems
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            className={classes.nfoText}
                        >
                            Enter your credentials
                        </Typography>
                        <form onSubmit={this.onSubmit} autoComplete="off">
                            <Card raised>
                                <CardContent className={classes.cardContent}>
                                    <TextField
                                        label="Email"
                                        name="superadminEmail"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        autoFocus
                                        value={this.state.superadminEmail}
                                        onChange={this.handleChange}
                                        error={this.state.errors.superadminEmail}
                                        helperText={
                                            this.state.errors.wrongData
                                                ? "Email/Password combination is wrong"
                                                : null
                                        }
                                        className={classes.textFieldMargin}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">&nbsp;</InputAdornment>
                                            )
                                        }}
                                    />
                                    <TextField
                                        label="Password"
                                        name="superadminPassword"
                                        variant="outlined"
                                        fullWidth
                                        type={this.state.showPassword ? "text" : "password"}
                                        value={this.state.superadminPassword}
                                        onChange={this.handleChange}
                                        error={this.state.errors.superadminPassword}
                                        helperText={
                                            this.state.errors.wrongData
                                                ? "Email/Password combination is wrong"
                                                : null
                                        }
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="Toggle password visibility"
                                                        onClick={this.ShowPassword}
                                                    >
                                                        {this.state.showPassword ? (
                                                            <Visibility />
                                                        ) : (
                                                                <VisibilityOff />
                                                            )}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    {/* <FormControlLabel
                  control={(
                    <Checkbox
                      checked={this.state.rememberMe}
                      onChange={this.handleCheck}
                      color="primary"
                    />
)}
                  label="Remember me"
                /> */}
                                    <br />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        style={{ marginTop: "1rem" }}
                                    >
                                        Sign In
                </Button>
                                </CardContent>
                            </Card>
                        </form>
                        <Typography className={classes.forgot}>
                            <Link
                                to="/forgotPassword"
                                style={{
                                    textDecoration: "none",
                                    color: "#333232",
                                    fontWeight: 500
                                }}
                            >
                                Forgot Password ?
            </Link>
                        </Typography>
                        {/* <Typography
                        variant="subtitle1"
                        className={classes.haveAccount}
                    >
                        Don&apos;t have an account ?
                    </Typography>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="secondary">
                            GET STARTED
                        </Button>
                    </Link> */}
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}
Register.propTypes = {
    history: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
export default withRouter(Register)