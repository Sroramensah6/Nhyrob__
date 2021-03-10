// import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
// import {  withStyles } from '@material-ui/core'
// import { Alert } from 'react-bootstrap'

// const styles = (theme) => ({
//     BOB: {
//         marginTop: 128,
//         height: '540px',
//         textAlign: 'center'
//     }
// })
// class pageNot extends Component {
//     render() {
//         const { classes } = this.props
//         return (
//             <Fragment>
//                     <div className={classes.BOB}>
//                         <Alert dismissible variant="danger">
//                             <div className="spacingAlert text-uppercase">
//                                 <Alert.Heading className="alert404"> 404 </Alert.Heading>
//                                 <Alert.Heading> error </Alert.Heading>
//                                 <Alert.Heading> page not found </Alert.Heading>
//                                 <Alert.Heading> The requested URL{" "}
//                                     <span className="text-danger">
//                                         {this.props.location.pathname}
//                                     </span> {" "} does not exist
//                                 </Alert.Heading>
//                             </div>
//                         </Alert>
//                     </div>
//             </Fragment>
//         )
//     }
// }

// pageNot.propTypes = {
//     classes: PropTypes.object.isRequired,
// }

// export default withStyles(styles)(pageNot)