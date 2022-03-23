
const axios = require('axios');
const updateContact = require('./updatecontact')

async function ACtags (status, contactId)  {  
    var tag = "";
   console.log("status>>>>>>>>",status)
   if(status == "invalid"){
       tag = "11"
   }
   else if(status == "valid"){
    tag = "10"
}else if(status == "accept_all"){
  tag = "7"
}else if(status == "unknown"){
  tag = "8"
}else{
    return;
}
      // await sleep(5000)
      var data = JSON.stringify({
        "contactTag": {
          "contact": contactId,
          "tag": tag
        }
      });
      
      var config = {
        method: 'post',
        url: 'https://nobabyblisters.api-us1.com/api/3/contactTags',
        headers: { 
          'Api-Token': '2e628bc8de4f74c985cd8890af38fc24133c77e2c83d4bcc75b48ace541f879496919295', 
          'Content-Type': 'application/json', 
          'Cookie': 'PHPSESSID=c4ccb080ea244f6f15751ddf01cf5bc6; em_acp_globalauth_cookie=7f83920b-b1c4-4e89-a8fa-d6ec340ffb4c'
        },
        data : data
      };
      
      axios(config)
      .then( async function (response) {
        console.log(JSON.stringify(response.data));
        await updateContact(contactId, status)
      })
      .catch(function (error) {
        console.log(error);
      });
      
    
    }

module.exports = ACtags;



