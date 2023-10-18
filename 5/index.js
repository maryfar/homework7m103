"use strict";
const form = document.getElementById('form');
const companyNameInput = document.getElementById('company');
const emailInput = document.querySelector('input[placeholder=" Your Email"]');
const postcodeInput = document.querySelector('input[placeholder="Postcode"]');
const companyNameError = document.getElementById('companyNameError');
const emailError = document.getElementById('emailError');
const postcodeError = document.getElementById('postcodeError');
const successMessage = document.getElementById('successMessage');
const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    const companyName = companyNameInput.value;
    const email = emailInput.value;
    const postcode = postcodeInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const postcodePattern = /^\d{5}(?:[-\s]\d{4})?$/;
    // Reset previous error messages
    companyNameError.innerText = '';
    emailError.innerText = '';
    postcodeError.innerText = '';
    const errors = [];
    if (companyName.trim() === '') {
        errors.push('Please enter your company name.');
    }
    if (!emailPattern.test(email)) {
        errors.push('Please enter a valid email address.');
    }
    if (!postcodePattern.test(postcode)) {
        errors.push('Please enter a valid postcode.');
    }
    if (errors.length > 0) {
        // Display all error messages
        errors.forEach((error) => {
            const errorElement = document.createElement('span');
            errorElement.textContent = error;
            errorElement.classList.add('error');
            if (error.includes('company name')) {
                companyNameError.innerHTML = '';
                companyNameError.appendChild(errorElement);
            }
            else if (error.includes('email address')) {
                emailError.innerHTML = '';
                emailError.appendChild(errorElement);
            }
            else if (error.includes('postcode')) {
                postcodeError.innerHTML = '';
                postcodeError.appendChild(errorElement);
            }
        });
    }
    else {
        //  displaying a success message:
        // successMessage.innerText = 'Form submitted successfully!';
    }
});
