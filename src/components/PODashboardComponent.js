import React, { Component } from 'react';
import { Navbar, Container, Pagination } from 'react-bootstrap';
import { Nav, Table, Button, Dropdown, Badge } from 'tabler-react';
import "tabler-react/dist/Tabler.css";


import logo from '../images/logo-color.svg';

class PODashboard extends Component {
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
                                <Nav.Item active value="Dashboard" icon="activity" />
                                <Nav.Item hasSubNav value="Settings" icon="settings">
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

                {/* Overview Table */}
                <Container className="mt-5">
                    <h1 className="display-4 py-5 my-5">Dashboard</h1>
                    <div className="card">
                        <p className="lead m-3">Overview</p>
                        <div className="table-responsive">
                            <div className="container text-center">
                                <Table>
                                    <Table.Header>
                                        <Table.ColHeader>Total Properties Managed</Table.ColHeader>
                                        <Table.ColHeader>Total Revenue</Table.ColHeader>
                                        <Table.ColHeader>Total Loses</Table.ColHeader>
                                        <Table.ColHeader>Total Service Requests</Table.ColHeader>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Col>Properties Managed Prop</Table.Col>
                                            <Table.Col>Total Revenue Prop</Table.Col>
                                            <Table.Col>Total Loses</Table.Col>
                                            <Table.Col>Total Service Requests</Table.Col>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* END Overview Table */}

                {/* Service Request Table - Needs Pagination */}
                <Container className="mt-5">
                    <div className="card">
                        <div className="d-flex">
                            <p className="lead m-3">Service Requests</p>
                            <Badge color="success" className="badge m-4">
                                New
                            </Badge>
                        </div>
                        <div className="table-responsive">
                            <div className="container text-center">
                                <Table>
                                    <Table.Header>
                                        <Table.ColHeader>Property</Table.ColHeader>
                                        <Table.ColHeader>Request Type</Table.ColHeader>
                                        <Table.ColHeader>Created</Table.ColHeader>
                                        <Table.ColHeader>Message</Table.ColHeader>
                                        <Table.ColHeader>Completed</Table.ColHeader>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Col><a href="">Property Prop</a></Table.Col>
                                            <Table.Col>Request Type Prop</Table.Col>
                                            <Table.Col>Created</Table.Col>
                                            <Table.Col>Message Prop</Table.Col>
                                            <Table.Col>Completion Prop</Table.Col>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                        <div className="container d-flex justify-content-center">
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </div>
                    </div>
                </Container>
                {/* END Service Request Table */}

                {/* Property Table - Needs pagination. Needs function to add more properties (modal) or delete properties. Will integrate with the mobile app to record revenue, payments and losses. */}
                <Container className="mt-5">
                    <div className="card">
                        <div className="d-flex justify-content-between">
                            <p className="lead m-3">Properties</p>
                            <button className="btn btn-sm btn-success m-3"><i class="fas fa-plus mr-2"></i>Add Property</button>
                        </div>
                        <div className="table-responsive">
                            <div className="container text-center">
                                <Table>
                                    <Table.Header>
                                        <Table.ColHeader>ID</Table.ColHeader>
                                        <Table.ColHeader>Property</Table.ColHeader>
                                        <Table.ColHeader>Revenue</Table.ColHeader>
                                        <Table.ColHeader>Losses</Table.ColHeader>
                                        <Table.ColHeader>Status</Table.ColHeader>
                                        <Table.ColHeader>Action</Table.ColHeader>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Col><a href="">ID Prop</a></Table.Col>
                                            <Table.Col>Property Prop</Table.Col>
                                            <Table.Col>Revenue Prop</Table.Col>
                                            <Table.Col>Losses Prop</Table.Col>
                                            <Table.Col>Status Prop</Table.Col>
                                            <Table.Col>
                                                <Button className="btn btn-sm btn-danger"><i class="fas fa-minus"></i></Button>
                                            </Table.Col>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                        <div className="container d-flex justify-content-center">
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </div>
                    </div>
                </Container>
                {/* END Property Table */}

                {/* Invoices Table - Needs Pagination. Invoices can be opened in printable PDF */}
                <Container className="mt-5">
                    <div className="card">
                        <div className="d-flex">
                            <p className="lead m-3">Invoices</p>
                            <Badge color="success" className="badge m-4">
                                New
                            </Badge>
                        </div>
                        <div className="table-responsive">
                            <div className="container text-center">
                                <Table>
                                    <Table.Header>
                                        <Table.ColHeader>No.</Table.ColHeader>
                                        <Table.ColHeader>Subject</Table.ColHeader>
                                        <Table.ColHeader>Client</Table.ColHeader>
                                        <Table.ColHeader>Created</Table.ColHeader>
                                        <Table.ColHeader>Status</Table.ColHeader>
                                        <Table.ColHeader>Amount</Table.ColHeader>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Col><a href="">Invoice Prop</a></Table.Col>
                                            <Table.Col>Subject Prop</Table.Col>
                                            <Table.Col>Client</Table.Col>
                                            <Table.Col>Created</Table.Col>
                                            <Table.Col>Status Prop</Table.Col>
                                            <Table.Col>Amount Prop</Table.Col>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                        <div className="container d-flex justify-content-center">
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </div>
                    </div>
                </Container>
                {/* END Invoices Table */}

                {/* Footer */}
                    <Container>
                        <Navbar>
                            <p class="mt-5 mb-3 text-muted">© 2020 Toomer Ltd. All rights reserved.</p>
                        </Navbar>
                    </Container>
                {/* END Footer */}
            </React.Fragment>
        );
    }
}

export default PODashboard;