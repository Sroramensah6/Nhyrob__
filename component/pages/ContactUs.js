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
import { withStyles, Container, Grid, Paper, Typography, Card, CardContent, CardActions, Button, } from "@material-ui/core";
// Css
import '../../css/careers.css'
// Util
import CareerHeader from '../../util/headers/careerHeader';
const styles = (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    log:{
        color: '#fff'
    },
    car: {
        marginTop: 30
    },
    text: {
        marginTop: 50
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    lastName: {
        width: '50%'
    },
    firstName: {
        width: '100%',
        margin: '10px auto 10px auto'
    },
    head: {
        left: '0%',
        fontSize: 16,
        fontWeight: 18,
        position: 'relative',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        textAlign:"center",
        '& hr': {
            marginBottom: '100px',
            border: 'none',
            width: '50%'
        },
    },
    headTouch: {
        '& hr': {
            marginBottom: '100px',
            border: 'none',
            width: '50%'
        },
    },
    touch: {
        color: theme.palette.secondary.main,
    },
    margin: {
        margin: theme.spacing(1),
    },
    progressSpinner: {
        position: 'absolute',
        color: 'green'
    },
    formContainer:{
        marginTop: '120px',
    },
    form: {
        textAlign: 'center',
    },
    image: {
        margin: '20px auto 20px auto'
    },
    pageTitle: {
        margin: '10px auto 10px auto',
        color: theme.palette.primary.main
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    message: {
        margin: '10px auto 10px auto',
        height: 100,
        '& .MuiOutlinedInput-root': {
            height: 100
        }
    },
    button: {
        marginTop: 20,
        position: 'relative',
        backgroundColor: theme.palette.secondary.main
    },
})

class careers extends Component {
    constructor(props){
        super(props);
        this.state = {
            feedback: '',
            fullname: '',
            email: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChange = ( e ) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const templateId = 'nhyrob_ltd';
        
        this.setState({
            loading: true
        })

        this.sendFeedback(
            templateId, {
                message_html: this.state.feedback,
                from_fullname: this.state.firstname,
                reply_to: this.state.email
            }
        )
    };

    sendFeedback (templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        )
        .then(res => {
            alert('Email successfully sent!')
        })
          // Handle errors here however you like, or use a React error boundary
        .catch(err => {
            alert('Oh well, you failed. Here some thoughts on the error that occured:', err)
        })
    }
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <CareerHeader />
                <Container>
                    <Grid container className={classes.contact}>
                        <Grid item xs={12}>
                            <div className={classes.head}>
                                <h2>Contact/Location</h2>
                                <hr className={classes.hr}/>
                            </div>
                            <Grid container justify="center" spacing={2}>
                                <Grid item>
                                    <a href="https://www.google.com/maps/dir//5.726528,0.063071/@5.726528,0.063071,13048m/data=!3m1!1e3?hl=en-GB" className="locate">
                                        <Tooltip title="Plot AH 108 , PS Global Estate, Dawhenya-Accra" placement="top">
                                            <Button>
                                                <Paper className={classes.paper}>
                                                    <Card  className={classes.root} variant="outlined">
                                                        <CardContent>
                                                            <Typography style={{ textAlign: 'center' }} component="div">
                                                                <LocationOnIcon style={{ fontSize: '90px' }} />
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                            <Typography component="div">
                                                                <Button size="small">PS Global Estate, Dawhenya-Accra</Button>
                                                            </Typography>
                                                        </CardActions>
                                                    </Card>
                                                </Paper>
                                            </Button>
                                        </Tooltip>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <div className="email" >
                                        <Tooltip title="info@Nhyrobventures.com" placement="top">
                                            <Button>
                                                <Paper className={classes.paper}>
                                                    <Card  className={classes.root} variant="outlined">
                                                        <CardContent>
                                                            <Typography style={{ textAlign: 'center' }} component="div">
                                                                <EmailIcon style={{ fontSize: '90px', textAlign: 'center' }} />
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                            <Typography component="div">
                                                                <Button size="small">info@Nhyrobventures.com</Button>
                                                            </Typography>
                                                        </CardActions>
                                                    </Card>
                                                </Paper>
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </Grid>
                                <Grid item>
                                    <a href="https://instagram.com/nhyrob_ventures" target="_blank" rel="noopener noreferrer" className="twitter">
                                        <Tooltip title="https://instagram.com/nhyrob_ventures" placement="top">
                                            <Button>
                                                <Paper className={classes.paper}>
                                                    <Card  className={classes.root} variant="outlined">
                                                        <CardContent>
                                                            <Typography style={{ textAlign: 'center' }} component="div">
                                                                <InstagramIcon style={{ fontSize: '90px' }} />
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                            <Typography component="div">
                                                                <Button size="small">Nhyrob_ltd</Button>
                                                            </Typography>
                                                        </CardActions>
                                                    </Card>
                                                </Paper>
                                            </Button>
                                        </Tooltip>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href="https://mobile.facebook.com/Nhyrob-ventures-2121730851471591/?ref=104" target="_blank"  rel="noopener noreferrer" className="facebook">
                                        <Tooltip title="https://mobile.facebook.com/Nhyrob-ventures-2121730851471591/?ref=104" placement="top">
                                            <Button>
                                                <Paper className={classes.paper}>
                                                    <Card  className={classes.root} variant="outlined">
                                                        <CardContent>
                                                            <Typography style={{ textAlign: 'center' }} component="div">
                                                                <FacebookIcon style={{ fontSize: '90px' }} />
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                            <Typography component="div">
                                                                <Button size="small">Nhyrob_ltd</Button>
                                                            </Typography>
                                                        </CardActions>
                                                    </Card>
                                                </Paper>
                                            </Button>
                                        </Tooltip>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href="tel:+2330302938749" className="tel">
                                        <Tooltip title="Click to call us (+233) 030 293 8749"  placement="top">
                                            <Button>
                                                <Paper className={classes.paper}>
                                                    <Card  className={classes.root} variant="outlined">
                                                        <CardContent>
                                                            <Typography style={{ textAlign: 'center' }} component="div">
                                                                <CallIcon style={{ fontSize: '90px' }} />
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                            <Typography component="div">
                                                                <Button size="small">(+233) 030 293 8749</Button>
                                                            </Typography>
                                                        </CardActions>
                                                    </Card>
                                                </Paper>
                                            </Button>
                                        </Tooltip>
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} className={classes.formContainer}>
                        <Grid item lg={6} md={6} sm={7} xs={12}>
                            <div className={classes.headTouch}>
                                <p>Contact now</p>
                                <h2 style={{fontSize: '30px !important'}}><span className={classes.touch}>Get In Touch</span> With Us</h2>
                                <hr/>
                            </div>
                            <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                                {/* <Typography component="div" spacing={2}> */}
                                    <TextField
                                        label="Full Name"
                                        multiline
                                        className={classes.firstName}
                                        value={this.state.fullname}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                    />
                                    {/* <TextField
                                        label="Surname"
                                        multiline
                                        className={classes.lastName}
                                        value={this.state.surname}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                    /> */}
                                {/* </Typography> */}
                                <TextField
                                    name="Title"
                                    type="text"
                                    label="email@example.com"
                                    className={classes.textField}
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    rowsMax={6}
                                    name="body"
                                    type="text"
                                    label="Post your message"
                                    value={this.state.feedback}
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    fullWidth
                                    className={classes.message}
                                />
                                {/* {<span className={classes.err}>errors.general</span> && (
                                    <Typography variant="body2" className={classes.customError}>
                                        <span className={classes.err}>{errors.general}</span>
                                    </Typography>
                                )} */}
                                <Button
                                    type = "submit"
                                    variant="contained"
                                    className={classes.button}
                                    // disabled={loading}
                                >
                                    <p><span className={classes.log}>Send</span></p>
                                </Button>
                            </form>
                        </Grid>
                        <Grid item lg={6} md={6} sm={5} xs={12}>
                            <div class="contact-maps">
                                <iframe id="if" src="https://maps.google.com/maps?q=5.726528%2C0.063071&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen></iframe>
                            </div>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                </Container>
            </Fragment>
        );
    }
}

careers.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(careers)