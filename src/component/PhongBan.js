import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardTitle, CardText } from 'reactstrap';
import Header from './Header';
import { Loading } from './Loading';
import DetailDep from './DetailDep';
import {fetchDetaiDep } from '../reducer/ActionCreators';
import { connect } from 'react-redux';


class PhongBan extends Component {
    constructor (props){
        super (props);
        this.state={
            show:false
        }
    }
    
    
    // componentDidMount() {
    //     this.props.fetchDetaiDep();
    //   }
    
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
                            <Card body outline color="secondary" onClick={() => this.showDetail()}>
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
            show:true
        },(id) => this.props.fetchDetaiDep(id))
    }

    renderDetailDep = () => {
        if (this.state.show) {
             if (this.props.detailDepErr) {
                return (
                    <h4>{this.props.detailDepErr}</h4>
                );
            }
            else {
                return (
                    <DetailDep detailDep={this.props.detailDep} />
                )
            }
        } else {}
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
                        {this.renderDetailDep()}
                    </div>
                </div>
            </Fragment>

        )
    }
    
}
const mapDispatchToProps = dispatch => ({
    fetchDetaiDep: (id) => { dispatch(fetchDetaiDep(id)) },
  })

export default connect(null, mapDispatchToProps)(PhongBan)


