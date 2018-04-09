import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Driver from '../Driver/Driver';
import Vehicle from '../Vehicle/Vehicle';
import Company from '../Company/Company';
import Fountain from '../../Util/endpoint';
import Submit from '../Submit/Submit';
import SearchApplicant from '../SearchApplicant/SearchApplicant';


const applicant = {
  "name": 'Juan Zumarraga',
  "first_name": 'Juan',
  "last_name": 'Zumarraga',
  "email": 'test@cabify.com',
  "phone_number": '4545465465',
  "data": {
        "cca_auto": "Sim",
        "cca_flota": " Não",
        "vehicle_model_id": "74ad0147518c46fc04ca8e7e94a35d8a",
        "vehicle_year": "2013",
        "colour": "olive",
        "plate": "FJD1101",
        "vehicle_registration_number": "00534827004",
        "local_certification_number": "013336716089",
        "local_certification_date": "2017-05-10",
        "national_id_number": "35854602830",
        "voce_possui_alguma_pendencia_juridico_penal": "Não, nada consta no meu atestado de antecedentes criminais",
        "date_of_birth": "1986-03-03",
        "driver_gender": "male",
        "driver_general_register_number": "424937335",
        "driving_license_number": "04483272248",
        "company_tax_code": "358.546.028-30",
        "company_address": "Avenida Laurita Ortega Mari, 1522",
        "company_county": "Parque Pinheiros",
        "company_city": "São Paulo",
        "company_bank_account_number": "03603",
        "company_bank_agency_number": "8215",
        "company_post_code": "06766361",
        "company_bank_account_digit": "2",
        "region_id": "br_sao_paulo",
        "driver_fleet_role": "user",
        "vehicle_icon": "lite",
        "tariff_id": "183601e507bd6a48fc7eb4adf5572f14",
        "company_bank_account_tax_document_name": "CPF",
        "company_bank_account_tax_document_code": "35854602830",
        "company_bank_account_type": "current_account",
        "company_bank_account_bank_id": "BR46",
        "company_logistics_rep_id": "d9147c81974f74018ebc13f8d4bef2c7",
        "company_phone_number": "11986185181",
        "company_email": "leonardo_ads@yahoo.com.br",
        "vehicle_product_icon": "3d3716c43ef835a9d46d1c67a39d4630",
        "vehicle_product_ids": "7da40add1baab37e19cae629f6907b13",
        "company_name": "Leonardo Henrique Silva",
        "company_bank_account_holder_name": "Leonardo Henrique Silva",
        "vehicle_type_id": [
            "4e7e51c3fe71deaab34434280e24cb9d",
            "b890a89376d259eed3215cc2ccc85d04",
            "e0fd747d0e4c00caa2876706e6d1fc68"
        ],
        "criminal_records_date": "2017-12-18",
        "company_bank_account_format": "local_bank_account",
        "company_bank_account_holder_type": "Private",
        "driving_license_expiry_date": "2018-01-21",
        "errors": "",
        "company_id": ""
      },

    "created_at": "2017-10-26T11:46:13.568-07:00",
    "receive_automated_emails": true,
    "labels": [
        {
            "title": "Test medico feito",
            "completed": false
        }
    ],
    "last_transitioned_at": "2017-12-21T05:10:43.369-08:00",
    "secure_data": {},
    "id": "f3d2a59e-aee5-485d-b069-1d67186f79a1",
    "background_checks": [],
    "document_signatures": [],
    "country": "BR",
    "funnel": {
        "title": "CCA-SAO",
        "custom_id": null,
        "id": "c4707b3b-7654-4423-a484-1c69431a33fb"
    },
    "stage": {
        "title": "Activated",
        "id": "5b4676bc-590d-4578-898c-6945094c5811"}
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      company_name:'',
      data:{}
    }
    this.changeApplicant=this.changeApplicant.bind(this);
    this.updateApplicant=this.updateApplicant.bind(this);
    this.getApplicant=this.getApplicant.bind(this);
  }

  getApplicant(email){
    console.log(email);
    let applicant = Fountain.search(email)
    console.log(applicant);
    this.setState({data:applicant})

  }


  changeApplicant(type, id, value) {
    if (type==='data') {
      let data = Object.assign({}, this.state.data)
      data[id] = value
      this.setState({data});
    } else {
      this.setState({[id]:value});
    }
  }


  updateApplicant(){
    console.log(this.state);
    Fountain.update(this.state)
  }

  searchInfo(){
    if (this.state.data.first_name) {
        return (<div className='container'><Driver applicant={this.state.data} /></div>)
    }
  }

  render() {
    return (
      <div className="App">
        {/*}<div className='container' style={{background:'rgb(134, 91, 244)', marginBottom:20}}>
            <img src={Logo} alt='logo' style={{height:150, align:'center'}}/>
        </div>*/}
        <SearchApplicant getApplicant={this.getApplicant}/>
        {this.searchInfo()}
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
