import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import SearchApplicant from '../SearchApplicant/SearchApplicant';
import {Form,Row, Col, ButtonToolbar, Image, Checkbox,HelpBlock,Button, Grid,Alert, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import OtherForm from '../InfoForm/OtherForm'



let selectTest = ['hijo de la gran puta', 'chingada la madre de cojones', 'cristina cifuentes']
const test='InfoForm'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      test_info:{
        gpi:'',
        medical_test:''
      },
      applicant:{
        applicant_status:'',
        bank_account_info: {
          company_bank_account_bank_id: '',
          company_bank_account_format: '',
          company_bank_account_holder_name: '',
          company_bank_account_holder_type: '',
          company_bank_account_number: '',
          company_bank_account_tax_document_code: '',
          company_bank_account_tax_document_name: '',
          company_bank_account_type: ''
        },
        company_info: {
          company_id: '',
          company_address: '',
          company_city: '',
          company_county: '',
          company_email: '',
          company_logistics_rep_id: '',
          company_name: '',
          company_phone_number: '',
          company_post_code: '',
          company_tax_code: ''
        },
        driver_info: {
          email: "",
          name: "",
          surname: '',
          last_name: "",
          mobile_num: "546464654",
          mobile_cc: "+34",
          criminal_records_date: '',
          date_of_birth: '',
          driver_fleet_role: '',
          driver_gender: '',
          driver_general_register_number: '',
          driver_reserve_class: '',
          driving_license_expiry_date: '',
          driving_license_number: '',
          national_id_number: '',
          vehicle_insurance_policy_expiry_date: '',
          vehicle_insurance_policy_number: ''
        },
        vehicle_info: {
          colour: '',
          local_certification_date: '',
          local_certification_number: '',
          plate: '',
          region_id: '',
          tariff_id: '',
          vehicle_model_id: '',
          vehicle_product_ids: '',
          vehicle_registration_number: '',
          vehicle_year: ''
        }
      },

      option_banks: {
        vehicle_types: [],
        vehicle_models: [],
        tariffs: [],
        products: [],
        bank_options: [],
        company_logistics_rep_id: []
      }
  }

    this.getApplicant=this.getApplicant.bind(this);
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
    this.getOptionBanks=this.getOptionBanks.bind(this);
    this.displayForm=this.displayForm.bind(this);
    this.handleChange=this.handleChange.bind(this)
    this.handleDateChange=this.handleDateChange.bind(this)
    this.handleSelect=this.handleSelect.bind(this)
    this.handleTest=this.handleTest.bind(this)
    this.handleMultiSelect= this.handleMultiSelect.bind(this)
    this.handlePhoneChange=this.handlePhoneChange.bind(this)
  }


  getApplicant(email){
    let url = `https://cabify.com/driver-onboarding/api/applicant-info?email=${email}`
    console.log(url);
    fetch(url).then(response=>{return response.json()}
    ).then(jsonResponse=> {
      if(jsonResponse.error) {
        let applicant = {...this.state.applicant}
        applicant['applicant_status'] = 'not exists'
        this.setState({applicant:applicant})
      }
      else {
        this.setState({applicant:jsonResponse}, function(){this.getOptionBanks()})
      }
    })
  }


  getOptionBanks(){
    let url = `https://cabify.com/driver-onboarding/api/applicant-bootstrap?country=ES&agency=PRT`
    fetch(url).then(response=>{
      console.log(response);
      return response.json()
    }).then(jsonResponse=>{
      console.log(jsonResponse)
      this.setState({option_banks:jsonResponse}, function(){
        let applicant = {...this.state.applicant}
        applicant['applicant_status'] = 'searched'
        this.setState({applicant:applicant})})
    })
  }



  handleFormSubmit(id){
    let applicant = {...this.state.applicant}
    console.log(this.state.test_info.gpi, this.state.test_info.medical_test);
    if (id=='save') {
      applicant['applicant_status']='save'
    } else if (this.state.test_info.gpi==='Failed' || this.state.test_info.medical_test=='Failed') {
      applicant['applicant_status']='rejected'
    } else {
      applicant['applicant_status']='approve'
    }
    this.setState({applicant:applicant}, function(){console.log(this.state.applicant)})
  }


  displayForm(){
    switch (this.state.applicant.applicant_status) {
      case 'searched':
        return <OtherForm test_info={this.state.test_info} vehicle_info={this.state.applicant.vehicle_info} company_info={this.state.applicant.company_info}
        bank_account_info={this.state.applicant.bank_account_info} driver_info={this.state.applicant.driver_info} option_banks={this.state.option_banks} onSend={this.handleFormSubmit} onChange={this.handleChange}
        onChange={this.handleChange} onMultiSelect={this.handleMultiSelect} onPhoneChange={this.handlePhoneChange}
        onDateChange={this.handleDateChange} onSelect={this.handleSelect} handleTestResponse={this.handleTest}/>
        break;

      case 'not exists':
        return (<Alert bsStyle="danger">
                  <h4>Oh snap! Driver doesnt exist!</h4>
                  <p>
                    Click on the botton below and go the onboarding landing page to register the driver as a new applicant.
                     Once created come back, search for him agaim and fill in the required info.
                  </p>
                  <p>
                    <Button bsStyle="danger" onClick={this.handleNewApplicant}>Create new Applicant</Button>
                  </p>
                </Alert>)
        break;

      case 'save':
        return (<Alert bsStyle="success">
                  <h4>Driver info has been saved!</h4>
                  <p>
                    Come back later and finish filling the form before approval. In the meantinme you can complete other drivers activation.
                  </p>
                </Alert>)
        break;

      case 'approve':
        return (<Alert bsStyle="success">
                  <h4>Driver has been approved!</h4>
                  <p>
                    You can now complete other drivers activation.
                  </p>
                </Alert>)
        break;

      case 'rejected':
        return (<Alert bsStyle="danger">
                  <h4>The driver has been rejected</h4>
                  <p>
                    This applicant does not meet the criteria specified to become a driver at Cabify.
                    You can complete other drivers activation.
                  </p>
                </Alert>)
        break;

      default:

    }

  }


  handleNewApplicant(){
    window.open('http://www.cabify.com/onboarding')
  }



  handleMultiSelect(option, id){
    let applicant = {...this.state.applicant}
    if (option.length > 0) {
      applicant.vehicle_info[option[0].name]=option;
    } else {
      applicant.vehicle_info[id] = '';
    }

    this.setState({applicant:applicant})
  }



  handleChange(e){
    const id = e.target.id
    let where = e.target.name.slice(0,3)
    console.log(where);
    let applicant;
    switch (where) {
      case 'dri':
        applicant = {...this.state.applicant}
        console.log(applicant.driver_info);
        if (e.target.files) {
          applicant.driver_info[e.target.id]= e.target.files
        } else {
          applicant.driver_info[e.target.id]= e.target.value
        }
        this.setState({applicant:applicant},()=>{console.log(this.state.applicant.driver_info.driving_license_upload)})
        break;

      case 'com':
        applicant = {...this.state.applicant}
        if (e.target.files) {
          applicant.company_info[e.target.id]= e.target.files
        } else {
          applicant.company_info[e.target.id]= e.target.value
        }
        this.setState({applicant:applicant})
        break;

      case 'veh':
        applicant = {...this.state.applicant}
        if (e.target.files) {
          applicant.vehicle_info[e.target.id]= e.target.files[0]
        } else {
          applicant.vehicle_info[e.target.id]= e.target.value
        }
        this.setState({applicant:applicant})
        break;

      default:
        applicant = {...this.state.applicant}
        if (e.target.files) {
          applicant.bank_account_info[e.target.id]= e.target.files[0]
        } else {
          applicant.bank_account_info[e.target.id]= e.target.value
        }
        this.setState({applicant:applicant})
        break;
    }
  }


  handleDateChange(date,id){
    let applicant
    switch (id) {
      case 'date_of_birth':
        applicant = {...this.state.applicant}
        applicant.driver_info['date_of_birth']= date
        this.setState({applicant:applicant})
        break;

      case 'driving_license_expiry_date':
        applicant = {...this.state.applicant}
        applicant.driver_info['driving_license_expiry_date']= date
        this.setState({applicant:applicant})
        break;

      case 'criminal_records_date':
        applicant = {...this.state.applicant}
        applicant.driver_info['criminal_records_date']= date
        this.setState({applicant:applicant})
        break;

      case 'vehicle_insurance_policy_expiry_date':
        applicant = {...this.state.applicant}
        applicant.vehicle_info['vehicle_insurance_policy_expiry_date']= date
        this.setState({applicant:applicant})
        break;

      default:

    }
  }


  handlePhoneChange(cc, number) {
    this.setState({
      applicant:{
      ...this.state.applicant,
      driver_info: {
        ...this.state.applicant.driver_info,
        mobile_cc : cc,
        mobile_num : number
      }}
    })
  }


  handleSelect(e){
    const id = e.id
    let where = e.id.slice(0,3)
    let applicant
    console.log(where);
    switch (where) {
      case 'dri':
        applicant = {...this.state.applicant}
        applicant.driver_info[e.name]= e.value
        this.setState({applicant:applicant})
        break;

      case 'com':
        applicant = {...this.state.applicant}
        applicant.company_info[e.id]= e.value
        this.setState({applicant:applicant})
        break;

      case 'veh':
        applicant = {...this.state.applicant}
        applicant.vehicle_info[e.name]= e.value
        this.setState({applicant:applicant})
        break;

      default:
        applicant = {...this.state.applicant}
        applicant.bank_account_info[e.name]= e.value
        this.setState({applicant:applicant})
        break;
    }
  }


  handleTest(e){
    let test = {...this.state.test_info}
    test[e.name] = e.value
    this.setState({test_info:test})
  }


  render() {
    return (

      <Grid>
      <Header/>
      juan.zumarraga@cabify.com
        <SearchApplicant getApplicant={this.getApplicant}/>
        {this.displayForm()}
      </Grid>

    );
  }
}

export default App;
