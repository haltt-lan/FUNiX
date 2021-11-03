import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardTitle, CardText } from 'reactstrap';
import Header from './Header';
import { Loading } from './Loading';
import {fetchDetaiDep } from '../reducer/ActionCreators';
import { connect } from 'react-redux';


class PhongBan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            id:0
        }
    }
    componentDidMount() {
        this.props.fetchDetaiDep();
       
      }
    renderList = () => {
        if (this.props.depLoading) {
            return (
                <Loading />
            );
        }
        else if (this.props.depErrMess) {
            return (
                <h4>{this.props.depErrMess}</h4>
            );
        }
        else
            return (
                this.props.departments.map((item, index) => {
                    return (
                        <div className='col-lg-4 col-md-6 col-12'>
                            <Card body outline color="secondary" onClick={() => this.showDetail(item.departmentId)}>
                                <CardTitle tag="h5" style={{ textAlign: 'center' }}>{item.name}</CardTitle>
                                <CardText>Số lượng nhân viên: {item.numberOfStaff}</CardText>
                            </Card>
                            <br />
                        </div>
                    )
                })
            )
    }
    showDetail = (id) => {
        this.setState({
            show: true,
            id: id
        })
    }

    renderDetailList = () => {
        if (this.state.show) {
            if (this.props.detailDepLoading) {
                return (
                    <Loading />
                );
            }
            else if (this.props.detailDepErr) {
                return (
                    <h4>{this.props.detailDepErr}</h4>
                );
            }
            else {
                return (
                    <Fragment>
                        <table className="table-bordered text-center mx-auto bg-light" style={{ width: '50%' }}>
                            <tr>
                                <h5 className="text-info"> Danh sách nhân viên phòng</h5>
                            </tr>
                            {this.props.detailDep.map((y, index) => {
                                return (
                                    <tr key={index} className="text-center">
                                        {index + 1}.{y.name}
                                    </tr >)
                            })}
                        </table>
                    </Fragment>
                )
            }
        } else { }

    }
    render() {
        return (

            <Fragment>
                <Header handleSearch={this.props.handleSearch} />
                <div className="container mt-3">
                    <div className="row">
                        {this.renderList()}
                    </div>
                    <div>
                        {this.renderDetailList()}
                    </div>
                </div>
            </Fragment>

        )
    }
}
const mapDispatchToProps = dispatch => ({
    fetchDetaiDep: () => { dispatch(fetchDetaiDep(this.state.id)) },
  })

export default connect(null, mapDispatchToProps)(PhongBan)


