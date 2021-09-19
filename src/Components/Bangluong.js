import React, { Component, Fragment } from 'react';
import { Card, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import HeaderAsm2 from './HeaderAsm2';


class Bangluong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: this.props.list.sort((a, b) => a.id - b.id)
        }
    }
    chooseMethodSort = (method) => {
        console.log('chooseMethodSort');
        let x = '';
        switch (method.target.value) {
            case "sortWithIdIncrease":
                x = this.props.list.sort((a, b) => a.id - b.id);
                break;
            case "sortWithIdDecrease":
                x = this.props.list.sort((a, b) => b.id - a.id);
                break;
            case "sortSalaryIncrease":
                x = this.props.list.sort((a, b) => a.salary - b.salary);
                break;
            case "sortSalaryDecrease":
                x = this.props.list.sort((a, b) => b.salary - a.salary);
                break;
            default:
                x = this.props.list.sort((a, b) => a.id - b.id);
        }
        this.setState({
            sort: x
        })
    }

    renderList = () => {
        var sortData = this.state.sort
        return sortData.map((item, index) => {
            const basicSalary = 3000000;
            const overTimeSalary = 200000;
            var result = (item.salaryScale * basicSalary) + (item.overTime * overTimeSalary);
            item.salary = result;
            return (
                <div className='col-lg-4 col-md-6 col-sm-12'>
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
                            <CardFooter>Lương = {(Math.round(item.salary)).toLocaleString()}</CardFooter>
                        </Card>
                    </Link>
                    <br />
                </div>
            )
        })

    }

    render() {
        return (
            <Fragment>
                <HeaderAsm2 handleSearch={this.props.handleSearch} keyword={this.props.keyword}/>
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

export default withRouter(Bangluong)