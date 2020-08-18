import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Nav, Form, Table } from "tabler-react";
import "tabler-react/dist/Tabler.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    invoices: state.invoices,
    overview: state.overview,
    property: state.property,
    serviceRequest: state.serviceRequest,
  };
};
class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {/* Navigation Bar */}
        <Navbar className="mx-5">
          <Nav>
            <Nav.Item to="/onboarding" value="back" icon="arrow-left" />
          </Nav>
        </Navbar>
        {/* END Navigation Bar */}

        {/* Add Property Form */}
        <Container className="mt-5">
          <div className="card">
            <p className="lead m-5">Add Properties</p>
            <div className="table-responsive">
              <div className="container text-center">
                <Table>
                  <Table.Header>
                    <Table.ColHeader className="text-center">
                      Property Address
                    </Table.ColHeader>
                    <Table.ColHeader className="text-center">
                      Rental Rate
                    </Table.ColHeader>
                    <Table.ColHeader className="text-center">
                      Current Revenue
                    </Table.ColHeader>
                    <Table.ColHeader className="text-center">
                      Current Loses
                    </Table.ColHeader>
                    <Table.ColHeader className="text-center">
                      Leased
                    </Table.ColHeader>
                    <Table.ColHeader className="text-center">
                      Action
                    </Table.ColHeader>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Col>
                        <Form.Group>
                          <Form.Input
                            name="property-address"
                            placeholder="Property Address..."
                            type="text"
                            className="text-center"
                          />
                        </Form.Group>
                      </Table.Col>
                      <Table.Col>
                        <Form.Group>
                          <Form.Input
                            name="rental-rate"
                            placeholder="Rental Rate..."
                            className="text-center"
                          />
                        </Form.Group>
                      </Table.Col>
                      <Table.Col>
                        <Form.Group>
                          <Form.Input
                            name="current-revenue"
                            placeholder="Current Revenue..."
                            className="text-center"
                          />
                        </Form.Group>
                      </Table.Col>
                      <Table.Col>
                        <Form.Group>
                          <Form.Input
                            name="current-loses"
                            placeholder="Current Losses..."
                            className="text-center"
                          />
                        </Form.Group>
                      </Table.Col>
                      <Table.Col>
                        <Form.Group>
                          <Form.Select>
                            <option>Leased</option>
                            <option>Vacant</option>
                          </Form.Select>
                        </Form.Group>
                      </Table.Col>
                      <td className="pt-3-half">
                        <span class="table-remove">
                          <button type="button" class="del-prop my-1">
                            Remove
                          </button>
                        </span>
                      </td>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </div>
          </div>
        </Container>
        {/* END Add Property Form */}

        {/* Add New Property Button */}
        <Container className="m-5 p-5 d-flex justify-content-end">
          <button className="add-prop" href="">
            <i class="fas fa-plus mr-3"></i>Add Property
          </button>
        </Container>
        {/* END Add New Property Button */}

        {/* Save Changes Button */}
        <Container className="p-5 mt-5">
          <button className="btn btn-primary">Finished</button>
        </Container>
        {/* END Save Changes Button */}
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps)(AddProperty));
