import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Fountain from '../../Util/endpoint';
import SearchApplicant from '../SearchApplicant/SearchApplicant';
import Test from '../Test/Test'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      }
    this.getApplicant=this.getApplicant.bind(this);
  }

  formData(){return {
    driver_info:{first_name:'Juan', date_of_birth:'18/10/1987',  last_name:'Zumarraga' },
    vehicle_info:{colour:'Grey', plate:45454},
    company_info:{},
    payment_info:{}}

  }

  getApplicant(email){
    console.log(email);
    let applicant = Fountain.searchv1(email)
    console.log(applicant);
    this.setState({applicant:applicant})

  }


  render() {
    return (
      <div className="App">
      <Header />
        <SearchApplicant getApplicant={this.getApplicant}/>
        <Test applicant={this.state.applicant} cosa={this.formData}/>
      </div>
    );
  }
}

export default App;
