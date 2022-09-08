'use strict'
//import postRequest function from utils.js
import { postRequest } from "../utils.js";

// Declaration of variables
let id = JSON.parse(sessionStorage.getItem('user_details')).id;
const $logbook = document.querySelector('#form1');

//New form data to hold users input data from logbook
const form1data = {};

//Saveform1Data function saves all user input in a particular format
const saveform1Data = () => {
    form1data['userid']= id,
    form1data['content'] = $logbook.content.value,
    form1data['date'] = $logbook.date.value; 
}
// Method to save form data and poston end point
$logbook.addEventListener('submit', (e) => {
    e.preventDefault(); 
    saveform1Data();

    console.log(form1data)
    postRequest(`logbooks/${id}`, form1data) //Post request 
    .then(res => {
      console.log(res)
    })
   //loogbook refreshes on submit
    document.forms[0].reset();

})






     






