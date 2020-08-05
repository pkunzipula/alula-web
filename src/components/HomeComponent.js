import React, { Component} from 'react';
import { Jumbotron, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import building from '../images/building.jpg'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                {/* Jumbotron */}
                <Jumbotron>
                    {/* Navigation Bar */}
                    <Navbar collapseOnSelect expand="lg" className="navbar-dark mx-3" >
                        <Navbar.Brand href="#home">
                            <img 
                                src={logo}
                                height="100" 
                                width="100"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle className="navbar-toggler" aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="navbar-nav ml-auto">
                                <Nav.Link href="#howItWorks" className="nav-item mr-5 active home-tabs">About Alula</Nav.Link>
                                <Nav.Link href="" className="nav-item mr-5 active"><Link to="/login" ><Button className="btn-lg">Sign In</Button></Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    {/* END Navigation Bar */}

                    {/* Main Content */}
                    <div className="container pt-5 mt-5">
                        <div className="row">
                            <div className="col pt-5">
                                <h1 className="display-4">Property Management Done Right</h1>
                                <p className="lead mb-5">A One Stop Shop for Landlords and Property Managers</p>
                                <Link to="/register"><Button className="btn-lg mt-5">Let's Get Started</Button></Link>
                            </div>
                        </div>
                    </div>
                    {/* END Main Content */}
                </Jumbotron>
                {/* END Jumbotron */}

                {/* Explanation */}
                <div className="container-fluid py-5 mt-5" id="howItWorks">
                    <div className="container marketing">
                        <p className="lead"></p>
                        <div className="row container d-flex justify-content-center">
                            <div className="col-lg-5 grid-margin mt-5 d-none d-lg-block">
                                <img src={building} alt="placeholder image" className="main-image" />
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6 grid-margin stretch-card">
                                <div className="card main-card">
                                    <div className="card-body">
                                        <h5 className="text-center card-title">About</h5>
                                        <p className="text-center card-description">Your One Stop Shop Property Management Tool</p>
                                        <div className="mt-4">
                                            <div className="accordion" id="accordion" role="tablist">
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="heading-2">
                                                        <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2" data-abc="true">Manage your Properties </a> </h6>
                                                    </div>
                                                    <div id="collapse-2" className="collapse" role="tabpanel" aria-labelledby="heading-2" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col">
                                                                <p className="mb-0">Whether you manage one property or one thousand properties, you will have the ability to keep track of payments, service requests, vacancies and more.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="heading-1">
                                                        <h6 className="mb-0"> <a data-toggle="collapse" href="#collapse-1" aria-expanded="false" aria-controls="collapse-1" data-abc="true" className="collapsed"> Accept Payments </a> </h6>
                                                    </div>
                                                    <div id="collapse-1" className="collapse" role="tabpanel" aria-labelledby="heading-1" data-parent="#accordion">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <p className="mb-0">Accept payments from your tenants. When your tenant pays their rent, we will keep track of the transaction and at years end, keep you tax compliant.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="heading-3">
                                                        <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3" data-abc="true"> Handle Requests </a> </h6>
                                                    </div>
                                                    <div id="collapse-3" className="collapse" role="tabpanel" aria-labelledby="heading-3" data-parent="#accordion">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <p className="mb-0">We understand that things happen. Your tenants can schedule maintenance & repair claims quickly and easily. When these requests are made, you will be notified immediately with the ability to dispatch a contractor immediately or during a scheduled time.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="heading-4">
                                                        <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4" data-abc="true"> Pay Your Taxes </a> </h6>
                                                    </div>
                                                    <div id="collapse-4" className="collapse" role="tabpanel" aria-labelledby="heading-4" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col">
                                                                <p className="mb-0">Since we keep track of profits and losses, we will have everything ready to go once you file your taxes at the end of every year. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="heading-5">
                                                        <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5" data-abc="true"> How Much it Costs </a> </h6>
                                                    </div>
                                                    <div id="collapse-5" className="collapse" role="tabpanel" aria-labelledby="heading-5" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col">
                                                                <p className="mb-0">The beauty of Alula is that it doesn't cost you an arm and a leg to manage your properties. We handle it all for just $20/month per property!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END Explanation */}

                {/* Footer */}
                <footer className="footer-bg">
                    <div className="container space">
                        <div className="row justify-content-md-between">
                           {/* <div className="col-5 col-md-3 col-lg-2 order-lg-4 mb-7 mb-lg-0">
                                <h3 className="h6 text-white mb-3">Company</h3>
                                
                                <div className="list-group list-group-flush list-group-transparent">
                                    <a className="list-group-item list-group-item-action" href="#">Careers</a>
                                    <a className="list-group-item list-group-item-action" href="#">FAQ</a>
                                    <a className="list-group-item list-group-item-action" href="#">Legal</a>
                                    <a className="list-group-item list-group-item-action" href="#">Terms & Conditions</a>
                                </div>
                                
                            </div> */}
                            <div className="col-5 col-md-3 col-lg-2 order-lg-6 mb-7 mb-lg-0">
                                <h3 className="h6 text-white mb-3">Social</h3>
                                
                                <div className="list-group list-group-flush list-group-transparent">
                                    <Link to="/contact">
                                        <a className="list-group-item list-group-item-action" href="contact.html">
                                            <i className="fas fa-envelope mr-1"></i> Contact Us
                                        </a>
                                    </Link>
                                    {/* <a className="list-group-item list-group-item-action" href="#">
                                        <i className="fab fa-facebook-f min-width-3 text-center mr-2"></i> Facebook
                                    </a>
                                    <a className="list-group-item list-group-item-action" href="#">
                                        <i className="fab fa-twitter min-width-3 text-center mr-1"></i> Twitter
                                    </a>
                                    <a className="list-group-item list-group-item-action" href="#">
                                        <i className="fab fa-instagram min-width-3 text-center mr-1"></i> Instagram
                                    </a> */}
                                </div>
                            </div>
                            <div className="col-lg-4 order-lg-1 d-flex align-items-start flex-column">
                                <a href="#" className="my-5"><img src={logo} alt="logo" width="100px" /></a>
                                <p className="small text-muted">© 2020 Alula. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* END Footer */}
            </React.Fragment>
        );
    }
}

export default Home;

