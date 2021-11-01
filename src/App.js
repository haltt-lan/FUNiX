import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ListStaff from './component/ListStaff';
import ChiTietNhanVien from './component/ChiTietNhanVien';
import Footer from './component/Footer';
import PhongBan from './component/PhongBan';
import BangLuong from './component/BangLuong';
import SearchListStaff from './component/SearchListStaff';
import SearchBangLuong from './component/SearchBangLuong';
import {connect} from 'react-redux';
import {fetchList,fetchDepartments,fetchStaffSalary} from './reducer/ActionCreators';


 class App extends Component {
   constructor (props){
     super (props);
     this.state = {
      arrSearch:[]
     }
   }
   componentDidMount () {
     this.props.fetchList();
     this.props.fetchDepartments();
     this.props.fetchStaffSalary();
   }
  handleSearch = (keyword) => {
    console.log(keyword);
    let arrSearchNew = this.props.list.list.filter(data => data.name.toLowerCase().includes(keyword.toLowerCase()));
    this.setState ({
      arrSearch:arrSearchNew
    })
  }
  
  render() {
    const StaffWithId = ({ match }) => {
      const staff = this.props.list.list.find(x => x.id === parseInt(match.params.id))
      return <ChiTietNhanVien item={staff} handleSearch={this.handleSearch} departments={this.props.departments.departments}/>
    }
    
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/home' component={() => <ListStaff handleSearch={this.handleSearch} list={this.props.list.list} listLoading={this.props.list.isLoading} listErrMess={this.props.list.errMess}/>} />
            <Route exact path='/home/data/search' component={() => <SearchListStaff handleSearch={this.handleSearch} arrSearch={this.state.arrSearch} />} />
            <Route exact path='/home/:id' component={StaffWithId} />
            <Route path='/phongban' component={() => <PhongBan handleSearch={this.handleSearch} departments={this.props.departments.departments} depLoading={this.props.departments.isLoading} depErrMess={this.props.departments.errMess} list={this.props.list.list} detailDep={this.detailDep}/>} />
            <Route exact path='/bangluong' component={() => <BangLuong handleSearch={this.handleSearch} staffSalary={this.props.staffSalary.staffSalary} staffSalaryLoading={this.props.staffSalary.isLoading} staffSalaryErrMess={this.props.staffSalary.errMess}/>} />
            <Route exact path='/bangluong/search' component={() => <SearchBangLuong handleSearch={this.handleSearch} arrSearch={this.state.arrSearch}/>} />
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
      list: state.list,
      departments :state.departments,
      staffSalary: state.staffSalary
  }
}
const mapDispatchToProps = dispatch => ({
  fetchList: ()=> {dispatch(fetchList())},
  fetchDepartments: ()=> {dispatch(fetchDepartments())},
  fetchStaffSalary: ()=> {dispatch(fetchStaffSalary())},

})
export default connect (mapStateToProps, mapDispatchToProps) (App)
