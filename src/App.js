import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ListStaff from './Components/ListStaff';
import DetailStaff from './Components/DetailStaff';
import Footer from './Components/Footer';
import { STAFFS, DEPARTMENTS } from './Components/staffs';
import Phongban from './Components/Phongban';
import Bangluong from './Components/Bangluong';
import DataSearchList from './Components/DataSearchList';
import DataSearchBangLuong from './Components/DataSearchBangLuong';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: STAFFS,
      departments: DEPARTMENTS,
      arrSearch: [],
      keyword: ''
    };
    //   this.handleSearch=this.handleSearch.bind(this)
    // this.handleSubmit=this.handleSubmit.bind(this)
  }


  handleSearch = (keyword) => {
    console.log(keyword)
    let arrSearchNew = this.state.list.filter(data => data.name.toLowerCase().includes(keyword.toLowerCase()))
    this.setState({
      arrSearch: arrSearchNew
    })
  }

  render() {
    const StaffWithId = ({ match }) => {
      const staff = this.state.list.find(x => x.id === parseInt(match.params.id))
      return <DetailStaff item={staff} handleSearch={this.handleSearch} />
    }
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/home' component={() => <ListStaff list={this.state.list} handleSearch={this.handleSearch} /> } />
            <Route exact path='/home/data/search' component={() => <DataSearchList item={this.state.arrSearch} handleSearch={this.handleSearch} />} />
            <Route exact path='/home/:id' component={StaffWithId} />
            <Route path='/phongban' component={() => <Phongban list={this.state.departments} param={this.state.list} handleSearch={this.handleSearch} />} />
            <Route exact path='/bangluong' component={() => <Bangluong list={this.state.list} handleSearch={this.handleSearch} />} />
            <Route exact path='/bangluong/search' component={() => <DataSearchBangLuong item={this.state.arrSearch} handleSearch={this.handleSearch} />} />
            <Redirect to='/home' />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

