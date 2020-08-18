import React, { Component} from 'react';
import { Form, FormGroup, InputGroup, Button, Container, Navbar } from 'react-bootstrap';
import "tabler-react/dist/Tabler.css";
import { Link } from 'react-router-dom';

import logo from '../images/logo-color.svg';


// CAN SEE FULLNAME, EMAIL, PASSWORD AND CONFIRM PASSWORD IN ADDRESS BAR ** MUST FIX //

class UserSelect extends Component {
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
                    <Container className="mb-5 text-center">
                        <Link to="/home"><a href=""><img src={logo} height="100" width="100" alt="company logo" /></a></Link>
                    </Container>
                    <p className="lead text-center text-muted my-5">Quick Question...</p>
                    <p className="lead text-center my-5">What type of user are you?</p>
                    <Container className="p-5 d-flex justify-content-center">
                        <Link to="/onboarding" className="m-5 p-5 tile"> Landlord </Link>
                        <Link to="/register" className="m-5 p-5 tile"> Tenant </Link>
                    </Container>
                    <Container className="text-center">
                        <Link to="/login" className="button">Have an Account? Sign In Here</Link>
                    </Container>
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

export default UserSelect;