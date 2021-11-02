import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardTitle, CardText } from 'reactstrap';
import Header from './Header';
import { Loading } from './Loading';

function RenderList({ departments, isLoading, errMess }) {

    // console.log('detailDepErr',detailDepErr)
    // return (
    //     <table className="table-bordered text-center mx-auto bg-light" style={{ width: '50%' }}>
    //         <RenderDetailList detailDep={detailDep} detailDepErr={detailDepErr} />
    //     </table>
    // )

    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        return (departments.map((item, index) => {
            return (
                <div className='col-lg-4 col-md-6 col-12'>
                    <Card body outline color="secondary" onClick={() => detailList(item.id)}>
                        <CardTitle tag="h5" style={{ textAlign: 'center' }}>{item.name}</CardTitle>
                        <CardText>Số lượng nhân viên: {item.numberOfStaff}</CardText>
                    </Card>
                    <br />
                </div>
            )
        }))

}
const detailList = (id) => {
    console.log('iddd', id);

}

// function RenderDetailList({ detailDepLoading, detailDep, detailDepErr }) {
//     console.log('detailDep', detailDep)
//     if (detailDepLoading) {
//         return (
//             <Loading />
//         );
//     } else if (detailDepErr) {
//         return (<h4>{detailDepErr}</h4>)
//     } else
//         return (
//             <div>
//                 <h1>test</h1>
//             </div>
//         )

// }



function PhongBan(props) {
    return (
        <Fragment>
            <Header handleSearch={props.handleSearch} />
            <div className="container mt-3">
                <div className="row">
                    <RenderList departments={props.departments} isLoading={props.depLoading} errMess={props.depErrMess} />
                </div>
                <div>
                </div>

            </div>
        </Fragment>
    )
}


export default PhongBan;