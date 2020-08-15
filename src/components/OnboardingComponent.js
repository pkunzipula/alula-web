import React, { Component} from 'react';
import { FormGroup, Container, Navbar } from 'react-bootstrap';
import { Nav, Form } from 'tabler-react';
import "tabler-react/dist/Tabler.css";
import { Link } from 'react-router-dom';
import logo from '../images/logo-color.svg';

// CAN SEE FULLNAME, EMAIL, PASSWORD AND CONFIRM PASSWORD IN ADDRESS BAR ** MUST FIX //

class Onboarding extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                {/* Header */}
                    {/* Navigation Bar */}
                    <Navbar className="mx-5">
                        <Nav>
                            <Nav.Item to="/user-select" value="back" icon="arrow-left" />
                        </Nav>
                    </Navbar>
                    {/* END Navigation Bar */}
                    {/* Logo */}
                        <Container className="mb-5 text-center">
                            <Link to="/home"><a href=""><img src={logo} height="100" width="100" alt="company logo" /></a></Link>
                        </Container>
                        <h2 className="text-center mb-1">Welcome to Alula</h2>
                        <p className="lead text-center text-muted pb-5 mb-5">Property Management Done Right!</p>
                    {/* END Logo */}
                    {/* Stepper */}
                    {/* END Stepper */}
                {/* END Header */}

                {/* Onboarding Form */}
                <Container className="mt-5">
                    <div className="m-5">
                        <p className="lead mb-5">A little onboarding never hurt anyone...</p>
                        <div>
                            {/* User Information */}
                            <Form.FieldSet>
                                <Form.Group label="Full Name" isRequired>
                                    <Form.Input 
                                        name="full-name"
                                        placeholder="Full Name"
                                        type="text"
                                    />
                                </Form.Group>
                                <Form.Group label="Email" isRequired>
                                    <Form.Input 
                                        name="email"
                                        placeholder="Email..."
                                    />
                                </Form.Group>
                                <Form.Group label="Password" isRequired>
                                    <Form.Input 
                                        name="password" 
                                        type="password"
                                        placeholder="Password..."
                                    />
                                </Form.Group>
                                <Form.Group label="Address" isRequired>
                                    <Form.Input name="address" className="mb-4" placeholder="Address" />
                                    <Form.Input name="city" className="mb-4" placeholder="City" />
                                    <Form.Input name="state" className="mb-4" placeholder="State" />
                                    <Form.MaskedInput 
                                        name="zipcode"
                                        placeholder="Zip Code"
                                        mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
                                    />
                                </Form.Group>
                                <Form.Group className="mt-2" label="Phone number" isRequired>
                                    <Form.MaskedInput 
                                        name="update-phone-number" 
                                        placeholder="(555)555-5555"
                                        mask={["(", /\d/, /\d/, /\d/, ")", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
                                    />
                                </Form.Group>
                            </Form.FieldSet>
                            {/* END User Information */}

                            {/* Payment Information */}
                            <Form.FieldSet>
                                <p className="small mt-3 mb-5">Enter the account to which you wish to receive rental payments as well as pay your monthly fee for this service.</p>
                                <Form.Group label="Account Holder's Name" isRequired>
                                    <Form.Input name="account-name" />
                                </Form.Group>
                                <Form.Group label="Routing Number" isRequired>
                                    <Form.MaskedInput 
                                        name="routing-number" 
                                        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                                    />
                                </Form.Group>
                                <Form.Group label="Account Number" isRequired>
                                    <Form.MaskedInput 
                                        name="account-number" 
                                        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                                    />
                                </Form.Group>
                                <p className="small my-4">We use your Tax Payer ID to keep you tax compliant and help you file your taxes when ready.</p>
                                <Form.Group label="Tax Payer ID" isRequired>
                                    <Form.Input name="tax-payer-id" />
                                </Form.Group>
                            </Form.FieldSet>
                            {/* END Payment Information */}

                            <div className="row">
                                <div className="col-12">
                                    <p className="small mb-3">By continuing, you agree to Alula's <span><Link href="">Terms & Conditions</Link></span></p>
                                </div>
                                <div className="col-12">
                                    <Link type='submit' value='Submit' class="btn btn-primary" to="/add-property">Next Step: Add Properties</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* END Onboarding Form */}

                {/* Footer */}
                <Container>
                    <Navbar>
                        <p class="mt-5 mb-3 text-muted">© 2020 Alula. All rights reserved.</p>
                    </Navbar>
                </Container>
                {/* END Footer */}
            </React.Fragment>
        );
    }

}

export default Onboarding;