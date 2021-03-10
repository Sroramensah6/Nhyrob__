import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom'
// Util
import Logo from '../../util/nav/logo'
//Mui
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    },
    Icon: {
        color: theme.palette.secondary.main
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: 8,
        paddingBottom: 16,
    },
    text: {
        color: '#1c2025'
    }
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar)}
            >
                <Toolbar className={classes.toolbar}>
                    <Logo />
                    <List>
                        <ListItem component={Link} to="/" button>
                            <ListItemIcon><HomeIcon className={`${ classes.Icon}`}/></ListItemIcon>
                            <ListItemText className={`${ classes.text}`}>Home</ListItemText>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem component={Link} to="/service" button>
                            <ListItemIcon><BuildIcon className={`${ classes.Icon}`}/></ListItemIcon>
                            <ListItemText className={`${ classes.text}`}>Service</ListItemText>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem component={Link} to="/gallery" button>
                            <ListItemIcon><PhotoAlbumIcon className={`${ classes.Icon}`}/></ListItemIcon>
                            <ListItemText className={`${ classes.text}`}>Gallery</ListItemText>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem component={Link} to="/clients" button>
                            <ListItemIcon><GroupIcon className={`${ classes.Icon}`} /></ListItemIcon>
                            <ListItemText className={`${ classes.text}`}>Clients</ListItemText>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem component={Link} to="/contact-us" button>
                            <ListItemIcon><ChromeReaderModeIcon className={`${ classes.Icon}`} /></ListItemIcon>
                            <ListItemText className={`${ classes.text}`}>Contact</ListItemText>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
        </div>
    );
}