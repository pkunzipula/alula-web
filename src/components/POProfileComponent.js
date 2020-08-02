import React, { Component } from 'react';
import { Navbar, Container, Pagination } from 'react-bootstrap';
import { Nav, Button, Dropdown, Form } from 'tabler-react';
import "tabler-react/dist/Tabler.css";


import logo from '../images/logo-color.svg';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                {/* Navigation Bar */}
                <Container>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home" className="ml-5">
                            <img 
                                src={logo}
                                height="55px"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                            <Nav.Item value="Dashboard" icon="activity" />
                                <Nav.Item hasSubNav active value="Settings" icon="settings">
                                    <Nav.SubItem value="Profile" icon="user" />
                                    <Dropdown.ItemDivider />
                                    <Nav.SubItem value="Help" icon="help-circle" />
                                    <Nav.SubItem value="Sign Out" icon="log-out" />
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
                {/* END Navigation Bar */}

                {/* Content Container */}

                {/* Edit Profile */}
                <Container classname="mt-5">
                    <h1 className="display-4 my-5 p-5">Profile</h1>
                    <div className="m-5">
                        <p className="lead">Edit Profile</p>
                        <div>
                            <Form.FieldSet>
                                <Form.Group label="Update Name" isRequired>
                                    <Form.Input name="update-name" />
                                </Form.Group>
                                <Form.Group label="Update Email" isRequired>
                                    <Form.Input name="update-email" />
                                </Form.Group>
                                <Form.Group label="Update Password" isRequired>
                                    <Form.Input name="update-password" />
                                </Form.Group>
                                <Form.Group label="Phone number" isRequired>
                                    <Form.MaskedInput 
                                        name="update-phone-number" 
                                        placeholder="(555)555-5555"
                                        mask={["(", /\d/, /\d/, /\d/, ")", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
                                    />
                                </Form.Group>
                                <button type='submit' value='Submit' class="btn btn-primary">Update Profile</button>
                            </Form.FieldSet>
                        </div>
                    </div>
                </Container>
                {/* END Edit Profile */}

                {/* Update Payment Method */}
                <Container className="mt-5">
                    <div className="m-5">
                        <p className="lead">Update Payment Method</p>
                        <div>
                            <Form.FieldSet>
                                <Form.Group label="Account Holder's Name" isRequired>
                                    <Form.Input name="update-acc-name" />
                                </Form.Group>
                                <Form.Group label="Routing Number" isRequired>
                                    <Form.Input name="update-routing-number" />
                                </Form.Group>
                                <Form.Group label="Account Number" isRequired>
                                    <Form.Input name="update-account-number" />
                                </Form.Group>
                                <Form.Group label="Address" isRequired>
                                    <Form.Input name="update-address" className="mb-4" placeholder="Address" />
                                    <Form.Input name="update-city" className="mb-4" placeholder="City" />
                                    <Form.Input name="update-state" className="mb-4" placeholder="State" />
                                    <Form.MaskedInput 
                                        name="update-zipcode"
                                        placeholder="Zip Code"
                                        mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
                                    />
                                </Form.Group>
                                <button type='submit' value='Submit' class="btn btn-primary">Update Payment Method</button>
                            </Form.FieldSet>
                        </div>
                    </div>
                </Container>
                {/* END Update Payment Method */}

                {/* Preferences */}
                <Container className="mt-5">
                    <div className="m-5">
                        <p className="lead">Preferences</p>
                        <Form.FieldSet>
                            <Form.Group className="my-3" label="Email Preferences">
                                <Form.Switch type="radio" name="invoice-opt" value="invoice-opt" label="Receive Invoice Notifications via Email" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Switch type="radio" name="service-opt" value="service-opt" label="Receive Service Requests Notifications via Email" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Switch type="radio" name="month-statement-opt" value="month-statement-opt" label="Receive Montly Statement via Email" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Switch type="radio" name="tax-statement-opt" value="month-statement-opt" label="Receive a copy of your Schedule E 1040 via Email" />
                            </Form.Group>
                        </Form.FieldSet>
                    </div>
                </Container>
                {/* END Preferences */}

                {/* Privacy and Policy */}
                <Container className="mt-5">
                    <div className="m-5">
                        <p class="lead">Privacy and Policy</p>
                        <Form.FieldSet>
                            <Form.Group>
                                <a href="">Privacy Policy</a>
                            </Form.Group>
                            <Form.Group>
                                <a href="">Terms & Conditions</a>
                            </Form.Group>
                            <hr />
                            <Form.Group>
                                <a href="" className="red">Delete Account</a>
                                {/* NEEDS MODAL TO CONFIRM DELETE */}
                            </Form.Group>

                        </Form.FieldSet>
                    </div>
                </Container>

                {/* END Privacy and Policy */}
                
                {/* END Content Container */}

                {/* Footer */}
                <Container>
                        <Navbar>
                            <p class="mt-5 mb-3 text-muted">© 2020 Alula Ltd. All rights reserved.</p>
                        </Navbar>
                    </Container>
                {/* END Footer */}
            </React.Fragment>
        );
    }
}

export default Profile;