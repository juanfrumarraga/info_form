import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Driver from '../Driver/Driver';
import Vehicle from '../Vehicle/Vehicle';
import Company from '../Company/Company';
import Header from '../Header/Header';
import Fountain from '../../Util/endpoint';
import SearchApplicant from '../SearchApplicant/SearchApplicant';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      driver:{},
      vehicle:{},
      company:{}
      }
    this.getApplicant=this.getApplicant.bind(this);
    let rest='';
  }



  getApplicant(email){
    console.log(email);
    let applicant = Fountain.searchv1(email)
    console.log(applicant);
    this.setState({driver:applicant[0], vehicle:applicant[1], company:applicant[2]}, function(){this.searchInfo()})

  }


  searchInfo(){
    console.log(this.state.driver.first_name);
    if (this.state.driver.first_name) {
      this.rest = (<div>

      </div>)
    }
  }

  render() {
    return (
      <div className="App">
      <Header />
        {/*}<div className='container' style={{background:'rgb(134, 91, 244)', marginBottom:20}}>
            <img src={Logo} alt='logo' style={{height:150, align:'center'}}/>
        </div>*/}
        <SearchApplicant getApplicant={this.getApplicant}/>
        <Driver driver={this.state.driver} />
        <Vehicle vehicle={this.state.vehicle} />
        <Company company={this.state.company} />
        {/*}<br/>
        <br/>
        <Driver applicant={applicant} changeApplicant={this.changeApplicant} />
        <br/>
        <br/>
        <Vehicle applicant={applicant} changeApplicant={this.changeApplicant}/>
        <br/>
        <br/>
        <Company applicant={applicant} changeApplicant={this.changeApplicant}/>
        <Submit updateApplicant={this.updateApplicant}/>*/}
      </div>
    );
  }
}

export default App;
