import React, { Component } from 'react';
import { Navbar, Container, Pagination } from 'react-bootstrap';
import { Nav, Table, Button, Dropdown, Badge, Form } from 'tabler-react';
import "tabler-react/dist/Tabler.css";


import logo from '../images/logo-color.svg';
import { Link } from 'react-router-dom';

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
                                        <Table.Row>
                                            <Table.Col><strong>23</strong></Table.Col>
                                            <Table.Col><strong>$830,075</strong></Table.Col>
                                            <Table.Col><strong>$20,519</strong></Table.Col>
                                            <Table.Col><strong>13</strong></Table.Col>
                                            <Table.Col> 
                                                <Button className="btn btn-sm btn-success"><i class="far fa-file-alt mr-2"></i>File Taxes</Button>
                                            </Table.Col>
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
                                            <Table.Col><a href="">5612 Harmony Ave</a></Table.Col>
                                            <Table.Col>Repair</Table.Col>
                                            <Table.Col>08/02/20</Table.Col>
                                            <Table.Col>Water heater has leaked all over the floor.</Table.Col>
                                            <Table.Col>
                                                <Form.Switch type="radio" name="1" value="1" />
                                            </Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col><a href="">90210 Worst Show Blvd</a></Table.Col>
                                            <Table.Col>Repair</Table.Col>
                                            <Table.Col>07/20/20</Table.Col>
                                            <Table.Col>Air Conditioner is not working.</Table.Col>
                                            <Table.Col>
                                                <Form.Switch type="radio" name="2" value="2" />
                                            </Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col><a href="">5616 Pleasant Ave</a></Table.Col>
                                            <Table.Col>Replace</Table.Col>
                                            <Table.Col>07/01/20</Table.Col>
                                            <Table.Col>Microwave is busted</Table.Col>
                                            <Table.Col>
                                                <Form.Switch type="radio" name="3" value="3" />
                                            </Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col><a href="">789 Harambe Dr. #101</a></Table.Col>
                                            <Table.Col>Service</Table.Col>
                                            <Table.Col>04/31/20</Table.Col>
                                            <Table.Col>Can you change the locks. I lost the house key.</Table.Col>
                                            <Table.Col>
                                                <Form.Switch type="radio" name="4" value="4" />
                                            </Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col><a href="">10125 Reno Court</a></Table.Col>
                                            <Table.Col>Service</Table.Col>
                                            <Table.Col>02/10/20</Table.Col>
                                            <Table.Col>Changed carpets to laminate before new tenants move in.</Table.Col>
                                            <Table.Col>
                                                <Form.Switch type="radio" name="5" value="5" />
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
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
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
                                            <Table.Col><a href="">001</a></Table.Col>
                                            <Table.Col>5616 Pleasant Ave</Table.Col>
                                            <Table.Col>$7,200</Table.Col>
                                            <Table.Col>$0</Table.Col>
                                            <Table.Col>Leased</Table.Col>
                                            <Table.Col>
                                                <Button className="btn btn-sm btn-danger"><i class="fas fa-minus"></i></Button>
                                            </Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col><a href="">002</a></Table.Col>
                                            <Table.Col>5612 Harmony Ave</Table.Col>
                                            <Table.Col>$25,000</Table.Col>
                                            <Table.Col>$7,000</Table.Col>
                                            <Table.Col>Leased</Table.Col>
                                            <Table.Col>
                                                <Button className="btn btn-sm btn-danger"><i class="fas fa-minus"></i></Button>
                                            </Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col><a href="">003</a></Table.Col>
                                            <Table.Col>10125 Reno Court</Table.Col>
                                            <Table.Col>$0</Table.Col>
                                            <Table.Col>$2,000</Table.Col>
                                            <Table.Col>Vacant</Table.Col>
                                            <Table.Col>
                                                <Button className="btn btn-sm btn-danger"><i class="fas fa-minus"></i></Button>
                                            </Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col><a href="">004</a></Table.Col>
                                            <Table.Col>789 Harambe Dr. #101</Table.Col>
                                            <Table.Col>$3,300</Table.Col>
                                            <Table.Col>$0</Table.Col>
                                            <Table.Col>Leased</Table.Col>
                                            <Table.Col>
                                                <Button className="btn btn-sm btn-danger"><i class="fas fa-minus"></i></Button>
                                            </Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col><a href="">005</a></Table.Col>
                                            <Table.Col>90210 Worst Show Blvd.</Table.Col>
                                            <Table.Col>$24,500</Table.Col>
                                            <Table.Col>$1,319</Table.Col>
                                            <Table.Col>Leased</Table.Col>
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
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
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
                                            <Table.Col><a href="">279</a></Table.Col>
                                            <Table.Col>Security Deposit</Table.Col>
                                            <Table.Col>10125 Reno Court</Table.Col>
                                            <Table.Col>08/01/20</Table.Col>
                                            <Table.Col>Paid</Table.Col>
                                            <Table.Col>$2,500</Table.Col>
                                        </Table.Row>
                                    </Table.Body>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Col><a href="">278</a></Table.Col>
                                            <Table.Col>Rent</Table.Col>
                                            <Table.Col>5616 Pleasant Ave.</Table.Col>
                                            <Table.Col>08/01/20</Table.Col>
                                            <Table.Col>Paid</Table.Col>
                                            <Table.Col>$1,800</Table.Col>
                                        </Table.Row>
                                    </Table.Body>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Col><a href="">277</a></Table.Col>
                                            <Table.Col>Rent</Table.Col>
                                            <Table.Col>5612 Harmony Ave.</Table.Col>
                                            <Table.Col>08/01/20</Table.Col>
                                            <Table.Col>Paid</Table.Col>
                                            <Table.Col>$2,500</Table.Col>
                                        </Table.Row>
                                    </Table.Body>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Col><a href="">276</a></Table.Col>
                                            <Table.Col>Rent</Table.Col>
                                            <Table.Col>789 Harambe Dr #101</Table.Col>
                                            <Table.Col>08/01/20</Table.Col>
                                            <Table.Col>Paid</Table.Col>
                                            <Table.Col>$1,300</Table.Col>
                                        </Table.Row>
                                    </Table.Body>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Col><a href="">275</a></Table.Col>
                                            <Table.Col>Rent</Table.Col>
                                            <Table.Col>90210 Worst Show Blvd</Table.Col>
                                            <Table.Col>08/01/20</Table.Col>
                                            <Table.Col>Paid</Table.Col>
                                            <Table.Col>$4,083.33</Table.Col>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                        <div className="container d-flex justify-content-center">
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Item>{6}</Pagination.Item>
                                <Pagination.Item>{7}</Pagination.Item>
                                <Pagination.Ellipsis />
                                <Pagination.Item>{49}</Pagination.Item>
                                <Pagination.Item>{50}</Pagination.Item>
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
                            <p class="mt-5 mb-3 text-muted">© 2020 Alula. All rights reserved.</p>
                        </Navbar>
                    </Container>
                {/* END Footer */}
            </React.Fragment>
        );
    }
}

export default PODashboard;