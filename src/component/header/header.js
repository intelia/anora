import React, { Component } from 'react';
import { Dropdown, } from 'react-bootstrap';
class Header extends Component {
    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="container-fluid">
                        <div className="col-md-1 col-sm-2 col-xs-12">
                            <div className="top-logo">
                                <img src="img/logo.png" />
                            </div>
                        </div>

                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="top-search">
                                <input placeholder="" tabIndex="101" type="text" defaultValue="" name="bbp_search" id="bbp_search" />
                                <button tabIndex="102" type="submit" id="bbp_search_submit" value="Search">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-2 col-xs-12">
                            <div className="top-my-account">

                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <img src="http://www.glacell.se/wp-content/uploads/2017/02/John-Doe.jpg" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Lorem Ipsum</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Ipsum Doler</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Doler Sit Amet</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header; 
