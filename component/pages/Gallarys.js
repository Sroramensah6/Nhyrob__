import React, { Component,  Fragment } from "react";
import PropTypes from 'prop-types'
import Gallery from 'react-grid-gallery';
import { Container, Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
    gallery: {
        marginTop: 130,
    },
    general: {
        left: '0%',
        fontSize: 16,
        width: '100%',
        fontWeight: 700,
        position: 'relative',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
    },
})

class aboutUs extends Component {
    render() {
        const { classes } = this.props
        const IMAGES =
        [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/su3.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/su3.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Surgical Theatre", title: "Surgical Theatre"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/pla4.JPG?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/pla4.JPG?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Plastic Center", title: "Plastic Center"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/pla3.JPG?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/pla3.JPG?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Plastic Center", title: "Plastic Center"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/pla1.JPG?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/pla1.JPG?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Paediatric Theater", title: "Paediatric Theater"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/pa6.JPG?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/pa6.JPG?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                tags: [{value: "Paediatric Theater", title: "Paediatric Theater"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/pa4.JPG?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/pa4.JPG?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Plastic Center", title: "Plastic Center"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/pa11.JPG?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/pa11.JPG?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Surgical Center", title: "Surgical Center"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/la4.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/la4.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                tags: [{value: "Central Laundry", title: "Central Laundry"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/la3.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/la3.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Central Laundry", title: "Central Laundry"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/la2.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/la2.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Central Laundry", title: "Central Laundry"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/la1.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/la1.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                tags: [{value: "Central Laundry", title: "Central Laundry"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/kit5.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/kit5.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Central Kitchen", title: "Central Kitchen"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/hd3.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/hd3.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "HDU_ICU", title: "HDU_ICU"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/emb7.JPG?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/emb7.JPG?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/emb3.JPG?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/emb3.JPG?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/em1.JPG?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/em1.JPG?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/asuture.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/asuture.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/as2.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/as2.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Science laboratory", title: "Science laboratory"}, {value: "Asuture", title: "Asuture"}],
                caption: "Asuture"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/Untitled-2.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/Untitled-2.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Science laboratory", title: "Science laboratory"}, {value: "Asuture", title: "Asuture"}],
                caption: "Asuture"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/Untitled-1.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/Untitled-1.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                tags: [{value: "Science laboratory", title: "Science laboratory"}, {value: "Asuture", title: "Asuture"}],
                caption: "Asuture"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/IMG_5436 (Copy).JPG?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/IMG_5436 (Copy).JPG?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/IMG_4602_1600x1200.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/IMG_4602_1600x1200.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/IMG_4547_1600x1200.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/IMG_4547_1600x1200.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/hd5.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/hd5.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "HDU_ICU", title: "HDU_ICU"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/IMG_2415_12-18-2015_12-18-2015.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/IMG_2415_12-18-2015_12-18-2015.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/DSC_0196.JPG?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/DSC_0196.JPG?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                tags: [{value: "Paediatric Theater", title: "Paediatric Theater"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/20170301_112822.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/20170301_112822.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Plastic Center", title: "Plastic Center"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/20140220_082950.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/20140220_082950.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Paediatric Theater", title: "Paediatric Theater"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/20140210_092615.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/20140210_092615.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                tags: [{value: "Central Kitchen", title: "Central Kitchen"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/13.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/13.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/hd4.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/hd4.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "HDU_ICU", title: "HDU_ICU"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/hd1.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/hd1.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "HDU_ICU", title: "HDU_ICU"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/kit7.JPG?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/kit7.JPG?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Central Kitchen", title: "Central Kitchen"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/kit4.jpg?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/kit4.jpg?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                tags: [{value: "Central Kitchen", title: "Central Kitchen"}, {value: "Korle Bu Teaching Hospital", title: "Korle Bu Teaching Hospital"}],
                caption: "Korle Bu Teaching Hospital"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/emb5.JPG?alt=media",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/vpa-social.appspot.com/o/emb5.JPG?alt=media",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
            }
        ]
        return(
            <Fragment>
                <Typography component="div">
                    <Container>
                        <br/>
                        <br/>
                        <Typography  className={classes.gallery} style={{ textAlign: 'center'}} variant="body2">
                            <h4 className={classes.general}>Gallery</h4>
                        </Typography>
                        <div style={{
                        display: "block",
                        minHeight: "1px",
                        width: "100%",
                        border: "1px solid #ddd",
                        overflow: "auto"}}>
                            <Gallery images={IMAGES} enableImageSelection={false}/>
                        </div>
                    <br/>
                    <br/>
                    </Container>
                </Typography>
            </Fragment>
        )
    }
}
aboutUs.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(aboutUs)