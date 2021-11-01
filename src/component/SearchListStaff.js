import React, { Component, Fragment } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';

class SearchListStaff extends Component {
    renderList = () => {
        const { arrSearch } = this.props;
        return (arrSearch.map((x, index) => {
            return (
                <div className='col-lg-2 col-md-4 col-6 '>
                    <Link style={{ textDecoration: 'none' }} className="text-dark" to={`/home/${x.id}`} >
                        <Card key={index}>
                            <CardImg top width='100%' src={x.image} alt='Card image cap' />
                            <CardBody>
                                <CardTitle tag='h5' style={{ textAlign: 'center' }}>{x.name}</CardTitle>
                            </CardBody>
                        </Card>
                        <br />
                    </Link>
                </div >
            )
        })
        )
    }

    render() {
        return (
            <Fragment>
                <Header handleSearch={this.props.handleSearch}/>
                <div className="container">
                    <h4 className="text-success text-center m-2" > Danh sách tìm kiếm </h4>
                    <div className="row">
                        {this.renderList()}
                    </div>
                </div>
            </Fragment>

        )

    }
}

export default SearchListStaff