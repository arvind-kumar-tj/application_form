var myValidateData = {

    checkClass: {
        "fieldRequired": "checkRequireField",
        "numberRequired": "checkNumberField",
        "emailRequired": "checkEmailField",
        "optionRequired": "checkOptionField",
        "radiobuttonRequired": "checkRadiobuttonField",
        "checkboxRequired": "checkCheckboxField"
    },
    addErrorText: {
        "error_icon": "<i style=\"margin-right: 5px;\" class=\"fa fa-exclamation-circle\"></i>",
        "textError": "Please enter the text here",
        "numberError": "Please enter the number here",
        "emailError": "Please enter the valid email id here",
        "optionError": "Please select any one from dropdown",
        "radiobtnError": "Please select any one"
    },
    addErrorClass: function (inputTag, classText) {
        inputTag.classList.add(classText);
    },
    removeErrorClass: function (inputTag, classText) {
        inputTag.classList.remove(classText);
    },
    addErrorElement: function (inputTag, errorText) {
        let spanElement = document.createElement("span");
        spanElement.innerHTML = this.addErrorText[errorText];
        inputTag.insertBefore(spanElement, inputTag);
    },



    checkRequireField: function (inputTag, inputClass, inputValue) {
        if (inputValue == "") {
            this.addErrorClass(inputTag, "validation_error");
            this.addErrorClass(inputTag.nextElementSibling, "error_value");
            inputTag.nextElementSibling.innerHTML = this.addErrorText["error_icon"] + this.addErrorText["textError"];
        } else {
            inputTag.nextElementSibling.innerHTML = "";
            this.removeErrorClass(inputTag, "validation_error");
        }
    },
    checkNumberField: function (inputTag, inputClass, inputValue) {
        if (inputValue == "") {
            this.addErrorClass(inputTag, "validation_error");
            this.addErrorClass(inputTag.nextElementSibling, "error_value");
            inputTag.nextElementSibling.innerHTML = this.addErrorText["error_icon"] + this.addErrorText["textError"];
        } else if (isNaN(inputValue)) {
            this.addErrorClass(inputTag, "validation_error");
            this.addErrorClass(inputTag.nextElementSibling, "error_value");
            inputTag.nextElementSibling.innerHTML = this.addErrorText["error_icon"] + this.addErrorText["numberError"];
        } else {
            inputTag.nextElementSibling.innerHTML = "";
            this.removeErrorClass(inputTag, "validation_error");
        }
    },
    checkEmailField: function (inputTag, inputClass, inputValue) {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (inputValue == "") {
            this.addErrorClass(inputTag, "validation_error");
            this.addErrorClass(inputTag.nextElementSibling, "error_value");
            inputTag.nextElementSibling.innerHTML = this.addErrorText["error_icon"] + this.addErrorText["textError"];
        } else if (!inputValue.match(mailformat)) {
            this.addErrorClass(inputTag, "validation_error");
            this.addErrorClass(inputTag.nextElementSibling, "error_value");
            inputTag.nextElementSibling.innerHTML = this.addErrorText["error_icon"] + this.addErrorText["emailError"];
        } else {
            inputTag.nextElementSibling.innerHTML = "";
            this.removeErrorClass(inputTag, "validation_error");
        }
    },
    checkOptionField: function (inputTag, inputClass, inputValue) {
        if (inputValue == "none") {
            this.addErrorClass(inputTag, "validation_error");
            this.addErrorClass(inputTag.nextElementSibling, "error_value");
            inputTag.nextElementSibling.innerHTML = this.addErrorText["error_icon"] + this.addErrorText["optionError"];
        } else {
            inputTag.nextElementSibling.innerHTML = "";
            this.removeErrorClass(inputTag, "validation_error");
        }
    },
    // checkRadiobuttonField: function (radiobuttons) {
    //     let values = [];
    //     for (let radiobutton of radiobuttons) {
    //         if (radiobutton.checked == true) {
    //             values.push('true');
    //         } else {
    //             values.push('false');
    //         }
    //     }
    //     const allEqual = arr => arr.every(val => val === arr[0]);
    //     if (allEqual(values)) {
    //         radiobuttons.innerHTML = this.addErrorText["error_icon"] + this.addErrorText["radiobtnError"];
    //     }
    // },
    // checkCheckboxField: function (inputTag, inputClass, inputValue) {
    //     if (inputValue == "none") {
    //         this.addErrorClass(inputTag, "validation_error");
    //         this.addErrorClass(inputTag.nextElementSibling, "error_value");
    //         inputTag.nextElementSibling.innerHTML = this.addErrorText["error_icon"] + this.addErrorText["optionError"];
    //     } else {
    //         inputTag.nextElementSibling.innerHTML = "";
    //         this.removeErrorClass(inputTag, "validation_error");
    //     }
    // },




    dataValidate: function (formElements) {
        for (let formElement of formElements) {
            var formTagVal = formElement.value;
            // console.log(formTagVal);
            for (let formTagClass of formElement.classList) {
                // console.log(formTagClass);
                if (this.checkClass.hasOwnProperty(formTagClass)) {
                    myValidateData[this.checkClass[formTagClass]](formElement, formTagClass, formTagVal);
                }
            }

            var radiobtnvalue = [];

        }
    },

};