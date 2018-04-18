const Admin = {
  searchv1(email) {
    console.log(email);
    const applicant = {
      bank_account_info: {
        company_bank_account_bank_id: 'nil',
        company_bank_account_format: 'nil',
        company_bank_account_holder_name: 'nil',
        company_bank_account_holder_type: 'nil',
        company_bank_account_number: 'nil',
        company_bank_account_tax_document_code: 'nil',
        company_bank_account_tax_document_name: 'nil',
        company_bank_account_type: 'nil'
      },
      company_info: {
        company_id: 'nil',
        company_address: 'nil',
        company_city: 'nil',
        company_county: 'nil',
        company_email: 'nil',
        company_logistics_rep_id: 'nil',
        company_name: 'nil',
        company_phone_number: 'nil',
        company_post_code: 'nil',
        company_tax_code: 'nil'
      },
      driver_info: {
        email: "e",
        name: "j",
        surname: 'nil',
        last_name: "l",
        mobile_num: "978576485",
        mobile_cc: "34",
        criminal_records_date: 'nil',
        date_of_birth: 'nil',
        driver_fleet_role: 'nil',
        driver_gender: 'nil',
        driver_general_register_number: 'nil',
        driver_reserve_class: 'nil',
        driving_license_expiry_date: 'nil',
        driving_license_number: 'nil',
        national_id_number: 'nil',
        vehicle_insurance_policy_expiry_date: 'nil',
        vehicle_insurance_policy_number: 'nil'
      },
      vehicle_info: {
        colour: 'nil',
        local_certification_date: 'nil',
        local_certification_number: 'nil',
        plate: 'nil',
        region_id: 'nil',
        tariff_id: 'nil',
        vehicle_model_id: 'nil',
        vehicle_product_ids: 'nil',
        vehicle_registration_number: 'nil',
        vehicle_year: 'nil'
      }
    }

    return applicant

  },



  search(email){
    console.log(email);
    let url = `https://test.cabify.com/driver-onboarding/api/applicant-info?email=${email}`
    return fetch(url).then(response=>{return response.json()}).then(jsonResponse=>{console.log(jsonResponse);})
  },


  getOptionBanks(){
    return {
      "vehicle_types": [{'type1':'342343243'}, {type2:'2324234'}],
      "vehicle_models": {
          "e2ad5daabc5131256f6f0eb3521dc2f3": "Make1 Model1"
      },
      "tariffs": {
          "e2ad5daabc5131256f6f0eb3521dc804": "tariff1"
      },
      "products": {
          "e2ad5daabc5131256f6f0eb3521df6fa": "Executive",
          "e2ad5daabc5131256f6f0eb3521df086": "Lite Car"
      },
      "bank_options": {
          "IN194": "Jivan Commercial Cooperative Bank Limited"
      }
    }
  },


  update(applicant){
    console.log(applicant);
  }
}

export default Admin;
