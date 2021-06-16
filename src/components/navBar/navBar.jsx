import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";

const config = require('../../config');
class NavigationBar extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>
                    <img src="https://m.media-amazon.com/images/G/01/AlexaDevPortal/favicon-32x32._CB1544644721_.png"
                         alt="Alexa Catalog Portal"
                    />{' '}
                    Michale has shared a routine with you!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Badge pill variant="success">
                            Customer ID is {config.customerId}
                        </Badge>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar;