const express = require('express');
const app = express();
const axios = require('axios');
//const cors = require('cors');
//const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const emailValidity = require('./controller/checkvalidity')

const PORT = process.env.PORT || 7000;

app.use(express.json())

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))


app.post("/webhook", (req, res) => {
    console.log(req.body)
    emailValidity(req.body.contact.email,req.body.contact.id)
    res.send("OK").status(200)
  })




  // const sleep = (time) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(true);
  //     }, time);
  //   });
  // };
  


// function checkValidyOfEmail(email){
//     let data = JSON.stringify({
//         "email": email
//       });
      
//       let config = {
//         method: 'post',
//         url: 'https://bpi.briteverify.com/api/v1/fullverify',
//         headers: { 
//           'Content-Type': 'application/json', 
//           'Authorization': 'ApiKey: b868e2a4-e5b2-4c68-847f-57d3f57e53c2'
//         },
//         data : data
//       };

//       axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
    


app.listen(PORT, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log(`Server is listening on PORT ${PORT}`);
    }
})
































//--------------------------------------------------------------------------------------->

// let mailTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'akash.palve.techinvento@gmail.com',
//         pass: '**********'
//     }
// });
    
// let mailDetails = {
//     from: 'akash.palve.techinvento@gmail.com',
//     to: 'akash.palve.techinvento@gmail.com',
//     subject: 'Test',
//     text: 'This is test mail from Akash'
// };
  
// mailTransporter.sendMail(mailDetails, function(err, data) {
//     if(err) {
//         console.log('Error Occurs');
//     } else {
//         console.log(`Email sent successfully ${data}`);
//     }
// });

