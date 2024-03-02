# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](challenge_2_desktop_design.png)
![](challenge_2_mobile_design.png)
![](challenge_2_error_state_d.png)
![](success_message_desktop.png)
![](succsess_message_mobile.png)




### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Flexbox
- Javascript


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
@media (max-width:376px) {
    .content-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        flex-direction: column-reverse;
        gap: 10px;
        height: 100%;
        border-radius: 0;
        padding: 0;
    }
}
```
```js
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
```


### Useful resources

- [W3 Schools](https://www.w3schools.com/css/css3_flexbox.asp) - This helped me for reviewing CSS flexbox concepts. I really liked this pattern and will use it going forward.
