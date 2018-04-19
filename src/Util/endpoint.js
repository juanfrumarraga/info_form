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
        region_id: 'Colombia',
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

      'vehicle_types': [
          ['Cabify Lite', '65465465asdgvadfg4'],
          ['Cabify Premium', '654654653treg4'],
          ['Cabify Como mola', '65465465fas4'],
          ['Amazon', '654654654fasd'],
          ['Airport', '6546546gfad54asdfas'],
          ['Otro tipo', '654654654'],
          ['Glovo', '6fda54654654'],
        ],


      'vehicle_models': [
          ['Audi A4', '65465465asdgvadfg4'],
          ['VW X6', '654654653treg4'],
          ['Volvo XC70', '65465465fas4'],
          ['Mercedes A', '654654654fasd'],
          ['Seat Pasada', '6546546gfad54asdfas'],
          ['Audi Coca Cola', '654654654']
        ],


      'tariffs': [
        ['BUE Executive', '65465465asdgvadfg4'],
        ['BUE Lite', '654654653treg4'],
        ['BUE Lite 2', '65465465fas4'],
        ['ROS Lite', '654654654fasd'],
        ['Zero', '6546546gfad54asdfas']
      ],


      'products': [
        ['Cabify Lite', '65465465asdgvadfg4'],
        ['Cabify Premium', '654654653treg4'],
        ['Cabify Como mola', '65465465fas4'],
        ['Amazon', '654654654fasd'],
        ['Airport', '6546546gfad54asdfas'],
        ['Otro tipo', '654654654'],
        ['Glovo', '6fda54654654'],
      ],


      'bank_options': [
          ["Jivan Commercial Cooperative Bank Limited", "IN1945"],
          ["Banco Molo Mucho", "IN19445f"],
          ["Banco me quedo tu dinero", "IN194fsa34"],
          ["Banquitos", "IN1asd9fas4"],
      ],


      'region_id':[
        ['Spain', '65465465asdgvadfg4'],
        ['Belgium', '654654653treg4'],
        ['Costa de Marfil', '65465465fas4'],
        ['JnilloLandia', '654654654fasd'],
        ['Los Alamos', '6546546gfad54asdfas'],
        ['Alcala Meco', '654654654'],
        ['Mas que Spain', '6fda54654654']
      ],


      /*'region_id':[
        ['Spain', '65465465asdgvadfg4'],
        ['Belgium', '654654653treg4'],
        ['Costa de Marfil', '65465465fas4'],
        ['JnilloLandia', '654654654fasd'],
        ['Los Alamos', '6546546gfad54asdfas'],
        ['Alcala Meco', '654654654'],
        ['Mas que Spain', '6fda54654654'],
      ],


      'colour':[
        ['Grey', '65465465asdgvadfg4'],
        ['Nigger', '654654653treg4'],
        ['Doradito', '65465465fas4'],
        ['Rosita como a ti te gusta', '654654654fasd'],
        ['Verde que te quiero verde', '6546546gfad54asdfas'],
        ['Rojo sangre', '654654654'],
        ['Amarillo Solecillo', '6fda54654654'],


        'company_bank_account_tax_document_name':[
            'Pasaporte',
            'ID/NIE',
            'Carta de extranjeria'
        ]*/

    }
  },


  update(applicant){
    console.log(applicant);
  }
}

export default Admin;
