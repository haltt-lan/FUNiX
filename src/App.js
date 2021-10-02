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
   constructor (props){
     super (props);
     this.state = {
      arrSearch:[]
     }
   }
  handleSearch = (keyword) => {
    console.log(keyword);
    let arrSearchNew = this.props.list.filter(data => data.name.toLowerCase().includes(keyword.toLowerCase()));
    this.setState ({
      arrSearch:arrSearchNew
    })
  }
 
  render() {
    const StaffWithId = ({ match }) => {
      const staff = this.props.list.find(x => x.id === parseInt(match.params.id))
      return <DetailStaff item={staff} handleSearch={this.handleSearch}/>
    }
 
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/home' component={() => <ListStaff handleSearch={this.handleSearch} />} />
            <Route exact path='/home/data/search' component={() => <DataSearchList handleSearch={this.handleSearch} arrSearch={this.state.arrSearch} />} />
            <Route exact path='/home/:id' component={StaffWithId} />
            <Route path='/phongban' component={() => <Phongban handleSearch={this.handleSearch}/>} />
            <Route exact path='/bangluong' component={() => <Bangluong handleSearch={this.handleSearch}/>} />
            <Route exact path='/bangluong/search' component={() => <DataSearchBangLuong handleSearch={this.handleSearch} arrSearch={this.state.arrSearch}/>} />
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
