import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MySave from './mySave/mySave';
import ChangePassword from './change-password/change-password';
import Billing from './billing/billing';
import Header from './header/header';
import SideBar from './sidebar/sidebar';
import Footer from './footer/footer';
import BarChart from './change-password/change-password';
class MainLayout extends Component {
    render() {
        return (
            <div>
                 <Header />
                <Router>
                    <div>
                    <section id="profile-main">
                    <div className="container">
                        <div className="row">
                            <SideBar />
                           <div>
                           <Switch>
                            <Route exact path="/" component={MySave} />
                            <Route  path="/mySaves" component={MySave} />
                            <Route path="/ChangePassword" component={ChangePassword} />
                            <Route path="/Billing" component={Billing} />
                        </Switch>
                            </div>
                        </div>
                    </div>
                </section>
                        
                    </div>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default MainLayout; 