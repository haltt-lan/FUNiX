import React, { Fragment, useState } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { NavbarBrand } from 'reactstrap';
import './Header.css';

function HeaderAsm2(props) {
const [keyword, setKeyword]= useState('')

    let searchAd = () => {
        if (props.match.url === '/bangluong') {
            return ('/bangluong/search')
        } else { return ('/home/data/search') }
    }
    return (
        <Fragment>
            <div className="container-fluid bg-info pt-3">
                <h2 className="text-center text-white">ỨNG DỤNG QUẢN LÝ NHÂN SỰ</h2>
                <div className="container-fluid pb-2">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <NavbarBrand className="mr-auto p-3"><img src='/assets/images/logo.png' height="30" width="41" alt='logo' /></NavbarBrand>
                            <NavLink activeClassName='activeNav' className="btn p-3 text-white linkActive" to='/home'><i className="fa fa-users" aria-hidden="true"></i> Nhân viên </NavLink>
                            <NavLink activeClassName='activeNav' className="btn p-3 text-white" to='/phongban'><i className="fa fa-university" aria-hidden="true"></i> Phòng ban</NavLink>
                            <NavLink activeClassName='activeNav' className="btn p-3 text-white" to='/bangluong'><i className="fa fa-file-text" aria-hidden="true"></i> Bảng lương</NavLink>
                        </div>
                        <div className="col-md-4 col-sm-12">
                       
                                <div className="input-group mt-2">

                                    <input type="text" className="form-control" placeholder="Search..." onChange={(e)=>setKeyword(e.target.value)} />
                                    <Link to={searchAd()}>
                                    <button className="btn bg-secondary" type="submit" onClick={()=>{props.handleSearch(keyword)}}><i className="fa fa-search text-white"></i></button>
                                    </Link>

                                </div>
                       
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default withRouter(HeaderAsm2);

