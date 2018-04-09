const Fountain = {
  search(email) {
    console.log(email);

        return {
          first_name:'Juan',
          last_name:'test',
          email:email,
          phone:+345684579565,
          country:'ES'
        };
    }
  ,



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
