const Fountain = {
  searchv1(email) {
    console.log(email);
    const applicant = {
      'email': 'cabsupmex4@dayrep.com',
      'name': 'juan pedrod',
      'first_name': 'juan',
      'last_name': 'pedrod',
      'phone_number': '+345465',
      'data': {
          'vehicle_model_id': '089d2c97a5ba948c400f9f3e68012e80',
          'plate': '3455fd',
          'colour': 'black',
          'vehicle_year': '2010 o superior',
          'date_of_birth': '1977-06-09',
          'driver_gender': 'male',
          'selecciona_la_opcion_que_mejor_describa_tu_situacion_fiscal': 'Estoy dado de alta como Persona Física ya sea bajo el Régimen de Incorporación Fiscal (RIF) o el de Actividad Empresarial y la actividad declarada está relacionada al transporte privado de personas, y desde mi Persona Física deseo facturar mis ingresos a Cabify.',
          'region_id': 'monterrey',
          'tariff_id': '13ae1d8617bff2b4b716999f2c857977',
          'company_name': 'super guay SL',
          'company_city': 'Mexico DF',
          'company_tax_code': '123456',
          'company_email': 'nomedigasQ@hotam.com',
          'company_phone_number': '23423435443532\\',
          'company_post_code': '49002DV',
          'company_county': 'DF',
          'company_bank_account_holder_name': 'Pedro no mas',
          'company_bank_account_tax_document_code': '12323K',
          'company_bank_account_number': 'fsafasfsaf43525234532',
          'company_bank_account_tax_document_name': 'PASAPORTE',
          'company_bank_account_bank_id': '174f8733c0a204dd984a056ddd7d1e8c',
          'driver_reserve_class': 'gold',
          'vehicle_type_id': [
              '21620ea5749f2e0679a8c72c7fbafb9e',
              '474b4d77b21cbfbeaeb8833b13137345',
              '4899983e77f6e27a2988e2f607e28b8b'
          ],
          'vehicle_product_ids': [
              '6b62762b507c6c7ff896b5006f5f4a65',
              '79744aa6ee9402a3553191caa152c354',
              'ec2dca86bed39284f72d1743f8a2dcd6'
          ],
          'company_bank_account_format': 'local_bank_account',
          'tiene_usted_antecedentes_penales': 'No, no tengo registro positivo en mis antecedentes penales',
          'company_bank_account_swift': 'afjkasddfkja',
          'criminal_records_date': '2018-04-23',
          'folio_de_licencia': 'fasfasfa',
          'driving_license_number': 'fasdfasfas324r234',
          'selecciona_la_identificacion_oficial_vigente_con_la_que_cuentas': 'IFE / INE',
          'driving_license_expiry_date': '2018-04-24',
          'driver_fleet_role': 'user',
          'ccompany_bank_account_holder_type': 'Private',
          'company_bank_account_type': [
              'current_account'
          ],
          'company_logistics_rep_id': '80ff70ac33d1368f77b5d10ee98e59b1'
      },
      'created_at': '2018-03-15T08:54:56.003-07:00',
      'receive_automated_emails': true,
      'labels': [],
      'last_transitioned_at': '2018-03-19T09:44:24.595-07:00',
      'secure_data': {},
      'lessonly': {
          'lesson_results': [],
          'path_results': [],
          'course_results': []
      },
      'id': '1a26dc1f-2fac-4d01-8071-751aa463974a',
      'background_checks': [],
      'document_signatures': [],
      'country': 'Mexico',
      'funnel': {
          'title': 'CCA-MEX',
          'custom_id': null,
          'id': 'cd0872c8-514c-4061-8afd-7b4176bce216',
          'location': {
              'name': 'Bahia de todos los santos, 146, Veronica Anzures, 11300',
              'id': 'a1b6d643-ec13-4c64-80d9-59781f92d523'
          }
      },
      'stage': {
          'title': 'Schoolkeep',
          'id': 'dfa3500e-11b6-42b5-959d-ad3f2fa6bd0c'
      },
      'score_cards_results': []
    }

    const driver = {
      email: applicant.email,
      first_name: applicant.first_name,
      last_name: applicant.last_name,
      country: applicant.country,
      date_of_birth: applicant.data.date_of_birth,
      phone_number: applicant.phone_number,
      id_document: '',
      driving_license_number: applicant.data.driving_license_number,
      driving_license_expiry_date: applicant.data.driving_license_expiry_date,
      situacion_fiscal: applicant.data.selecciona_la_opcion_que_mejor_describa_tu_situacion_fiscal,
      tiene_usted_antecedentes_penales: applicant.data.tiene_usted_antecedentes_penales,
      criminal_record_document: '',
      criminal_records_date: applicant.data.criminal_records_date,
      driver_reserve_class: applicant.data.driver_reserve_class,
      driver_fleet_role: applicant.data.driver_fleet_role,
      driver_gender: applicant.data.driver_gender,
      stage_title: applicant.stage_title,
      stage_id: applicant.stage_id
    }

    const vehicle = {
      plate : applicant.data.plate,
      colour: applicant.data.colour,
      model: applicant.data.model_id,
      year: applicant.data.vehicle_year,
      tariff_type: applicant.data.tariff_id,
      product_id: applicant.data.vehicle_product_ids
    }

    const company = {
      company_name: applicant.data.company_name,
      company_email: applicant.data.company_email,
      company_phone_number: applicant.data.company_phone_number,
      company_city: applicant.data.company_city,
      company_post_code: applicant.data.company_post_code,
      company_county: applicant.data.company_county,
      company_tax_code: applicant.data.company_tax_code,
      company_bank_account_holder_name: applicant.data.company_bank_account_holder_name,
      company_bank_account_tax_document_code: applicant.data.company_bank_account_tax_document_code,
      company_bank_account_number: applicant.data.company_bank_account_number,
      company_bank_account_tax_document_name: applicant.data.company_bank_account_tax_document_name,
      company_bank_account_bank_id: applicant.data.company_bank_account_bank_id,
      company_bank_account_format: applicant.data.company_bank_account_format,
      company_bank_account_swift: applicant.data.company_bank_account_swift,
      ccompany_bank_account_holder_type: applicant.data.ccompany_bank_account_holder_type,
      company_bank_account_type: applicant.data.company_bank_account_type,
      company_logistics_rep_id: applicant.data.company_logistics_rep_id
    }

    return applicant

    }

  ,



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
