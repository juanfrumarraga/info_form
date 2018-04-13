import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Fountain from '../../Util/endpoint';
import SearchApplicant from '../SearchApplicant/SearchApplicant';
import Test from '../Test/Test'


const schema= {
  type: "object",
  properties: {
    driver_info:{
      title: 'Driver info',
      type: 'object',
      properties:{
        first_name: {type:'string', title:'Name', default:'hijo puta'},
        last_name : {type:'string', title: 'Surname'},
        phone_number:{type:'number', title:'Phone number'},
        email: {type:'string', title: 'Email', format:'email'},
        national_id_number : {type:'string', title:'ID number'},
        date_of_birth : {type:'string', title:'Date of Birth', format:'date'},
        driving_license_number : {type:'string', title: 'Driving license number'},
        driving_license_expiry_date : {type:'string', title:'Driving license expiry date', format:'date'},
        driving_license_upload : {type:'string', title:'Driving license attachment', format:'data-url'},
        driver_gender: {type:'array', title:'Gender', items:{type:'string', enum:['Male', 'Female']}, uniqueItems:true},
        driver_fleet_role : {type:'string', title:'Fleet access'},
        driver_reserve_class : {type:'string', title:'Reserve class'},
        criminal_records_date : {type:'string', title:' Criminal records date'},
        criminal_records_attachment : {type:'string', title:'Criminal records attachment', format:'data-url'},

        /*BRAZIL ONLY*/

        driver_general_register_number : {type:'string', title:'Brazil Only RG'},
      }
    },

    vehicle_info: {
      title:'Vehicle Info',
      type: 'object',
      properties: {
        vehicle_model_id: {type:'string', title:'Vehicle model ID'},
        plate : {type:'string', title: 'Plate'},
        vehicle_year: {type:'string', title:'Vehicle Year'},
        colour : {type:'string', title: 'Colour'},
        tariff_id: {type:'string', title:'Tariff ID'},
        region_id : {type:'string', title: 'Region'},
        vehicle_icon: {type:'string', title:'Icon'},
        vehicle_type_id : {type:'string', title: 'VT'},
        vehicle_insurance_policy_upload : {type:'string', title:'Insurance Policy', format:'data-url'},
        vehicle_insurance_policy_number : {type:'string', title: 'Insurance policy number'},
        vehicle_insurance_policy_expiry_date : {type:'string', format:'date'},

        /*BRAZIL ONLY*/

        vehicle_registration_number: {type:'string', title:'Vehicle registration number'},
        local_certification_number : {type:'string', title:'Local certification number'},
        local_certification_date : {type:'string', title: 'Local certification date'},
        vehicle_upload_crlv : {type:'string', title: 'Vehicle CRLV', format:'data-url'}

      }
    },

    company_info : {
      title: 'Company Info',
      type: 'object',
      properties:{

        company_name : {type:'string', title: 'Name'},
        company_tax_code : {type:'string', title: 'Tax Code'},
        company_email : {type:'string', title: 'Email'},
        company_phone_number : {type:'string', title: 'Phone number'},
        company_city : {type:'string', title: 'City'},
        company_address : {type:'string', title: 'Address'},
        company_post_code : {type:'string', title: 'Post Code'},
        company_county : {type:'string', title: 'County'},
        company_logistics_rep_id : {type:'string', title: 'Logistics Rep ID'},

        /*INVERSIONISTAS ONLY*/
        driver_fleet_role: {type:'string', title: 'INVERSIONISTAS ONLY Name'},
        driver_reserve_class: {type:'string', title: 'INVERSIONISTAS ONLY Name'},

        /*CSA ONLY*/
        company_name: {type:'string', title: 'CSA ONLY Company Name'},
        company_name_id: {type:'string', title: 'CSA ONLY Company name ID'},


      }
    },


    payment_info : {
      title: 'Payment Info',
      type: 'object',
      properties:{

        company_bank_account_bank_id: {type:'string', title:'Bank account bank ID'},
        company_bank_account_type: {type:'string', title:'Bank account type'},
        company_bank_account_format: {type:'array', title:'Bank account format', items:{type:'string', enum:['IBAN', 'Local']}, uniqueItems:true, format:'checkboxes'},
        company_bank_account_number: {type:'string', title:'Bank account number'},
        company_bank_account_holder_type: {type:'string', title:'Bank account holder type'},
        company_bank_account_holder_name: {type:'string', title: 'Bank account holder name'},
        company_bank_account_tax_document_name: {type:'string', title: 'Bank account tax document name'},
        company_bank_account_tax_document_code: {type:'string', title: 'Bank account tax document code'},

        /*BRAZIL ONLY*/

        company_bank_account_digit: {type:'string', title: 'Bank account digit'},
        company_bank_agency_number: {type:'string', title: 'Bank agency number'},

      }
    }



  }
}


const properties = Object.keys(schema.properties.driver_info.properties)


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      applicant:{}

      }

    this.getApplicant=this.getApplicant.bind(this);
    this.formData=this.formData.bind(this);
  }

  formData(){
    console.log(properties);
    return{
    vehicle_info:this.state.applicant,
    company_info:this.state.applicant,
    payment_info:this.state.applicant
    }

  }

  getApplicant(email){
    console.log(email);
    let applicant = Fountain.searchv1(email);
    console.log(applicant);
    this.setState({applicant:Object.assign({}, applicant, applicant.data)})

  }


  render() {
    return (
      <div className="App">
      <Header />
        <SearchApplicant getApplicant={this.getApplicant}/>
        <Test applicant={this.state.applicant} cosa={this.formData()}/>
      </div>
    );
  }
}

export default App;
