import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
// Util
import themeApp from './util/themeApp'
// Components
import NavBar from './component/layout/NavBar';
import Footer from './component/layout/Footer';
import home from './component/pages/home';
import service from './component/pages/service';
import gallarys from './component/pages/Gallarys';
import contactUs from './component/pages/ContactUs';
// import pageNot from './component/pages/pageNot';

// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import client from './component/pages/client';

const theme = createMuiTheme(themeApp)

axios.defaults.baseURL = 'https://europe-west3-vpas-832aa.cloudfunctions.net/api';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                {/*<Provider store={store}>*/}
                    <Router>
                        <NavBar />
                        <div className="container">
                            <Switch>
                                <Route exact path='/' component={home} />
                                <Route exact path='/service' component={service} />
                                <Route exact path='/gallery' component={gallarys} />
                                <Route exact path='/clients' component={client} />
                                <Route exact path='/contact-us' component={contactUs} />
                                {/* <Route component={pageNot} /> */}
                            </Switch>
                        </div>
                        <Footer />
                    </Router>
                {/*</Provider>*/}
            </MuiThemeProvider>
        )
    }
}

export default App;