import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Header extends Component {

    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
                    <NavbarToggler onClick={ this.toggle }/>
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/blog/">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about/">Über mich</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/imprint/">Impressum</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
