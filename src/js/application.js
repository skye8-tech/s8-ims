import { postRequest } from "../utils.js";

const $nextFormBtn = document.querySelector('#next-form-btn');
const $prevFormBtn = document.querySelector('#prev-form-btn');

const $prevFormContent = document.querySelector('#prev-form');
const $nextFormContent = document.querySelector('#next-form');

const $formPersonalInfo = document.querySelector('#personal-info');
const $formRequiredInfo = document.querySelector('#required-info');

const formData = {};

const saveForm1Data = () => {
    console.log('naga in form 1')
    formData['firstname'] = $formPersonalInfo.firstname.value;
    formData['lastname'] = $formPersonalInfo.lastname.value;
    formData['address'] = $formPersonalInfo.address.value;
    formData['email'] = $formPersonalInfo.email.value;
    formData['contact'] = $formPersonalInfo.contact.value;
    formData['gender'] = $formPersonalInfo.gender.value;
}

const saveForm2Data = () => {
    console.log('niga in form 2')
    formData['schoolname'] = $formRequiredInfo.schoolname.value;
    formData['department'] = $formRequiredInfo.department.value;
<<<<<<< HEAD
    formData['special'] = $formRequiredInfo.specialisation.value;
    formData['startDate'] = $formRequiredInfo.startDate.value;
    formData['startDate'] = $formRequiredInfo.attachment.value;
    formData['startDate'] = $formRequiredInfo.level.value;
=======
    formData['specialty'] = $formRequiredInfo.specialisation.value;
    formData['startDate'] = $formRequiredInfo.startDate.value;
    formData['attatchment'] = $formRequiredInfo.attachment.value;
    formData['Level'] = $formRequiredInfo.level.value;
    formData['Duration'] = $formRequiredInfo.duration.value;
>>>>>>> main
}



const formToggler = () => {
    $prevFormContent.classList.toggle('invisible');
    $nextFormContent.classList.toggle('invisible');
}

$nextFormBtn.addEventListener('click', () => {
    saveForm1Data();
    formToggler();
})
$prevFormBtn.addEventListener('click', formToggler)

$formRequiredInfo.addEventListener('submit', (e) => {
    e.preventDefault();
    saveForm2Data();

<<<<<<< HEAD
    console.log(formData)
    postRequest('applications', formData)
        .then(res => {
            console.log(res);
        })
=======
    console.log(formData);
    postRequest('applications', formData)
        .then(res => {
            console.log(res);
    })
>>>>>>> main
})