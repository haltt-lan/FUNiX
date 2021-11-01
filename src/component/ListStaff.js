import React, {Fragment } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import ModalThemMoi from './ModalThemMoi';
import { Loading } from './Loading';


function RenderList ({list, isLoading, errMess}) {
    if(isLoading){
        return (
            <Loading />
        );
    }
    else if (errMess){
        return (
            <h4>{errMess}</h4>
        )
    }
    else
        return list.sort((a, b) => a.id - b.id).map((item, index) => {
            return (
                <div className='col-lg-2 col-md-4 col-6 '>
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
       
function ListStaff(props){
    return (
        <Fragment>
            <Header handleSearch={props.handleSearch}/>
            <div className="container">
                <div className="mb-2 mt-2" style={{'display':'flex','justifyContent':'space-between'}}>
                <h4>DANH SÁCH NHÂN VIÊN</h4>  
                <ModalThemMoi />
                              
                </div>                  
                <div className="row">
                    <RenderList list={props.list} isLoading={props.listLoading} errMess={props.listErrMess} />
                </div>
                <p className="text-primary"><i>Bấm vào tên nhân viên để xem thông tin chi tiết</i></p>
            </div >
        </Fragment>
    )
}

export default ListStaff