'use strict'
const school = document.getElementById('school');
const department = document.getElementById('department');
const attatchment = document.getElementById('attatchment');
const date = document.getElementById('date');
const duration = document.getElementById('duration');
const policy = document.getElementById('check');
const popup = document.getElementById('modal');

 //Event...#Pop-up message

FormData.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInput();

});
function checkInput(){
    //get values from input
   const schoolValue = school.value.trim();
   const departmentValue = department.value.trim();
   const attatchmentValue = attatchment.value.trim();
   const dateValue = date.value;
   const policyValue = policy.value;

   if(schoolValue == ''){
    //show error
    setErrorfor(school, 'name of school cannot be blank')
    
   }else{
    //show success
    setSuccessfor(school)
   }
};
function setErrorfor(input, message){

}
function setSuccessfor(input, message){
    
}


