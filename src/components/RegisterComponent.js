import React, { Component} from 'react';
import { Form, FormGroup, InputGroup, Button, Container, Navbar } from 'react-bootstrap';
import "tabler-react/dist/Tabler.css";
import { Link } from 'react-router-dom';
import logo from '../images/logo-color.svg';

// CAN SEE FULLNAME, EMAIL, PASSWORD AND CONFIRM PASSWORD IN ADDRESS BAR ** MUST FIX //

class TenantRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                {/* Sign Up Form */}
                <Container className="mt-5 pt-5">
                    <Form className="form-signin">
                        <Container className="mb-5 text-center">
                            <Link to="/home"><a href=""><img src={logo} height="100" width="100" alt="company logo" /></a></Link>
                        </Container>
                        <h2 className="text-center mb-1">Welcome to Alula</h2>
                        <p className="lead text-center text-muted mb-5">Property Management Done Right!</p>
                        <Container className="p-5">
                            <p className="lead">Create New Account</p>
                            <FormGroup>
                                <Form.Label htmlFor="fullName">Full Name</Form.Label>
                                <Form.Control type="text" id="fullName" name="fullName"
                                    innerRef={input => this.fullName = input} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control type="email" id="email" name="email"
                                    innerRef={input => this.email = input} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <Container className="text-center">
                                <Link to="/user-select" className="btn btn-lg btn-success my-4">Sign Up</Link>
                                <br />
                                <Link to="/login" className="button">Have an Account? Sign In Here</Link>
                            </Container>
                        </Container>
                    </Form>
                </Container>
                {/* END Register Form */}

                {/* Footer */}
                <Container>
                    <Navbar fixed="bottom">
                        <p class="mt-5 mb-3 text-muted">© 2020 Alula. All rights reserved.</p>
                    </Navbar>
                </Container>
                {/* END Footer */}
            </React.Fragment>
        );
    }
}

export default TenantRegister;