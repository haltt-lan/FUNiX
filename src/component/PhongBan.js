import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardTitle, CardText } from 'reactstrap';
import Header from './Header';
import { Loading } from './Loading';


class PhongBan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDepId: null
        }
    }
    renderList = () => {
        const {departments,depLoading,depErrMess}=this.props
        if(depLoading){
            return (
                <Loading />
            );
        }
        else if (depErrMess) {
            return (
                <h4>{depErrMess}</h4>
            );
        }
        else
        return (departments.map((item, index) => {
            return (
                <div className='col-lg-4 col-md-6 col-12'>
                    <Card body outline color="secondary" onClick={() => this.detailList(item.id)}>
                        <CardTitle tag="h5" style={{ textAlign: 'center' }}>{item.name}</CardTitle>
                        <CardText>Số lượng nhân viên: {item.numberOfStaff}</CardText>
                    </Card>
                    <br />
                </div>
            )
        }))

    }
    detailList = (id) => {
        this.setState({
            selectedDepId: id
        })
    }

    renderDetailList = () => {
        if (this.state.selectedDepId) {
            const x = this.props.list.filter(item => item.departmentId=== this.state.selectedDepId)
            const y=this.props.departments.find(item =>item.id===this.state.selectedDepId )
            console.log('y',y)
            
            return (
                <Fragment>
                    <tr>
                        <h5 className="text-info"> Danh sách nhân viên phòng {y.name}</h5>
                    </tr>
                    {x.map((y, index) => {
                        return (
                            <tr key={index} className="text-center">
                                {index + 1}. {y.name}
                            </tr >)
                    })}
                </Fragment>
            )
        }
    }

    render() {
        return (
            <Fragment>
                <Header handleSearch={this.props.handleSearch}/>
                <div className="container mt-3">
                    <div className="row">
                        {this.renderList()}
                    </div>
                    <table className="table-bordered text-center mx-auto bg-light" style={{ width: '50%' }}>
                        {this.renderDetailList()}
                    </table>
                </div>
            </Fragment>
        )
    }
}

export default PhongBan