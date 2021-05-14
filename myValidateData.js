var myValidateData = {
    collections: {
        checkClass: {
            "fieldRequired": "checkField",
            "textRequired": "checkText",
            "numberRequired": "checkNumber",
            "emailRequired": "checkEmail",
            "optionRequired": "checkOption",
            "radiobuttonRequired": "checkRadiobutton",
            "checkboxRequired": "checkCheckbox",
        },

        addErrorText: {
            e_icon: "<i style=\"margin-right: 5px;\" class=\"fa fa-exclamation-circle\"></i>",
            e_field: "This field is required",
            e_text: "Please enter the text here",
            e_number: "Please enter the number here",
            e_email: "Please enter the valid email id here",
            e_option: "Please select any one from dropdown",
            e_radio: "Please select any one radio",
            e_checkbox: "Please select any one checkbox",
            e_button: "Please click on the button",
            customError: {},
        },

        //create span element for error showing
        addErrorElement: function (tag, err, e_text) {
            if (tag.nextSibling.className == "error_value") {
                let elm = tag.nextElementSibling;
                this.err_message(tag, elm, err, e_text);
            } else {
                let spanElement = document.createElement("span");
                this.addErrorClass(spanElement, "error_value");
                spanElement = this.err_message(tag, spanElement, err, e_text);
                tag.after(spanElement);
            }
        },
        //remove span element for if error will not showing
        removeErrorElement: function (tag) {
            if (tag.nextSibling.className == "error_value") {
                let elm = tag.nextElementSibling;
                elm.remove();
            }
        },
        //add the class in tag
        addErrorClass: function (tag, cla) {
            tag.classList.add(cla);
        },
        //remove the class from tag
        removeErrorClass: function (tag, cla) {
            tag.classList.remove(cla);
        },
        //add icon & text in tag which defined in this funtion
        err_text: function (tag, errorTag, e_text) {
            if (this.addErrorText["text"] == "") {
                errorTag.innerHTML = this.addErrorText["e_icon"] + e_text;
            } else {
                errorTag.innerHTML = this.addErrorText["e_icon"] + this.addErrorText["e_" + e_text];
            }
        },
        //add icon & text value from user in tag
        err_text_val: function (tag, errorTag, e_text) {
            errorTag.innerHTML = this.addErrorText["e_icon"] + e_text;
        },
        //combine the err_text() & err_text_val()
        err_message: function (tag, errorTag, err, err_text) {
            if (err == undefined) {
                this.err_text(tag, errorTag, err_text)
                return errorTag;
            } else {
                this.err_text_val(tag, errorTag, err)
                return errorTag;
            }
        },
    },

    checkField: function (tag, err, name, val) {
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "field");
        }
    },
    checkText: function (tag, err, name, val) {
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "text");
        }
    },
    checkNumber: function (tag, err, name, val) {
        if (isNaN(val)) {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "number");
        }
    },
    checkEmail: function (tag, err, name, val) {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!val.match(mailformat)) {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "email");
        }
    },
    checkOption: function (tag, err, name, val) {
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "option");
        }
    },
    checkRadiobutton: function (formElements) {
        let clicks = [];
        for (let elms of formElements) {
            let inps = elms.getElementsByTagName("input");
            let err_message = elms.dataset.errormessage;
            const allEqual = arr => arr.every(val => val === arr[0]);
            for (key in inps) {
                if (!isNaN(key)) {
                    let bool = inps[key].checked;
                    clicks.push(bool);
                }
            }
            if (allEqual(clicks)) {
                this.collections.addErrorElement(elms, err_message, "radio");
            } else {
                this.collections.removeErrorElement(elms);
            }
            clicks.splice(0, inps.length);
        }
    },
    checkCheckbox: function (formElements) {
        let clicks = [];
        for (let elms of formElements) {
            let inps = elms.getElementsByTagName("input");
            let err_message = elms.dataset.errormessage;
            let err = elms.lastElementChild;
            const allEqual = arr => arr.every(val => val === arr[0]);
            for (key in inps) {
                if (!isNaN(key)) {
                    let bool = inps[key].checked;
                    clicks.push(bool);
                }
            }
            if (clicks.includes(false) && allEqual(clicks)) {
                this.collections.addErrorElement(elms, err_message, "checkbox");
            } else {
                this.collections.removeErrorElement(elms);
            }
            clicks.splice(0, inps.length);
        }
    },




    dataValidate: function (formElements, errors) {
        this.collections.addErrorText.customError = {
            ...this.collections.addErrorText.customError,
            ...errors
        };
        set1 = formElements.querySelectorAll('input[type="text"],textarea,select')
        for (let elm of set1) {
            let name = elm.name;
            let val = elm.value;
            let err = elm.dataset.errormessage;
            for (let cla of elm.classList) {
                let errtag = elm.nextElementSibling;
                // myValidateData[this.collections.checkClass[cla]](elm, err, name, val);
                if (this.collections.checkClass.hasOwnProperty(cla)) {
                    if (this.collections.addErrorText.customError.hasOwnProperty(name)) {
                        let err = this.collections.addErrorText.customError[name].error;
                        myValidateData[this.collections.checkClass[cla]](elm, err, name, val);
                        break;
                    } else if (this.collections.addErrorText.customError.hasOwnProperty(name) || errtag == null) {
                        myValidateData[this.collections.checkClass[cla]](elm, err, name, val);
                        break;
                    }
                } else {
                    this.collections.removeErrorElement(elm);
                    this.collections.removeErrorClass(elm, "validation_error");
                }
            }
        }
        set2 = formElements.querySelectorAll('.radiobuttonRequired')
        dradio = myValidateData[this.collections.checkClass["radiobuttonRequired"]](set2);
        set3 = formElements.querySelectorAll('.checkboxRequired')
        dcheckbox = myValidateData[this.collections.checkClass["checkboxRequired"]](set3);
    },

};