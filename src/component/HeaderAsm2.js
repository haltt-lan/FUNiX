import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './Header.css';
import {connect} from 'react-redux'


class HeaderAsm2 extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.state = {
            collapsed: true
        }
    }
    // searchAd = () => {
    //         return ('/home/data/search')
    // }
    // searchAd = () => {
    //     if (this.props.match.url === '/bangluong'||this.props.match.url === '/bangluong/search') {
    //         return ('/bangluong/search')
    //     } else { return ('/home/data/search') }
    // }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render() {
        return (
            <Fragment>

                <div className="container-fluid bg-info pt-3">
                    <h2 className="text-center text-white">ỨNG DỤNG QUẢN LÝ NHÂN SỰ</h2>
                    <div className="container-fluid pb-2">
                        <div className="icon">
                            <Navbar dark >
                                <NavbarToggler onClick={this.toggleNavbar} />
                                <NavbarBrand className="mr-0"><img src='/assets/images/logo.png' height="30" width="41" alt='logo' /></NavbarBrand>
                                <Collapse isOpen={!this.state.collapsed} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink activeClassName='activeNav' className="btn p-3 text-white linkActive" to='/home'><i className="fa fa-users" aria-hidden="true"></i> Nhân viên </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink activeClassName='activeNav' className="btn p-3 text-white" to='/phongban'><i className="fa fa-university" aria-hidden="true"></i> Phòng ban</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink activeClassName='activeNav' className="btn p-3 text-white" to='/bangluong'><i className="fa fa-file-text" aria-hidden="true"></i> Bảng lương</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>

                            </Navbar>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-12 responsive">
                                <NavbarBrand className="mr-auto p-3"><img src='/assets/images/logo.png' height="30" width="41" alt='logo' /></NavbarBrand>
                                <NavLink activeClassName='activeNav' className="btn p-3 text-white linkActive" to='/home'><i className="fa fa-users" aria-hidden="true"></i> Nhân viên </NavLink>
                                <NavLink activeClassName='activeNav' className="btn p-3 text-white" to='/phongban'><i className="fa fa-university" aria-hidden="true"></i> Phòng ban</NavLink>
                                <NavLink activeClassName='activeNav' className="btn p-3 text-white" to='/bangluong'><i className="fa fa-file-text" aria-hidden="true"></i> Bảng lương</NavLink>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="input-group mt-2">
                                    <input type="text" className="form-control" placeholder="Search..." ref={this.input} />
                                    <Link to='home/data/search'>
                                        <button className="btn bg-secondary" type="submit" onClick={() => { this.props.handleSearch(this.input.current.value) }}><i className="fa fa-search text-white"></i></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearch: (keyword) => {
            const action= {
                type: 'handle_Search',
                keyword
            }
            dispatch (action)
        }
    }

}
// export default withRouter(HeaderAsm2)
export default connect(null,mapDispatchToProps) (HeaderAsm2)

