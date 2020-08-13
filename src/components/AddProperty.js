import React, { Component } from 'react';
import { Navbar, Container, Tab } from 'react-bootstrap';
import { Nav, Form, Table, Button } from 'tabler-react';
import "tabler-react/dist/Tabler.css";

class AddProperty extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                {/* Navigation Bar */}
                <Navbar className="mx-5">
                    <Nav>
                        <Nav.Item to="/dashboard" value="back" icon="arrow-left" />
                    </Nav>
                </Navbar>
                {/* END Navigation Bar */}

                {/* Add Property Form */}
                <Container className="mt-5">
                    <h1 className="display-4 my-5 p-5">My Properties</h1>
                    <div className="m-5">
                        <p className="lead"></p>
                        <Container className="text-center">
                            <Form.FieldSet>
                                <Table >
                                    <thead>
                                        <tr>
                                            <th className="text-center">Property Address</th>
                                            <th className="text-center">Rental Rate</th>
                                            <th className="text-center">Current Revenue</th>
                                            <th className="text-center">Current Loses</th>
                                            <th className="text-center">Leased</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pt-3-half" contentEditable="true"></td>
                                            <td className="pt-3-half" contentEditable="true"></td>
                                            <td className="pt-3-half" contentEditable="true"></td>
                                            <td className="pt-3-half" contentEditable="true"></td>
                                            <td className="pt-3-half">
                                                <Form.Group className="mb-0">
                                                    <Form.SelectGroup>
                                                        <Form.SelectGroupItem
                                                            label="Leased"
                                                            name="status"
                                                            value="leased"
                                                        />
                                                        <Form.SelectGroupItem
                                                            label="Vacant"
                                                            name="status"
                                                            value="vacant"
                                                        />
                                                    </Form.SelectGroup>
                                                </Form.Group>
                                            </td>
                                            <td className="pt-3-half">
                                                <span class="table-remove">
                                                    <button type="button" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Form.FieldSet>
                        </Container>
                    </div>
                </Container>
                {/* END Add Property Form */}
                {/* Add New Property Button */}
                <Container className="m-5 p-5 d-flex justify-content-end">
                    <button className="lead add-prop" href=""><i class="fas fa-plus mr-3"></i>Add Property</button>
                </Container>
                {/* END Add New Property Button */}
                {/* Save Changes Button */}
                <Container className="pt-5 mt-5">
                    <button className="m-5 btn btn-lg btn-primary">Save Changes</button>
                </Container>
                {/* END Save Changes Button */}
            </React.Fragment>
        );
    }
    
}

export default AddProperty;
    