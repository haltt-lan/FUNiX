import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardTitle, CardText } from 'reactstrap';
import HeaderAsm2 from './HeaderAsm2';


export default class Phongban extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDepartment: null
        }
    }
    renderList = () => {
        return this.props.departments.map((item, index) => {
            return (
                <div className='col-lg-4 col-md-6 col-12'>
                    <Card body outline color="secondary" onClick={() => this.detailList(item)}>
                        <CardTitle tag="h5" style={{ textAlign: 'center' }}>{item.name}</CardTitle>
                        <CardText>Số lượng nhân viên: {item.numberOfStaff}</CardText>
                    </Card>
                    <br />
                </div>
            )
        })

    }
    detailList = (item) => {
        this.setState({
            selectedDepartment: item
        })
    }

    renderDetailList = () => {
        if (this.state.selectedDepartment) {
            const x = this.props.list.filter(item => item.department.name === this.state.selectedDepartment.name)
            return (
                <Fragment>
                    <tr>
                        <h5 className="text-info"> Danh sách nhân viên phòng {this.state.selectedDepartment.name}</h5>
                    </tr>
                    {x.map((y, index) => {
                        return (
                            <tr key={index} className="text-center">
                                {index + 1}.{y.name}
                            </tr >)
                    })}
                </Fragment>
            )
        }
    }

    render() {
        return (
            <Fragment>
                <HeaderAsm2 handleSearch={this.props.handleSearch}/>
                <div className="container mt-3">
                    <div className="row">
                        {this.renderList()}
                    </div>
                    <table className="table table-bordered text-center mx-auto bg-light" style={{ width: '50%' }}>
                        {this.renderDetailList()}
                    </table>
                </div>
            </Fragment>
        )
    }
}
