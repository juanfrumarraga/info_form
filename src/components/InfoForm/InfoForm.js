import React from "react";
import Form from "react-jsonschema-form";
import 'bootstrap/dist/css/bootstrap.min.css';




class InfoForm extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }


  schema() {return {
    type: "object",
    properties: {
      driver_info:{
        title: 'Driver info',
        type: 'object',
        properties:{
          name: {type:'string', title:'Name', default:'hijo puta'},
          select_example: {
            type:'string',
            title:'Select Example',
            "enum": this.props.selectTest.map(option=>option)
          },
          surname : {type:'string', title: 'Surname'},
          mobile_num:{type:'number', title:'Phone number'},
          email: {type:'string', title: 'Email', format:'email'},
          national_id_number : {type:'string', title:'ID number'},
          date_of_birth : {type:'string', title:'Date of Birth', format:'date'},
          driving_license_number : {type:'string', title: 'Driving license number'},
          driving_license_expiry_date : {type:'string', title:'Driving license expiry date', format:'date'},
          driving_license_upload : {type:'string', title:'Driving license attachment', format:'data-url'},
          driver_gender: {type:'array', title:'Gender', items:{type:'boolean', enum:['Male', 'Female']}, uniqueItems:true},
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


      bank_account_info : {
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
  };
}








/*{
  "title": "Widgets",
  "type": "object",
  "properties": {
    "stringFormats": {
      "type": "object",
      "title": "String formats",
      "properties": {
        "email": {
          "type": "string",
          "format": "email"
        },
        "uri": {
          "type": "string",
          "format": "uri"
        }
      }
    },
    "boolean": {
      "type": "object",
      "title": "Boolean field",
      "properties": {
        "default": {
          "type": "boolean",
          "title": "checkbox (default)",
          "description": "This is the checkbox-description"
        },
        "radio": {
          "type": "boolean",
          "title": "radio buttons",
          "description": "This is the radio-description"
        },
        "select": {
          "type": "boolean",
          "title": "select box",
          "description": "This is the select-description"
        }
      }
    },
    "string": {
      "type": "object",
      "title": "String field",
      "properties": {
        "default": {
          "type": "string",
          "title": "text input (default)"
        },
        "textarea": {
          "type": "string",
          "title": "textarea"
        },
        "color": {
          "type": "string",
          "title": "color picker",
          "default": "#151ce6"
        }
      }
    },
    "secret": {
      "type": "string",
      "default": "I'm a hidden string."
    },
    "disabled": {
      "type": "string",
      "title": "A disabled field",
      "default": "I am disabled."
    },
    "readonly": {
      "type": "string",
      "title": "A readonly field",
      "default": "I am read-only."
    },
    "widgetOptions": {
      "title": "Custom widget with options",
      "type": "string",
      "default": "I am yellow"
    },
    "selectWidgetOptions": {
      "title": "Custom select widget with options",
      "type": "string",
      "enum": [
        "foo",
        "bar"
      ],
      "enumNames": [
        "Foo",
        "Bar"
      ]
    }
  }
}*/











  uiSchema(){return {}}



  log = (type) => console.log.bind(console, type);



  render(){

    return (
      <div className='Test container'>
        <Form schema={this.schema()}
              onSubmit={this.log("submitted")}
              onError={this.log("errors")}
              uiSchema={this.uiSchema()}
              formData={this.props.formData}>
          <div className="container">
            <div className="row">
              <div className='col-md-3 offset-md-3'>
                <button type="submit">Save</button>
              </div>
              <div className='col-md-3 offset-md-3'>
                <button type="button">Cancel</button>
              </div>
            </div>
          </div>
        </Form>
      </div>
        )

}
}

export default InfoForm
