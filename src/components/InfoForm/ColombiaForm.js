import React from "react";
import Form from "react-jsonschema-form";
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCheckbox = function(props) {
  return (
    <select data-live-seach='true'>
    	{props.value}
    </select>
  );
};

const widgets = {
  CheckboxWidget: CustomCheckbox
};


class ColombiaForm extends React.Component{
  constructor(props){
    super(props)
  }


  schema() {return {
    type: "object",
    properties: {

      driver_info:{
        title: 'Driver info',
        type: 'object',
        properties:{
          name: {type:'string', title:'Name', default:'hijo puta'},
          surname : {type:'string', title: 'Surname'},
          mobile_num:{type:'number', title:'Phone number'},
          email: {type:'string', title: 'Email', format:'email'},
          national_id_number : {type:'string', title:'ID number'},
          date_of_birth : {type:'string', title:'Date of Birth', format:'date'},
          driving_license_number : {type:'string', title: 'Driving license number'},
          driving_license_expiry_date : {type:'string', title:'Driving license expiry date', format:'date'},
          driving_license_upload : {type:'string', title:'Driving license attachment', format:'data-url'},
          driver_gender: {type:'array', title:'Gender', items:{type:'boolean', enum:['Male', 'Female']}, uniqueItems:true},
          driver_fleet_role : {type:'string', title:'Fleet access', enum:['User', 'Manager'], default:'User'},
          driver_reserve_class : {type:'string', title:'Reserve class', enum:['Platinum', 'Gold', 'Silver', 'Bronze']},
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
          vehicle_model_id: {type:'string', title:'Vehicle model ID', 'enum':this.props.option_banks.vehicle_models.map(type=>type[1]), enumNames:this.props.option_banks.vehicle_models.map(type=>type[0])},
          plate : {type:'string', title: 'Plate'},
          vehicle_year: {type:'string', title:'Vehicle Year', enum:[2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 'Anterior a 2010']},
          colour : {type:'string', title: 'Colour', enum:[
            'Aqua','Beige', 'Negro', 'Azul', 'Chocolate', 'Fucsia', 'Dorado', 'Verde', 'Gris', 'Lima',
            'Granate', 'Azul marino', 'Color aceituna', 'Naranja', 'Morado', 'Rojo', 'Plata', 'Verde azulado', 'Blanco', 'Amarillo']},
          tariff_id: {type:'string', title:'Tariff ID', enum:this.props.option_banks.tariffs.map(tariff=>tariff[1]), enumNames:this.props.option_banks.tariffs.map(tariff=>tariff[0])},

          //Susceptible Option Bank Ciudad
          region_id : {type:'string', title: 'Region'},

          products: {type:'string', title:'Vehicle Product IDs', enum:this.props.option_banks.products.map(product=>product[1]), enumNames:this.props.option_banks.products.map(product=>product[0])},
          vehicle_type_id : {type:'string', title: 'Vehicle Type', enum:this.props.option_banks.vehicle_types.map(tariff=>tariff[1]), enumNames:this.props.option_banks.vehicle_types.map(tariff=>tariff[0])},
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

          //Susceptible Option Bank
          company_city : {type:'string', title: 'City'},

          company_address : {type:'string', title: 'Address'},
          company_post_code : {type:'string', title: 'Post Code'},

          //Susceptible Option Bank
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


      bank_account_info : {
        title: 'Payment Info',
        type: 'object',
        properties:{

          company_bank_account_bank_id: {type:'string', title:'Bank account bank ID', enum:this.props.option_banks.bank_options.map(bank=>bank[1]), enumNames:this.props.option_banks.bank_options.map(bank=>bank[0])},

          //Susceptible Option Bank
          company_bank_account_swift: {type:'string', title:'SWIFT'},
          company_bank_account_type: {type:'string', title:'Bank account type', enum:['Cuenta corriente', 'Cuenta de ahorro']},
          company_bank_account_format: {type:'array', title:'Bank account format', items:{type:'string', enum:['IBAN', 'Local']}, uniqueItems:true, format:'checkboxes'},
          company_bank_account_number: {type:'string', title:'Bank account number'},
          company_bank_account_holder_type: {type:'string', title:'Bank account holder type', enum:['Particular', 'Empresa']},
          company_bank_account_holder_name: {type:'string', title: 'Bank account holder name'},
          company_bank_account_tax_document_name: {type:'string', title: 'Bank account tax document name'},

          //Susceptible Option Bank
          company_bank_account_tax_document_code: {type:'string', title: 'Bank account tax document code'},

          /*BRAZIL ONLY*/

          company_bank_account_digit: {type:'string', title: 'Bank account digit'},
          company_bank_agency_number: {type:'string', title: 'Bank agency number'},

        }
      },

      applicant_status: {
        title: 'Applicant status',
        type: 'object',
        required:['save'],
        properties: {
          save: {type:'boolean', title: 'Save data for later?', "description": "Check Yes if Applicant needs to complete steps before activation"}
        }
      }
    }
  };
}



  uiSchema(){
    return {
      applicant_status: {save: {'ui:widget': 'radio'}}
    }
  }



  log = (type) => console.log.bind(console, type);


  render(){

    return (
    <div className='InfoForm container'>
      <Form schema={this.schema()}
            widgets={widgets}
            onSubmit={this.props.onSubmit}
            onError={this.log("errors")}
            onSave={this.onSave}
            uiSchema={this.uiSchema()}
            formData={this.props.formData}>
      <div>
        <button type="submit" class="btn btn-success">Submit</button>
      </div>
      </Form>
    </div>
    )

  }
}

export default ColombiaForm
