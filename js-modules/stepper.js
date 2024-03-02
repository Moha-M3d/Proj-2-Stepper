export function handleStepper(stepper, sections, prevBtn,  nextBtn) {
    let steps = stepper.querySelectorAll("[data-step]");
    let currentStep = 1;
    /* Disable the button in these conditions */
    function handleBtnState() {
        prevBtn.ariaDisabled = (currentStep === 1)? "true": "false";
        nextBtn.ariaDisabled = (currentStep === steps.length)? "true": "false";
    }

    /* Activate a given step */
    function activateStep(stepOrder) {
        steps[stepOrder - 1].classList.add("active");
        if(stepOrder > 1) {
            steps[stepOrder - 2].classList.remove("active");
            steps[stepOrder - 2].classList.add("completed");
        }
    }  

    /* Disactivate a given step */
    function disActivateStep(stepOrder) {
        steps[stepOrder - 1].classList.remove("active");
        if(stepOrder > 1) {
            steps[stepOrder - 2].classList.add("active");
            steps[stepOrder - 2].classList.remove("completed");
        }
    }  

    /* Go to next Step */
    function next() {
        if(currentStep < steps.length) {
            currentStep++;
            activateStep(currentStep); // activates the next step
            activateSection(currentStep);
        }
    }

    /* Go to previous Step */
    function prev() {
        if(currentStep > 1) {
            disActivateStep(currentStep); // disactivate the current step
            currentStep--; 
            activateSection(currentStep);
        }
    }

    /* handle Sections switching */
    function activateSection (sectionOrder) {
        sections.forEach((section) => {
            section.style.transform = "translateX("+ -100 * (sectionOrder - 1) + "%";
        });
    }

    /* Attach click Event listeners to the prev and next buttons */
    function attachClickEvent() {
        prevBtn.addEventListener('click', function(e){
            e.preventDefault(); // Don't submit the form
            prev(); // go the previous step
            handleBtnState(); 
        });

        nextBtn.addEventListener('click', function(e){
            e.preventDefault(); // Don't submit the form
            next(); // go to next step
            handleBtnState();
        });
    }

    /* make everything work */
    activateStep(currentStep); // activate the current step
    activateSection(currentStep); // activate the current section
    handleBtnState(); // handle the buttons state
    attachClickEvent(); // handle the buttons click event
}