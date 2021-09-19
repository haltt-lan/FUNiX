import React, { Component, Fragment } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import HeaderAsm2 from './HeaderAsm2';


export default class StaffListComponent extends Component {
    renderList = () => {
        return this.props.list.sort((a, b) => a.id - b.id).map((item, index) => {
            return (
                <div className='col-lg-2 col-md-4 col-sm-6 '>
                    <Link style={{ textDecoration: 'none' }} className="text-dark" to={`/home/${item.id}`} >
                        <Card key={index}>
                            <CardImg top width='100%' src={item.image} alt='Card image cap' />
                            <CardBody>
                                <CardTitle tag='h5' style={{ textAlign: 'center' }}>{item.name}</CardTitle>
                            </CardBody>
                        </Card>
                        <br />
                    </Link>
                </div >
            )
        })
    }

    render() {
        return (
            <Fragment>
                <HeaderAsm2 handleSearch={this.props.handleSearch} keyword={this.props.keyword}/>
                <div className="container">
                    <h4 className="text-center">DANH SÁCH NHÂN VIÊN</h4>
                    <div className="row">
                        {this.renderList()}
                    </div>
                    <p className="text-primary"><i>Bấm vào tên nhân viên để xem thông tin chi tiết</i></p>
                </div >
            </Fragment>


        )
    }
}
