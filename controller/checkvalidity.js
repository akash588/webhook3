
const axios = require('axios');
const _config =  require('../config')
const AC = require('./ActivecampaignTag')

async function checkEmailValidity (email,contactId)  {
  let data = JSON.stringify({
    "email" : email
  });
  // await sleep(5000)
   try{
     const response = await axios({
       method: 'POST',
       url: 'https://bpi.briteverify.com/api/v1/fullverify',
       headers: {
        'Content-Type': 'application/json', 
        'Authorization': 'ApiKey: b868e2a4-e5b2-4c68-847f-57d3f57e53c2'
       },
       data : data
     });
     console.log(response.data) 
    await AC(response.data.email.status, contactId)
   }
   catch (err) {
    console.error(err);
}

}
    const sleep = (time) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, time);
        });
      };

module.exports = checkEmailValidity;