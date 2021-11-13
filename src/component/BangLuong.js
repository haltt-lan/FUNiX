import React, { Component, Fragment } from 'react';
import { Card, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';
import { Link} from 'react-router-dom';
import Header from './Header';
import {withRouter} from 'react-router-dom';
import { Loading } from './Loading';
import { FadeTransform} from 'react-animation-components';


class BangLuong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: this.props.staffSalary
        }
    }
    chooseMethodSort = (method) => {
        console.log('salary',this.props)
        console.log('chooseMethodSort');
        let x = '';
        switch (method.target.value) {
            case "sortWithIdIncrease":
                x = this.props.staffSalary.sort((a, b) => a.id - b.id);
                break;
            case "sortWithIdDecrease":
                x = this.props.staffSalary.sort((a, b) => b.id - a.id);
                break;
            case "sortSalaryIncrease":
                x = this.props.staffSalary.sort((a, b) => a.salary - b.salary);
                break;
            case "sortSalaryDecrease":
                x = this.props.staffSalary.sort((a, b) => b.salary - a.salary);
                break;
            default:
                x = this.props.staffSalary.sort((a, b) => a.id - b.id);
        }
        this.setState({
            sort: x
        })
    }

    renderList = () => {
        var sortData = this.state.sort
        if(this.props.staffSalaryLoading){
            return (
                <Loading />
            );
        }
        else if(this.props.staffSalaryErrMess){
            return (
                <h4>{this.props.staffSalaryErrMess}</h4>
            )
        }
        else
        return sortData.map((item, index) => {
            // const basicSalary = 3000000;
            // const overTimeSalary = 200000;
            // var result = (item.salaryScale * basicSalary) + (item.overTime * overTimeSalary);
       
            return (
                <div className='col-lg-4 col-md-6 col-12'>
                    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}}
                                        fadeProps={{enterOpacity: 0.85}}>
                    <Link to={`/home/${item.id}`} style={{ textDecoration: 'none' }} className="text-dark">
                        <Card key={index}>
                            <CardBody>
                                <CardTitle tag="h5">{item.name}</CardTitle>
                                <CardText>
                                    <p>Mã nhân viên: {item.id}</p>
                                    <p>Hệ số lương: {item.salaryScale}</p>
                                    <p>Số giờ làm thêm: {item.overTime}</p>
                                </CardText>
                            </CardBody>
                            <CardFooter>Lương = {(item.salary).toLocaleString()}</CardFooter>
                        </Card>
                    </Link>
                    </FadeTransform>
                    <br />
                </div>
            )
        })

    }

    render() {
        return (
            <Fragment>
                <Header handleSearch={this.props.handleSearch}/>
                <div className="container mt-3">
                    <label className="m-2 text-danger"><b>Bộ lọc sắp xếp</b></label>
                    <select onChange={(e) => this.chooseMethodSort(e)}>
                        <option value="sortWithIdIncrease">Theo ID tăng dần</option>
                        <option value="sortWithIdDecrease">Theo ID giảm dần</option>
                        <option value="sortSalaryIncrease">Theo mức lương tăng dần</option>
                        <option value="sortSalaryDecrease">Theo mức lương giảm dần</option>
                    </select>
                    <div className="row mt-2">
                        {this.renderList()}
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default withRouter(BangLuong)
