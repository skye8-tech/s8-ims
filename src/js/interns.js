'use strict'

import { postRequest } from "../utils.js";

const $save = document.querySelector('#save');
//const $submit = document.querySelector('#submit');

const $logbook = document.querySelector('#form1');
//giconst $review = document.querySelector('#form2');

const form1data = {};

const saveform1Data = () => {
    //form1data['userid'] = $logbook.userid.value,
    form1data['content'] = $logbook.content.value,
    form1data['date'] = $logbook.date.value;

   
}
// const form2data = {};

// const saveform2Data = ()=>{
//     //form2data['userid'] = $review.userid.value,
//     form2data['content1'] = $review.content1.value;
//     //form2data['date'] = $review.date.value;

   
// }

$save.addEventListener('click', () => {
    saveform1Data();

})
// $submit.addEventListener('click', () => {
//     saveform2Data();

// })
$logbook.addEventListener('submit', (e) => {
    e.preventDefault();
    saveform1Data();

    console.log(form1data)
    postRequest('https:;//s8-ims-api.herokuapp.com/api/logbooks/', form1data)
    .then(res => {
      console.log(res)
      //console.warn('saved', {form1data});
    })
   
    document.forms[0].reset();

})
// $review.addEventListener('submit', (e) => {
//     e.preventDefault();
//     saveform2Data();

//     console.log(form2data)
//     postRequest('https:;//s8-ims-api.herokuapp.com/api/logbooks/', form2data)
//     .then(res => {
//        console.log(res)
//     })
//     document.forms[0].reset();
// })





     






