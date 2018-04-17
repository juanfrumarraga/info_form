const Fountain = {
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
    let url = `https://test.cabify.com/driver-onboarding/api/onboarding-info?email=${email}`
    return fetch(url).then(response=>{return response.json()}).then(jsonResponse=>{return jsonResponse})
  },



  update(applicant){
    const url = 'https://api.fountain.com/v2/applicants/a6697ce4-7585-40ea-8873-04af36450b33';
    return fetch(url, {
      method:'PUT',
      body: JSON.stringify(applicant),
      headers: {'Content-Type': 'application/json'}
    }).then(response=>{
        return response.json();
        console.log(response.json());
    }).then(jsonResponse => {
        return jsonResponse;
    })
  }
}

export default Fountain;
