import {handleStepper} from './js-modules/stepper.js';


document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded");
    let stepper = document.querySelector("[data-stepper]");
    let sections = Array.from(document.querySelectorAll("[data-form-sections] > [data-form-section]"));
    let prevBtn = document.querySelector("[data-prev-step]");
    let nextBtn = document.querySelector("[data-next-step]");

    try {
        handleStepper(stepper, sections, prevBtn, nextBtn);
    } catch(error) {
        console.log("It seems like there is an error!\nHere is the error : ", error);
    }
});