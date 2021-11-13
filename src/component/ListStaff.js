import React, { Fragment,Component  } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import ModalThemMoi from './ModalThemMoi';
import { Loading } from './Loading';
import {deleteStaff } from '../reducer/ActionCreators';
import { connect } from 'react-redux';
import { FadeTransform } from 'react-animation-components';


class ListStaff extends Component {
renderList = () => {
    if (this.props.list.listLoading) {
        return (
            <Loading />
        );
    }
    else if (this.props.list.listErrMess) {
        return (
            <h4>{this.props.listErrMess}</h4>
        )
    }
    else
        return this.props.list.list.sort((a, b) => a.id - b.id).map((item, index) => {
            return (
                <div className='col-lg-2 col-md-4 col-6 '>
                    <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-20%)'}}>
                    <Card key={index}>
                        <Link style={{ textDecoration: 'none' }} className="text-dark" to={`/home/${item.id}`} >
                            <CardImg top width='100%' src={item.image} alt='Card image cap' />
                        </Link>
                        <CardBody>
                            <CardTitle tag='h5' style={{ textAlign: 'center' }}>{item.name}<button className="btn btn-danger" onClick={() => this.onDelete(item.id)}>Detete</button></CardTitle>
                        </CardBody>
                    </Card>
                    </FadeTransform>
                    <br />

                </div >
            )
        })
}
 onDelete = (id) => {
    if(confirm('Bạn có chắc chắn muốn xóa không?')){  //eslint-disable-line
        console.log('id', id);
        this.props.deleteStaff(id);
    }
}


    render() {
        return (
            <Fragment>
            <Header handleSearch={this.props.handleSearch} />
            <div className="container">
                <div className="mb-2 mt-2" style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
                    <h4>DANH SÁCH NHÂN VIÊN</h4>
                    <ModalThemMoi list={this.props.list} />

                </div>
                <div className="row">
                    {this.renderList()}
                </div>
                <p className="text-primary"><i>Bấm vào tên nhân viên để xem thông tin chi tiết</i></p>
            </div >
        </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => ({
    deleteStaff : (id)=> {dispatch (deleteStaff (id))}
})

export default connect (mapStateToProps, mapDispatchToProps)(ListStaff)

