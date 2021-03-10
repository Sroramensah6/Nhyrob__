import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types'
// MUI stuff
import CallIcon from '@material-ui/icons/Call';
import Tooltip from '@material-ui/core/Tooltip';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CompanyStatement from '../../util/CompanyProfileParallex';
import { withStyles, Container, Grid, Paper, Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@material-ui/core";
//Client
import Socomex from '../../assets/img/partner.jpg';
import Ceinsa from '../../assets/img/ceinsa-1.jpg';
import Eurofinsa from '../../assets/img/eurofins_0.jpg';
import Western from '../../assets/img/logo/wrod.png';
import JJS from '../../assets/img/partner.jpg';
import Tropical from '../../assets/img/logo/tro_logo.gif';
import Ghana from '../../assets/img/partner.jpg';
import Asibod from '../../assets/img/partner.jpg';
import Korle from '../../assets/img/partner.jpg';
import Temale from '../../assets/img/partner.jpg';
import Tema from '../../assets/img/partner.jpg';
import Ashiaman from '../../assets/img/partner.jpg';
import URI from '../../assets/img/partner.jpg';
import Golden from '../../assets/img/partner.jpg';
import GEL from '../../assets/img/partner.jpg';
import Belstar from '../../assets/img/partner.jpg';
import Kumasi from '../../assets/img/partner.jpg';
import Accra from '../../assets/img/logo/gh-acr.gif';
// Css
import '../../css/careers.css'
// Util
import CareerHeader from '../../util/headers/careerHeader';
const styles = (theme) => ({
    contacts:{
        marginTop: 144
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 105,
        padding: 47,
        // paddingTop: '56.25%', // 16:9;
    },
    paper:{
        '& .MuiPaper-outlined': {
            border: 0,
        }
    },
    general: {
        left: '0%',
        fontSize: 16,
        fontWeight: 18,
        fontSize: 30,
        position: 'relative',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
    },
    headTouch: {
        width: '100%',
        '& general': {
            width: '100%',
        },
        '& hr': {
            marginBottom: '100px',
            border: 'none',
            width: '50%'
        },
    },
})

class careers extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'one'
        }
    };
    handleChange = ( e, newValue) => {
        this.setState({
            value: newValue
        })
    }
    render() {
        const { value } = this.state
        const { classes } = this.props
        return (
            <Fragment>
                <Container>
                    <br/>
                    <Typography className={classes.contacts} component="div">
                        <div style={{ textAlign: 'center'}} className={classes.headTouch}>
                            <h2><span className={`general ${classes.general}`}>Our Clients</span></h2>
                            <hr className={classes.hr}/>
                        </div>
                    </Typography>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Socomex}
                                        title="Socomex"
                                    />
                                    <CardContent>
                                        <h3>Socomex SA</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Ceinsa}
                                        title="Ceinsa"
                                    />
                                    <CardContent>
                                        <h3>Ceinsa (GH) Ltd</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Eurofinsa}
                                        title="Eurofinsa"
                                    />
                                    <CardContent>
                                        <h3>Eurofinsa (GH) Ltd</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <br/>
                    <Grid container justify="center" spacing={2} className={classes.contact}>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Western}
                                        title="Western Rod CO.Ltd"
                                    />
                                    <CardContent>
                                        <h3>Western Rod CO.Ltd</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={JJS}
                                        title="JJS Properties Ltd"
                                    />
                                    <CardContent>
                                        <h3>JJS Properties Ltd</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Tropical}
                                        title="Tropical cables and conductor Ltd"
                                    />
                                    <CardContent>
                                        <h3>Tropical cables and conductor Ltd</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Ghana}
                                        title="Ghana Libya Arabs Holding  Company"
                                    />
                                    <CardContent>
                                        <h3>Ghana Libya Arabs Holding  Company</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <br/>
                    <Grid container justify="center" spacing={2} className={classes.contact}>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Asibod}
                                        title="Asibod Co.Ltd"
                                    />
                                    <CardContent>
                                        <h3>Asibod Co.Ltd</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Korle}
                                        title="Korle Bu Teaching Hospital"
                                    />
                                    <CardContent>
                                        <h3>Korle Bu Teaching Hospital</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Temale}
                                        title="Temale Metropolitan Road Unit"
                                    />
                                    <CardContent>
                                        <h3>Temale Metropolitan Road Unit</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Tema}
                                        title="Tema Metropolitan Roads Unit"
                                    />
                                    <CardContent>
                                        <h3>Tema Metropolitan Roads Unit</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <br/>
                    <Grid container justify="center" spacing={2} className={classes.contact}>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Ashiaman}
                                        title="Ashiaman Municipal Roads Unit"
                                    />
                                    <CardContent>
                                        <h3>Ashiaman Municipal Roads Unit</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={URI}
                                        title="URI (GH) Ltd"
                                    />
                                    <CardContent>
                                        <h3>URI (GH) Ltd</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Golden}
                                        title="Golden Exotic limited"
                                    />
                                    <CardContent>
                                        <h3>Golden Exotic limited</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={GEL}
                                        title="GEL Banana Farm Fairtrade Premium Committee"
                                    />
                                    <CardContent>
                                        <h3>GEL Banana Farm Fairtrade Premium Committee</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <br/>
                    <Grid container justify="center" spacing={2} className={classes.contact}>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Belstar}
                                        title="Belstar Development LLC/ Steven-Menn Construction"
                                    />
                                    <CardContent>
                                        <h3>Belstar Development LLC/ Steven-Menn Construction</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Kumasi}
                                        title="Kumasi Metropolitan"
                                    />
                                    <CardContent>
                                        <h3>Kumasi Metropolitan</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Card  className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.media}
                                        image={Accra}
                                        title="Accra Metropolitan"
                                    />
                                    <CardContent>
                                        <h3>Accra Metropolitan</h3>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <br/>
                </Container>
            </Fragment>
        );
    }
}

careers.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(careers)