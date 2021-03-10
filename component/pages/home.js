import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container';
import '../../css/main.css';
//import GoogleMap from '../../util/map/GoogleMap';
import CarouselPage from '../../util/CarouselPage';
import VPACompany from '../../util/CompanyProfileParallex';
import { Typography, Grid, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    profile: {
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
        },
        '& .profile-image': {
            width: '100%',
            height: 1007,
            objectFit: 'cover',
            maxWidth: '100%',
            textAlign: 'center',
        },
    },
    head: {
        left: '0%',
        fontSize: 16,
        width: '100%',
        fontWeight: 700,
        textAlign:"center",
        position: 'relative',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        '& hr': {
            maginBottom: '10px',
            border: 'none',
            width: '50%'
        },
    },
    contactContainer: {
        backgroundColor: '#fff',
        paddingBottom: 50
    },
    bottomMargin: {
        marginBottom: 60
    },
    span1: {
        color: 'red',
    },
})


class home extends Component {
    render() {
        const { classes} = this.props;
        return (
            <Fragment>
                <CarouselPage />
                <br />
                <br />
                    <Container maxWidth="lg">
                        <Typography className={classes.bottomMargin} component="div">
                            {/*<div className={classes.head}>
                                <h2>VPA Company</h2>
                                <hr className={classes.hr}/>
                            </div>*/}
                            <Grid
                                direction="row"
                                spacing={2}
                                justify="space-evenly"
                                alignItems="center"
                                container
                            >
                                <Grid item lg={8} sm={8} xs={12}>
                                    <Typography component="div" variant="body1">
                                        <div className={classes.head}>
                                            <h2>Nhyrob Limited</h2>
                                            <hr className={classes.hr}/>
                                        </div>
                                        <p>
                                            Nhyrob ltd is an infrastructural engineering and construction company headquartered in
                                            Accra - Ghana, West Africa. Employing the most competent expertise in the areas of General
                                            Building Construction, Civil engineering, Quantity Surveying and Designs services. We apply
                                            latest technologies – hardware and software the execution of our works.
                                        </p>
                                        <p>The following are our expertise:</p>
                                        <ul class="list-pick">
                                            <li class="lis">General building construction and furnishing</li>
                                            <li class="lis">Road and bridge construction</li>
                                            <li class="lis">Ware house construction</li>
                                            <li class="lis">Renovation and Refurbishment</li>
                                            <li class="lis">Hospital infrastructural development</li>
                                        </ul>
                                        <br/>
                                        <p>
                                            Current research surveys show that Ghana <span className={classes.span1}>(</span> West Africa <span className={classes.span1}>)</span> has a huge infrastructure deficit.
                                            This is in terms of roads, bridges, dams, hospitals, housing and commercial buildings.
                                            The contribution of Nhyrob as a vital player in bridging the gap is obvious and cannot
                                            be understated. We have an enviable track record in the industry in Ghana. Many of the
                                            works we have done can be found all over the country – from the south to the north.
                                            We are on the move...
                                        </p>
                                        <p id="vis">
                                            At Nhyrob we understand that the potential of any company,
                                            such as our measured by our value of Research and
                                            Development <span className={classes.span1}>(</span> RnD <span className={classes.span1}>)</span> and
                                            Health and Safety <span className={classes.span1}>(</span> HnS <span className={classes.span1}>)</span>. As such, we invest
                                            heavily in these areas. We maintain technical laboratorys <span className={classes.span1}>(</span> facilities <span className={classes.span1}>)</span> where we test feasibility of designs before transferring to site.
                                            We maintain same for the training and specialty enhancement of our dedicated employees.
                                            A strong sense of integrity is woven into the fabrics of the company. Our employees
                                            and management conduct themselves with high level of professional distinction and are
                                            honest in their dealings with others in both their daily lives and work.
                                            We are determined to develop and seek appropriate methods and technology to meet industry
                                            criteria and the valued requirements of our esteemed clients. These underscore our vision
                                            and mission...
                                        </p>
                                    </Typography>
                                    <Typography component="div" variant="body1">
                                        <div className={classes.head}>
                                            <h2>OUR VISION</h2>
                                            <hr className={classes.hr}/>
                                        </div>
                                        <p>
                                            Is to build and sustain a firm which focuses primarily on customers need
                                            by offering value for money pragmatic solution to construction challenges.
                                        </p>
                                        <p>
                                            To provide our employees the working space to individually and collectively
                                            provide customers with exceptional workmanship and professional integrity.
                                        </p>
                                    </Typography>
                                    <Typography component="div" variant="body1">
                                        <div className={classes.head}>
                                            <h2>OUR MISSION</h2>
                                            <hr className={classes.hr}/>
                                        </div>
                                        <p>
                                            To offer our  value customers the highest level of
                                            constructionat the least cost <span className={classes.span1}>(</span> Where value meet affordability <span className={classes.span1}>)</span>.
                                        </p>
                                        <p>
                                            To maintain the highest level of professionalism, integrity,
                                            honest and fairness in our relationship with our customers.
                                        </p>
                                    </Typography>
                                </Grid>
                                <Grid item lg={2} sm={2}>
                                <div className={classes.profile}>
                                    <div className = "image-wrapper">
                                        <VPACompany />
                                    </div>
                                </div>
                                </Grid>
                            </Grid>
                        </Typography>
                        {/* <Typography component="div">
                            <div className={classes.head}>
                                <h2>Company Statement</h2>
                                <hr className={classes.hr}/>
                            </div>
                            <Grid
                                spacing={2}
                                className="companyState"
                                direction="row"
                                justify="space-evenly"
                                alignItems="center"
                                container
                            >
                                <Grid item lg={5} sm={6} xs={12}>
                                    <Typography>
                                        <div className={classes.head}>
                                            <h2>Company Statement</h2>
                                            <hr className={classes.hr}/>
                                        </div>
                                        <p>
                                            Virtual Point Associates is an audit, tax and accounting
                                            firm incorporated in October 2008 as a privatepartnership.
                                            We are registered with the Institute of Chartered Accountants
                                            Ghana (ICAG), the Ghana Revenue Authority (GRA) as well as the
                                            Social Security and National Insurance Trust (SSNIT).
                                            We are currently rated as a category B1 firm by the ICAG
                                        </p>
                                        <ul>
                                            <li>
                                                Vision: To become the most respected and successful global management consultancy firm that
                                                helps our clients to realize their vision and to do so efficiently and effectively within the law.
                                            </li>
                                            <li>
                                                Mission statement: To offer first rate professional services to attract high valued clients and be
                                                the number one local firm within the African region in a commercially viable manner. This we
                                                hope to achieve by inspiring professional confidence in our team and clientele to see every
                                                problem as an opportunity and therefore surmountable. We have thus eliminated impossibility
                                                from our achievement vocabulary and maintain high ethical standards at all levels of engagement.
                                            </li>
                                        </ul>
                                    </Typography>
                                </Grid>
                                <Grid item lg={5}  sm={6} xs={12}>
                                <div className={classes.profile}>
                                    <div className = "image-wrapper">
                                            <CompanyStatement />
                                        <img
                                            className="profile-image"
                                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                                            alt="First slide"
                                        />
                                    </div>
                                </div>
                                </Grid>
                            </Grid>
                        </Typography> */}
                    </Container>
                    {/* <br />
                    <ParallaxCon />
                    <br />
                    <Container maxWidth="lg">
                        <Typography component="div">
                            <Grid container>
                                <Grid item lg={1} sm={1} />
                                <Grid item lg={10} sm={10} xs={12}>
                                    <Typography>
                                        <div className={classes.head}>
                                            <h2>Company Statement</h2>
                                            <hr className={classes.hr}/>
                                        </div>
                                        <p className="pHome">
                                            When you engage Virtual Point Associates in either a consulting service or outright outsourcing, be 
                                            assured that:
                                        </p>
                                        <ul className="liHome">
                                            <li>
                                                Our services will be performed efficiently and delivered on time.
                                            </li>
                                            <li>
                                                Client questions and needs are addressed promptly and efficiently
                                            </li>
                                            <li>
                                                Our services are result oriented, designed to help you achieve your vision.
                                            </li>
                                            <li>
                                                We will handle all aspects of client relationships with honesty, integrity and confidentiality.
                                            </li>
                                            <li>
                                                Our policy is to service our client needs in a professional manner and at competitive fees
                                            </li>
                                            <li>
                                                Our policy is to service our client needs in a professional manner and at competitive fees
                                            </li>
                                        </ul>
                                    </Typography>
                                </Grid>
                                <Grid item sm={1} lg={1} />
                            </Grid>
                        </Typography>
                    </Container> */}
                    {/* <Container className={classes.contactContainer}>
                        <Grid container className={classes.contact}>
                            <Grid item xs={12}>
                                    <div className={classes.head}>
                                        <h2>Contacts/Loaction</h2>
                                        <hr className={classes.hr}/>
                                    </div>
                                <Grid container justify="center" spacing={2}>
                                    <Grid item>
                                        <a href="3" className="twitter">
                                            <Tooltip title="Twiter" placement="left-start">
                                                <Button>
                                                    <Paper className={classes.paper}>
                                                        <Card  className={classes.root} variant="outlined">
                                                            <CardContent>
                                                                <Typography style={{ textAlign: 'center' }} component="div">
                                                                    <TwitterIcon style={{ fontSize: '90px' }} />
                                                                </Typography>
                                                                {/* <Typography component="div">
                                                                    <CardActions>
                                                                        <Button size="small"></Button>
                                                                    </CardActions>
                                                                </Typography>
                                                            </CardContent>
                                                        </Card>
                                                    </Paper>
                                                </Button>
                                            </Tooltip>
                                        </a>
                                    </Grid>
                                    <Grid item>
                                        <a href="no" className="facebook">
                                            <Tooltip title="Facebook" placement="top">
                                                <Button>
                                                    <Paper className={classes.paper}>
                                                        <Card  className={classes.root} variant="outlined">
                                                            <CardContent>
                                                                <Typography style={{ textAlign: 'center' }} component="div">
                                                                    <FacebookIcon style={{ fontSize: '90px' }} />
                                                                </Typography>
                                                                    <Typography component="div">
                                                                    <CardActions>
                                                                        <Button size="small"></Button>
                                                                    </CardActions>
                                                                </Typography>
                                                            </CardContent>
                                                        </Card>
                                                    </Paper>
                                                </Button>
                                            </Tooltip>
                                        </a>
                                    </Grid>
                                    <Grid item>
                                        <a href="tel:+233302817993" className="tel">
                                            <Tooltip title="Call us on (+233) 302 817 993 or Click to call"  placement="top">
                                                <Button>
                                                    <Paper className={classes.paper}>
                                                        <Card  className={classes.root} variant="outlined">
                                                            <CardContent>
                                                                <Typography style={{ textAlign: 'center' }} component="div">
                                                                    <CallIcon style={{ fontSize: '90px' }} />
                                                                </Typography>
                                                            </CardContent>
                                                        </Card>
                                                    </Paper>
                                                </Button>
                                            </Tooltip>
                                        </a>
                                    </Grid>
                                    <Grid item>
                                        <a href="no" className="email" >
                                            <Tooltip title="info@virtualpointassociates.com" placement="right-start">
                                                <Button>
                                                    <Paper className={classes.paper}>
                                                        <Card  className={classes.root} variant="outlined">
                                                            <CardContent>
                                                                <Typography style={{ textAlign: 'center' }} component="div">
                                                                    <EmailIcon style={{ fontSize: '90px', textAlign: 'center' }} />
                                                                </Typography>
                                                                <Typography component="div">
                                                                    <CardActions>
                                                                        <Button style={{ backgroundColor: yellow }} size="small">info@virtualpointassociates.com</Button>
                                                                    </CardActions>
                                                                </Typography>
                                                            </CardContent>
                                                        </Card>
                                                    </Paper>
                                                </Button>
                                            </Tooltip>
                                        </a>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container> */}
                    {/*<Typography>
                        <GoogleMap />
                    </Typography>*/}
                <br />
                <br />
            </Fragment>
        );
    }
}
home.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(home)