var myValidateData = {
    collections: {
        checkClass: {
            "fieldRequired": "checkRequire",
            "textRequired": "checkText",
            "numberRequired": "checkNumber",
            "emailRequired": "checkEmail",
            "optionRequired": "checkOption",
            "radiobuttonRequired": "checkRadio",
            "checkboxRequired": "checkCheckbox",
            "buttonRequired": "checkButton"
        },
        addErrorText: {
            "e_icon": "<i style=\"margin-right: 5px;\" class=\"fa fa-exclamation-circle\"></i>",
            "e_field": "This field is required",
            "e_text": "Please enter the text here",
            "e_number": "Please enter the number here",
            "e_email": "Please enter the valid email id here",
            "e_option": "Please select any one from dropdown",
            "e_radio": "Please select any one",
            "e_checkbox": "Please select any one",
            "e_button": "Please click on the button"
        },
        addErrorClass: function (tag, cla) {
            tag.classList.add(cla);
        },
        removeErrorClass: function (tag, cla) {
            tag.classList.remove(cla);
        },
        addErrorElement: function (tag, e) {
            let spElm = document.createElement("span");
            spElm.innerHTML = this.addErrorText[e];
            tag.insertBefore(spElm, tag);
        },
        err_text: function (tag, e_text) {
            tag.nextElementSibling.innerHTML = this.addErrorText["e_icon"] + this.addErrorText["e_" + e_text];
        },
        err_text_val: function (tag, e_text) {
            tag.nextElementSibling.innerHTML = this.addErrorText["e_icon"] + e_text;
        },
        allEqual: function (arr) {
            arr.every(val =>
                val === arr[0]
            );
        }
    },



    checkRequire: function (tag, cla, err, val) {
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorClass(tag.nextElementSibling, "error_value");
            this.collections.err_text(tag, "field");
        } else {
            tag.nextElementSibling.innerHTML = "";
            this.collections.removeErrorClass(tag, "validation_error");
        }
    },
    checkText: function (tag, cla, err, val) {
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorClass(tag.nextElementSibling, "error_value");
            this.collections.err_text(tag, "field");
        } else {
            tag.nextElementSibling.innerHTML = "";
            this.collections.removeErrorClass(tag, "validation_error");
        }
    },
    checkNumber: function (tag, cla, err, val) {
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorClass(tag.nextElementSibling, "error_value");
            this.collections.err_text(tag, "field");
        } else if (isNaN(val)) {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorClass(tag.nextElementSibling, "error_value");
            this.collections.err_text(tag, "number");
        } else {
            tag.nextElementSibling.innerHTML = "";
            this.collections.removeErrorClass(tag, "validation_error");
        }
    },
    checkEmail: function (tag, cla, err, val) {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorClass(tag.nextElementSibling, "error_value");
            this.collections.err_text(tag, "field");
        } else if (!val.match(mailformat)) {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorClass(tag.nextElementSibling, "error_value");
            this.collections.err_text(tag, "email");
        } else {
            tag.nextElementSibling.innerHTML = "";
            this.collections.removeErrorClass(tag, "validation_error");
        }
    },
    checkOption: function (tag, cla, err, val) {
        if (val == "none") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorClass(tag.nextElementSibling, "error_value");
            this.collections.err_text(tag, "option");
        } else {
            tag.nextElementSibling.innerHTML = "";
            this.collections.removeErrorClass(tag, "validation_error");
        }
    },
    checkRadio: function (tag, cla, err, val) {
        let tags = [];


    },
    checkCheckbox: function (radiobuttons) {
        let values = [];
        for (let radiobutton of radiobuttons.children) {
            if (radiobutton.children[0].checked == true) {
                values.push('true');
            } else {
                values.push('false');
            }
        }
        const allEqual = arr => arr.every(val => val === arr[0]);
        if (allEqual(values)) {
            this.addErrorClass(radiobuttons.nextElementSibling, "error_value");
            radiobuttons.nextElementSibling.innerHTML = this.addErrorText["e_icon"] + this.addErrorText["e_radio"];
        } else {
            radiobuttons.nextElementSibling.innerHTML = "";
        }
    },




    dataValidate: function (formElements) {
        for (let elm of formElements) {
            var val = elm.value;
            var err = elm.dataset.error;
            for (let cla of elm.classList) {
                if (this.collections.checkClass.hasOwnProperty(cla)) {
                    myValidateData[this.collections.checkClass[cla]](elm, cla, err, val);
                }
            }


        }
    },

};