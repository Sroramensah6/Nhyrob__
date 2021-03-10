import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import ProjectsPage from '../../util/headers/ServiceHeader';
import { Container, Typography, Grid, withStyles } from '@material-ui/core';
import '../../css/service.css'

const styles = (theme) => ({
    profile: {
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
        },
        '& .profile-image': {
            width: 400,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '20%'
        },
    },
    head: {
        textAlign:"center",
        paddingBottom: 60,
        '& hr': {
            maginBottom: '10px',
            border: 'none',
            width: '50%'
        },
    },
    headers: {
        width: '8%',
        fontSize: 16,
        fontWeight: 700,
        // color: theme.palette.primary.main,
        // backgroundColor: theme.palette.secondary.main
    },
    header: {
        width: '8.6%',
        fontSize: 16,
        fontWeight: 700,
        // color: theme.palette.primary.main,
        // backgroundColor: theme.palette.secondary.main
    },
    heade: {
        width: '10.3%',
        fontSize: 16,
        fontWeight: 700,
        // color: theme.palette.primary.main,
        // backgroundColor: theme.palette.secondary.main
    },
    contactContainer:{
        backgroundColor: '#fff',
        paddingBottom: 50
    },
    root: {
        minWidth: 275,
    },
    //card1:{
    //    paddingBottom: 40
    //},
    //card3:{
    //    paddingBottom: 23.8
    //},
    general: {
        left: '0%',
        fontSize: 16,
        width: '100%',
        fontWeight: 700,
        position: 'relative',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
    },
    design: {
        left: '0%',
        fontSize: 16,
        width: '100%',
        fontWeight: 700,
        position: 'relative',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
    },
    civil: {
        left: '0%',
        fontSize: 16,
        width: '100%',
        fontWeight: 700,
        position: 'relative',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
    },
    quantity: {
        left: '0%',
        fontSize: 16,
        width: '100%',
        fontWeight: 700,
        position: 'relative',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
    },
    project: {
        left: '0%',
        fontSize: 16,
        width: '100%',
        fontWeight: 700,
        position: 'relative',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    span1: {
        color: 'red',
    },
})

class service extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <ProjectsPage />
                <Container maxWidth='lg'>
                    <Typography component="div" style={{ textAlign: 'center'}} variant="body2">
                        <h4 className={classes.general}>GENERAL BUILDING CONTRACTORS</h4>
                    </Typography>
                    <Grid
                        className={classes.root}
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        container
                    >
                        <Grid item lg={11} sm={11} xs={12}>
                            <Typography variant="body2" component="div">
                                <p className={classes.header}>Introduction:</p>
                                <Container>
                                    <p>
                                        Building a house is a complicated process that involves knowledge of architectural design, building codes, zoning regulations and basic construction elements. A general building contractor oversees the construction of individual houses and
                                        multi-unit housing projects and remodeling of stores, malls, hotels and other commercial projects. In Ghana, before a firm can transact business in the construction industry, such firm must register and obtain a class certificate from the
                                        Ministry of Works and Housing, of which Nhyrob ltd has obtain a First Class <span className={classes.span1}>(</span> D1k1 <span className={classes.span1}>)</span> category.
                                    </p>
                                </Container>
                            </Typography>
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid
                        className={classes.root}
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        container
                    >
                        <Grid item lg={11} sm={11} xs={12}>
                            <Typography container variant="body2" component="div">
                                <p className={classes.headers}>Contracting:</p>
                                <Container>
                                    <p>
                                        A general building contractor finds, solicits bids from and schedules all of
                                        the subcontractors that are necessary to complete the project.As general building
                                        contractors, our prime objective is to oversee the day-to-day oversight ofa construction
                                        site, management of vendors and trades, and the communication of information to all involved
                                        parties throughout the course of a building project.
                                    </p>
                                </Container>
                            </Typography>
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid
                        className={classes.root}
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        container
                    >
                        <Grid item lg={11} sm={11} xs={12}>
                            <Typography container variant="body2" component="div">
                                <p className={classes.heade}>Responsibilities:</p>
                                <Container>
                                    <p>
                                        As general building contractors, we are responsible forproviding all material,
                                        labor, equipment <span className={classes.span1}>(</span> such as engineering vehicles, tools <span className={classes.span1}>)</span> and services necessary
                                        for the construction of the project. However, we often hires specialized sub-contractors
                                        to perform portions of the construction work. When using subcontractors, we take the sole
                                        responsibility for the quality of all work performed by any or all sub-contractors.
                                    </p>
                                </Container>
                            </Typography>
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid
                        className={classes.root}
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        container
                    >
                        <Grid item lg={11} sm={11} xs={12}>
                            <Typography container variant="body2" component="div">
                                <p className={classes.header}>Management:</p>
                                <Container>
                                    <p>
                                        A general building contractor is a manager responsible for the overall coordination of
                                        a project. Depending on the project delivery method, the contractor will submit a fixed
                                        price proposal or bid, cost plus price or an estimate and thus considers the cost of home,
                                        office overheads, general site conditions, materials, and equipment, as well as the cost of
                                        labor, to provide the client with a firm price for the project. A prerequisite part of our site
                                        management over the years has being Environment, Health and Safety <span className={classes.span1}>(</span> EHS <span className={classes.span1}>)</span> management for all our
                                        project.  Therefore, we employ a comprehensive Health and Safety Plan to govern the works, operatives
                                        and the environment on site. We also adhere to all regulations government agency responsible for enforcing
                                        health and safety legislation in Ghana.
                                    </p>
                                </Container>
                            </Typography>
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid
                        className={classes.root}
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        container
                    >
                        <Grid item lg={11} sm={11} xs={12}>
                            <Typography variant="body1" component="div">
                                <Typography style={{ textAlign: 'center'}}>
                                    <h4 className={classes.civil}>CIVIL ENGINEERING</h4>
                                </Typography>
                                <Container>
                                    <p>
                                        <b>Civil engineering</b> is a professional engineering discipline that deals with the design,
                                        construction, and maintenance of the physical and naturally built environment, including works
                                        such as residences, institutional buildings, roads, bridges, canals, dams, airports, sewerage systems,
                                        pipelines, and railways. Civil Engineering takes place in the public sector from municipal through to national
                                        governments, and in the private sector from individual homeowners through to international companies. Nhyrob ltd
                                        as Civil Engineers, we create, design, build, supervise, operate, construct, and maintain infrastructure projects and
                                        systems in the public and private sector, including roads, buildings, airports, tunnels, dams, bridges, irrigation projects,
                                        power plants and systems for water supply and sewage treatment. Our brand of civil engineering primarily focuses on converting
                                        a tract of land from one usage to another.  As Civil Engineers, we apply the principles of geotechnical engineering, structural
                                        engineering, environmental engineering, transportation engineering, coastal engineering and construction engineering to residential,
                                        commercial, and industrial and public works projects of all sizes and levels of construction.
                                    </p>
                                </Container>
                            </Typography>
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid
                        className={classes.root}
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        container
                    >
                        <Grid item lg={11} sm={11} xs={12}>
                            <Typography component="div" variant="body1">
                                <Typography style={{ textAlign: 'center'}}>
                                    <h4 className={classes.quantity}>QUANTITY SURVEYING SERVICES</h4>
                                </Typography>
                                <Container>
                                    <p>
                                        Provision of cost-value is a sine-qua-non for the construction industry.
                                        To address important aspect of the industry, we employ in-depth knowledge
                                        in cost management system from inception through the finishing point for projects,
                                        which enable clients to obtain value for money.
                                    </p>
                                    <p>The following are our expertise:</p>
                                    <ul class="list-pick">
                                        <li class="lis">
                                            <p><b>Developers Budget </b></p>
                                            <p>
                                                Quantity Surveyors foster developer’s agenda
                                                in obtaining budgets, which enables clients to establish the viability of the
                                                project in terms of profit and/or amount to be spent on land purchase.
                                            </p>
                                        </li>
                                        <li class="lis">
                                            <p><b>Cost Management </b></p>
                                            <p>
                                                We also conduct cost studies involving life cycle cost of the various materials/components
                                                to enable the architect to select suitable materials/components for the project. As Quantity
                                                Surveyors, we prepare, negotiate and analyze costs for tenders and contracts, and cost management/control
                                                of the project. Employing Comparable Estimate techniques to evaluation of Tenders and prepare tender report
                                                for recommendations.
                                            </p>
                                        </li>
                                        <li class="lis">
                                            <p><b>Value Engineering </b></p>
                                            <p>
                                                Nhyrob ltd, as quantity surveyors initiates value management system for projects to eradicate
                                                components that add cost but no value to the project.  Advising clients on a range of legal and contractual
                                                issues and valuing completed work and arranging for payments.
                                            </p>
                                        </li>
                                    </ul>
                                </Container>
                                <br/>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        className={classes.root}
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        container
                    >
                        <Grid item lg={11} sm={11} xs={12}>
                            <Typography variant="body1" component="div">
                                <Typography style={{ textAlign: 'center'}}>
                                    <h4 className={classes.design}>DESIGN SERVICES</h4>
                                </Typography>
                                    <p className={classes.header}>Introduction:</p>
                                    <Container>
                                        <p>
                                            Being a versatile company, we are answerable to various needs of Clients.
                                            Nhyrob ltd aim to make an effective architectural design response to
                                            Clients by providing accurate outline proposal for the Client’s approval,
                                            finalizingthe outline proposals and providing information for the preparation
                                            of preliminary budget estimate and cost plan and making presentations to Client’s technical team.
                                        </p>
                                        <p>
                                            Nhyrob ltd Design Team is very capable of developing final scheme designs,
                                            incorporating input of Technical Professionals, showing special arrangement, materials
                                            and technical specifications to Client’s Technical Team for approval prior to preparation
                                            of working drawings. Also, we inculcate the services of Consulting Planners, Building Control,
                                            Fire and Environment Authority and Utility Providers where relevant. Moreover, we develop and administer
                                            all contractual framework under the building industry over the world. Coordination of the works from the
                                            inception to conception is exceptional which beef-up our commitment in resolving contractual conflicts/disputes.
                                            Our compliance to local and international building regulations cannot be underestimated. We employ adequate feasibility
                                            studies, pre-construction planning and documentations, and maintenance and operating manual to our projects and other related services.
                                        </p>
                                    </Container>
                            </Typography>
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid
                        className={classes.root}
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        container
                    >
                        <Grid item lg={11} sm={11} xs={12}>
                            <Typography variant="body1" component="div">
                                <Typography style={{ textAlign: 'center'}}>
                                    <h4 className={classes.project}>PROJECT MANAGEMENT SERVICES</h4>
                                </Typography>
                                <p className={classes.header}>Introduction:</p>
                                <Container>
                                    <p>
                                        Project management <span className={classes.span1}>(</span> PM <span className={classes.span1}>)</span> is a professional service that uses specialized management
                                        techniques to oversee the planning, design, and construction of a project, from its beginning to its end.
                                    </p>
                                    <p>
                                        Nhyrob ltd performing this task make project management very practicable as
                                        to control time, cost and quality in all project delivery process, which includes
                                        Design-Bid-Build, Design-Build for Commercial Real Estate, Transportation Infrastructure,
                                        Industrial Facilities, Hospitals Facilities, Town Planning and Environmental, Health and
                                        Safety <span className={classes.span1}>(</span> EHS <span className={classes.span1}>)</span> Assessment in Public-Private Partnerships Agreement.
                                    </p>
                                    <p>
                                        As Project Managers, our philosophy has been working tirelessly to achieve maximum satisfaction
                                        for clients. In achieving our aim, we employ the following techniques, which has been our hallmark
                                        over the past Ten <span className={classes.span1}>(</span> 10 <span className={classes.span1}>)</span> years:
                                    </p>
                                    <ul class="list-pick">
                                        <li class="lis">
                                            <p>
                                                Specifying project objectives and plans including description of scope, budgeting, scheduling,
                                                setting performance requirements, and selecting project participants.
                                            </p>
                                        </li>
                                        <li class="lis">
                                            <p>
                                                Maximizing the resource efficiency through procurement of labor, materials and equipment
                                            </p>
                                        </li>
                                        <li class="lis">
                                            <p>
                                                Developing effective communications and mechanisms for resolving conflicts
                                            </p>
                                        </li>
                                    </ul>
                                    <p>
                                        Our Professional construction managers have had lengthy and/or undertaking large-scale, high
                                        budget projects in Ghana and outside the shores Ghana.
                                    </p>
                                </Container>
                                <br/>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <br />
                <br />
            </Fragment>

        );
    }
}

service.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(service)