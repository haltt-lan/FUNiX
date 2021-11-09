import React, { Component, Fragment } from 'react';



class DetailDep extends Component {
    
    render(){
        return (
            <Fragment>
                <table className="table-bordered text-center mx-auto bg-light" style={{ width: '50%' }}>
                    <tr>
                        <h5 className="text-info"> Danh sách nhân viên phòng {this.props.dep}</h5>
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
    }}


  export default DetailDep