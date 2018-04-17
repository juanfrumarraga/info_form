import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Fountain from '../../Util/endpoint';
import SearchApplicant from '../SearchApplicant/SearchApplicant';
import InfoForm from '../InfoForm/InfoForm'


let selectTest = ['hijo de la gran puta', 'chingada la madre de cojones', 'cristina cifuentes']


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      applicant:{}

      }

    this.getApplicant=this.getApplicant.bind(this);
    this.formData=this.formData.bind(this);
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
  }

  formData(){

    return{
    driver_info:this.state.applicant.driver_info,
    vehicle_info:this.state.applicant.vehicle_info,
    company_info:this.state.applicant.company_info,
    bank_account_info:this.state.applicant.bank_account_info
    }

  }

  getApplicant(email){
    console.log(email);
    let applicant = Fountain.searchv1(email);
    console.log(applicant);
    this.setState({applicant:applicant})

  }

  handleFormSubmit(e){
    console.log(e);
  }


  render() {
    return (
      <div className="App">
      <Header />
        <SearchApplicant getApplicant={this.getApplicant}/>
        <InfoForm applicant={this.state.applicant} formData={this.formData()} selectTest={selectTest} onSubmit={this.handleFormSubmit}/>
      </div>
    );
  }
}

export default App;
