import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Admin from '../../Util/endpoint';
import SearchApplicant from '../SearchApplicant/SearchApplicant';
import InfoForm from '../InfoForm/InfoForm'


let selectTest = ['hijo de la gran puta', 'chingada la madre de cojones', 'cristina cifuentes']


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      applicant:{
        driver_info:'',
        vehicle_info:'',
        company_info:'',
        bank_account_info:''

      },

      option_banks: {
        vehicle_types: [],
        vehicle_models: [],
        tariffs: [],
        products: [],
        bank_options: []
      }
  }

    this.getApplicant=this.getApplicant.bind(this);
    this.formData=this.formData.bind(this);
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
    this.handleApplicantStatus=this.handleApplicantStatus.bind(this);
    this.getOptionBanks=this.getOptionBanks.bind(this)
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
    let applicant = Admin.searchv1(email);
    console.log(applicant);
    this.setState({applicant:applicant}, function(){this.getOptionBanks()})

  }


  getOptionBanks(){
      const option_banks = Admin.getOptionBanks()
      console.log(option_banks);
      this.setState({option_banks:option_banks})
      console.log(this.state.option_banks);
  }



  handleFormSubmit(info){
    if (info.formData.applicant_status.save==true) {
        info.formData.applicant_status = 'save'
    } else {info.formData.applicant_status = 'approve'}
    console.log(info.formData);
    this.setState({applicant:info.formData}, function(){Admin.update(this.state.applicant)})
  }



  handleApplicantStatus(status){
    console.log(status);
  }


  render() {
    return (
      <div className="App">
      <Header/>
        <SearchApplicant getApplicant={this.getApplicant}/>
        <InfoForm applicant={this.state.applicant} option_banks={this.state.option_banks} formData={this.formData()} selectTest={selectTest}
        onSubmit={this.handleFormSubmit} handleApplicantStatus={this.handleApplicantStatus}/>
      </div>
    );
  }
}

export default App;
