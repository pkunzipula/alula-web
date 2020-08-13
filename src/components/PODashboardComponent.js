import React, { Component } from 'react';
import { Navbar, Container, Pagination } from 'react-bootstrap';
import { Nav, Table, Dropdown, Badge, Form } from 'tabler-react';
import { Link } from 'react-router-dom';
import "tabler-react/dist/Tabler.css";

import logo from '../images/logo-color.svg';

// JSON DATA
import { OVERVIEW } from '../shared/overview';
import { SERVICEREQUEST } from '../shared/serviceRequest';
import { PROPERTY } from '../shared/property';
import { INVOICES } from '../shared/invoices';

class PODashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overview: OVERVIEW,
            serviceRequests: SERVICEREQUEST,
            properties: PROPERTY,
            invoices: INVOICES
        }
    }

    renderOverviewTableData() {
        return this.state.overview.map((overview) => {
            const { propsMangaged, totRevenue, totLoses, totServiceRequests } = overview
            return (
                <Table.Row>
                    <Table.Col><strong>{propsMangaged}</strong></Table.Col>
                    <Table.Col><strong>${totRevenue}</strong></Table.Col>
                    <Table.Col><strong>${totLoses}</strong></Table.Col>
                    <Table.Col><strong>{totServiceRequests}</strong></Table.Col>
                    <Table.Col> 
                        <a href=""><i class="fas fa-print mr-2"></i>Print Tax Form</a>
                    </Table.Col>
                </Table.Row>
            )
        })
    }

    renderServiceRequestTableData() {
        return this.state.serviceRequests.map((serviceRequests) => {
            const { property, created } = serviceRequests
            return(
                <Table.Row>
                    <Table.Col><a href="">{property}</a></Table.Col>
                    <Table.Col>{created}</Table.Col>
                    {/* <Table.Col>{message}</Table.Col> */}
                    <Table.Col>
                        <Form.Switch type="radio" name="1" value="1" />
                    </Table.Col>
                </Table.Row>
            )
        })
    }

    renderPropertyTableData() {
        return this.state.properties.map((properties) => {
            const { id, property, revenue, loses, status } = properties
            return(
                <Table.Row>
                    <Table.Col><a href="">{id}</a></Table.Col>
                    <Table.Col>{property}</Table.Col>
                    <Table.Col>${revenue}</Table.Col>
                    <Table.Col>${loses}</Table.Col>
                    <Table.Col>{status}</Table.Col>
                    <Table.Col>
                        <button className="del-prop">Delete</button>
                    </Table.Col>
                </Table.Row>
            )
        })
    }

    renderInvoiceTableData() {
        return this.state.invoices.map((invoices) => {
            const { number, property, created, status, amount } = invoices
            return(
                <Table.Row>
                    <Table.Col><a href="">{number}</a></Table.Col>
                    <Table.Col>{property}</Table.Col>
                    <Table.Col>{created}</Table.Col>
                    <Table.Col>{status}</Table.Col>
                    <Table.Col>{amount}</Table.Col>
                </Table.Row>
            )
        })
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
                                    <Nav.SubItem to="/profile" value="Profile" icon="user" />
                                    <Dropdown.ItemDivider />
                                    <Nav.SubItem value="Help" icon="help-circle" />
                                    <Nav.SubItem to="/home" value="Sign Out" icon="log-out" />
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
                                        <Table.ColHeader>Actions</Table.ColHeader>
                                    </Table.Header>
                                    <Table.Body>
                                        {this.renderOverviewTableData()}
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
                                        <Table.ColHeader>Created</Table.ColHeader>
                                        {/* <Table.ColHeader>Message</Table.ColHeader> */}
                                        <Table.ColHeader>Completed</Table.ColHeader>
                                    </Table.Header>
                                    <Table.Body>
                                        {this.renderServiceRequestTableData()}
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                        <div className="container d-flex justify-content-center">
                            {/* PAGINATION GOES HERE */}
                        </div>
                    </div>
                </Container>
                {/* END Service Request Table */}

                {/* Property Table - Needs pagination. Needs function to add more properties (modal) or delete properties. Will integrate with the mobile app to record revenue, payments and losses. */}
                <Container className="mt-5">
                    <div className="card">
                        <div className="d-flex justify-content-between">
                            <p className="lead m-3">Properties</p>
                            <Link className="btn btn-sm btn-success m-3" to="/add-property"><i class="fas fa-plus mr-2"></i>Add Property</Link>
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
                                        {this.renderPropertyTableData()}
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                        <div className="container d-flex justify-content-center">
                            {/* PAGINATION GOES HERE */}
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
                                        <Table.ColHeader>Client</Table.ColHeader>
                                        <Table.ColHeader>Created</Table.ColHeader>
                                        <Table.ColHeader>Status</Table.ColHeader>
                                        <Table.ColHeader>Amount</Table.ColHeader>
                                    </Table.Header>
                                    <Table.Body>
                                        {this.renderInvoiceTableData()}
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                        <div className="container d-flex justify-content-center">
                            {/* PAGINATION GOES HERE */}
                        </div>
                    </div>
                </Container>
                {/* END Invoices Table */}

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

export default PODashboard;