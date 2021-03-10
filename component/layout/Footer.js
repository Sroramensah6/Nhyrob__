import React, { Fragment } from 'react';
// MUI Stuff
import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TemporaryDrawer from '../../util/nav/footer'
const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        height: 35,
    },
    grow: {
        flexGrow: 1,
    }
}));

export default function BottomAppBar() {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <AppBar color="primary" className={classes.appBar}>
                <div className="footer">
                    <Grid
                        style={{marginTop: "-15px"}}
                        direction="row"
                        color="primary"
                        justify="space-evenly"
                        alignItems="center"
                        container
                    >
                        <Grid item />
                        <Grid item color="primary">
                            <Toolbar color="primary">
                                <Typography className={classes.footer} variant="h5" noWrap>
                                    <TemporaryDrawer />
                                </Typography>
                            </Toolbar>
                        </Grid>
                        {/* <Grid item color="primary">
                            <Toolbar color="secondary">
                                <Typography color="secondary" style={{float: "right"}} className="titleCopyright" variant="h5" noWrap>
                                    <p style={{color: "#ba68c8"}}>&copy; {new Date().getFullYear()} Copyright: <Icon><WorkIcon style={{ fontSize: '9px'}}/></Icon> NextTech Solutions</p>
                                </Typography>
                            </Toolbar>
                        </Grid> */}
                        <Grid item />
                    </Grid>
                </div>
            </AppBar>
        </Fragment>
    );
}