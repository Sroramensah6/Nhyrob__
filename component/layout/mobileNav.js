import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom'
// Util
import logo from '../../assets/img/logo/nyrob.jpg'
import Logo from '../../util/nav/logo'
//Mui
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import BuildIcon from '@material-ui/icons/Build';

const drawerWidth = 240;

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
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    Icon: {
        color: theme.palette.secondary.main
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: '9999'
    },
    drawerPaper: {
        width: drawerWidth,
        zIndex: '9999'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        zIndex: '9999'
    },
    drawerText: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 3),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: 8,
        paddingBottom: 16,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
    text: {
        color: '#1c2025'
    }
}));

export default function NavBar() {
    const classes = useStyles();
    //const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [`appBarShi ${classes.appBarShift}`]: open,
                })}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        onKeyDown={handleDrawerClose}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                onClick={handleDrawerClose}
            >
                <div className={classes.drawerHeader}>
                    <IconButton color="secondary" onClick={handleDrawerClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <Divider />
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
                        <ListItemText className={`${ classes.text}`}>Contact Us</ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List>
                <Typography className={classes.title} variant="h5" noWrap>
                    <div className={classes.navlogo}>
                        <div className="navlogo-wrapper">
                            <img className="navlogo-image" src={logo} alt="logo" />
                        </div>
                    </div>
                </Typography>
                </List>
            </Drawer>
        </div>
    );
}