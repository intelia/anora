import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
class SideBar extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-4">
                <div className="profile-main-avatar">
                    <div className="profile-avatar-image">
                        <img src="http://www.glacell.se/wp-content/uploads/2017/02/John-Doe.jpg" />
                    </div>

                    <div className="profile-avatar-content">
                        <h4>James Harrington</h4>
                        <h5>james@somecompany.com</h5>
                        <Link >Edit</Link>
                    </div>

                    <div className="profile-main-list">

                        <div className="sideMenu">
                           
                            <NavLink to={"/mySaves"} activeClassName="active">
                            <i className="fa fa-floppy-o" aria-hidden="true"></i>
                            My Saves
                            </NavLink>
                            <NavLink to={"/ChangePassword"} activeClassName="active">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                                Change Password
                            </NavLink>
                            <NavLink to={"/Billing"} activeClassName="active">
                                <i className="fa fa-credit-card" aria-hidden="true"></i>
                                Billing
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar; 
