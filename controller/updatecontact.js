

async function updateValidationStatus(id, status){

    var axios = require('axios');
    var data = JSON.stringify({
      "contact": {
        "fieldValues": [
          {
            "field": "5",
            "value": status
          }
        ]
      }
    });
    
    var config = {
      method: 'put',
      url: `https://nobabyblisters.api-us1.com/api/3/contacts/${id}`,
      headers: { 
        'Api-Token': '2e628bc8de4f74c985cd8890af38fc24133c77e2c83d4bcc75b48ace541f879496919295', 
        'Content-Type': 'application/json', 
        'Cookie': 'PHPSESSID=accda1cca28c2d7e452950a419563898; em_acp_globalauth_cookie=b9821d78-11e1-447a-8047-a78eef68564b'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    




}
module.exports = updateValidationStatus;