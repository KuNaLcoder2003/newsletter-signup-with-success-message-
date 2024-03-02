//  validating form input
const form = document.querySelector('.form');
const email_input = document.querySelector('#email');
const error_message = document.querySelector('.sub-para');
error_message.style.display = 'none';
const success_screen = document.querySelector('.sucess-screen');
const content_container = document.querySelector('.content-container');
const data_eamil = document.querySelector('[data-eamil]');

const validateFormSubmission = (form)=>{
    let isValid = true;
    for(let i =0 ; i < form.elements.length ; i++){
        let element  = form.elements[i];
        let input_value = element.value;
        if((input_value === "" || input_value === " ") && element.classList.contains('req')){
            isValid = false;
        }
    }
    if (isValid) {
        success_screen.classList.add('active');
        content_container.style.display = 'none';
        data_eamil.textContent = email_input.value;
        return;
    } else {
        content_container.style.display = 'flex';
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validateFormSubmission(form);
})

function validateEmail(email){
    let arr = ['@' , '.com'];
    let symbols = '#!$%^&*(){}[]""?><,+-=';
    let matachCount = 0;
    let hasSymbol = false;
    if(email.includes(arr[0])) {
        matachCount++;
    }
    if(email.includes(arr[1])){
        matachCount++;
    } 

    for(let i = 0 ; i < symbols.length ; i++){
        if(email.includes(symbols[i]) && matachCount >=2){
            hasSymbol = true;
        }
    }
    console.log(matachCount);
    console.log(hasSymbol);
    if(hasSymbol){
        email_input.classList.add('error');
        error_message.style.display = 'block';
    }
    if((matachCount>=2) && (!hasSymbol)){
        email_input.classList.remove('error');
        error_message.style.display = 'none';
    } else{
        email_input.classList.add('error');
        error_message.style.display = 'block';
    }
}

email_input.addEventListener('input' ,()=>{
    if(email_input.value === ""){
        email_input.classList.remove('error');
        error_message.style.display = 'none';
        
    } else {
        validateEmail(email_input.value);
    }
})

