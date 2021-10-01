import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ListStaff from './component/ListStaff';
import DetailStaff from './component/DetailStaff';
import Footer from './component/Footer';
import Phongban from './component/Phongban';
import Bangluong from './component/Bangluong';
import DataSearchList from './component/DataSearchList';
import DataSearchBangLuong from './component/DataSearchBangLuong';
import {connect} from 'react-redux'


 class App extends Component {
 
  render() {
    const StaffWithId = ({ match }) => {
      const staff = this.props.list.find(x => x.id === parseInt(match.params.id))
      return <DetailStaff item={staff} />
    }
 
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/home' component={() => <ListStaff />} />
            <Route exact path='/home/data/search' component={() => <DataSearchList />} />
            <Route exact path='/home/:id' component={<DetailStaff />} />
            <Route path='/phongban' component={() => <Phongban />} />
            <Route exact path='/bangluong' component={() => <Bangluong />} />
            <Route exact path='/bangluong/search' component={() => <DataSearchBangLuong />} />
            <Redirect to='/home' />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      list: state.DataReducer.list,
  }
}
export default connect (mapStateToProps, null) (App)
