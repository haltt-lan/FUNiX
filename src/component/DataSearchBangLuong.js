import React, { Component, Fragment } from 'react';
import { Card, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import HeaderAsm2 from './HeaderAsm2';
import {connect} from 'react-redux';

class DataSearchBangLuong extends Component {
    renderBangLuongList = () => {
        const { arrSearch } = this.props;
        return (arrSearch.map((x, index) => {
            return (
                <div className='col-lg-4 col-md-6 col-12'>
                    <Link to={`/home/${x.id}`} style={{ textDecoration: 'none' }} className="text-dark">
                        <Card key={index}>
                            <CardBody>
                                <CardTitle tag="h5">{x.name}</CardTitle>
                                <CardText>
                                    <p>Mã nhân viên: {x.id}</p>
                                    <p>Hệ số lương: {x.salaryScale}</p>
                                    <p>Số giờ làm thêm: {x.overTime}</p>
                                </CardText>
                            </CardBody>
                            <CardFooter>Lương = {(Math.round(x.salary)).toLocaleString()}</CardFooter>
                        </Card>
                    </Link>
                    <br />
                </div>
            )
        })
        )
    }

    render() {
        return (
            <Fragment>
                <HeaderAsm2 handleSearch={this.props.handleSearch}/>
                <div className="container">
                    <h4 className="text-success text-center m-2" > Danh sách tìm kiếm </h4>
                    <div className="row">
                        {this.renderBangLuongList()}
                    </div>
                </div>
            </Fragment>

        )

    }
}

export default DataSearchBangLuong