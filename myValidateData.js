var myValidateData = {
    collections: {
        checkClass: {
            "fieldRequired": "checkRequire",
            "textRequired": "checkText",
            "numberRequired": "checkNumber",
            "emailRequired": "checkEmail",
            "optionRequired": "checkOption",
            "radiobuttonRequired": "checkRadiobutton",
            "checkboxRequired": "checkCheckbox",
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
        //create span element for error showing
        addErrorElement: function (tag, err, e_text) {
            if (tag.parentNode.nextSibling.className == "error_value") {
                let elm = tag.parentNode.nextElementSibling;
                this.err_message(elm, err, e_text);
            } else {
                let spanElement = document.createElement("span");
                this.addErrorClass(spanElement, "error_value");
                spanElement = this.err_message(spanElement, err, e_text);
                // tag.parentNode.insertBefore(spanElement, tag.nextSibling); //
                tag.parentNode.after(spanElement);
            }
        },
        //remove span element for if error will not showing
        removeErrorElement: function (tag) {
            if (tag.parentNode.nextSibling.className == "error_value") {
                let elm = tag.parentNode.nextElementSibling;
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
        err_text: function (errorTag, e_text) {
            errorTag.innerHTML = this.addErrorText["e_icon"] + this.addErrorText["e_" + e_text];
        },
        //add icon & text value from user in tag
        err_text_val: function (errorTag, e_text) {
            errorTag.innerHTML = this.addErrorText["e_icon"] + e_text;
        },
        //combine the err_text() & err_text_val()
        err_message: function (errorTag, err, err_text) {
            if (err == undefined) {
                this.err_text(errorTag, err_text)
                return errorTag;
            } else {
                this.err_text_val(errorTag, err)
                return errorTag;
            }
        },
    },



    checkRequire: function (tag, err, val) {
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "field");
        } else {
            this.collections.removeErrorElement(tag);
            this.collections.removeErrorClass(tag, "validation_error");
        }
    },
    checkText: function (tag, err, val) {
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "field");
        } else {
            this.collections.removeErrorElement(tag);
            this.collections.removeErrorClass(tag, "validation_error");
        }
    },
    checkNumber: function (tag, err, val) {
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "field");
        } else if (isNaN(val)) {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "number");
        } else {
            this.collections.removeErrorElement(tag);
            this.collections.removeErrorClass(tag, "validation_error");
        }
    },
    checkEmail: function (tag, err, val) {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "field");
        } else if (!val.match(mailformat)) {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "email");
        } else {
            this.collections.removeErrorElement(tag);
            this.collections.removeErrorClass(tag, "validation_error");
        }
    },
    checkOption: function (tag, err, val) {
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "option");
        } else {
            this.collections.removeErrorElement(tag);
            this.collections.removeErrorClass(tag, "validation_error");
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
                this.collections.addErrorElement(elms, err_message, "option");
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
            const allEqual = arr => arr.every(val => val === arr[0]);
            for (key in inps) {
                if (!isNaN(key)) {

                    let bool = inps[key].checked;
                    clicks.push(bool);
                }
            }
            if (clicks.includes(false) && allEqual(clicks)) {
                this.collections.addErrorElement(elms, err_message, "option");
            } else {
                this.collections.removeErrorElement(elms);
            }
            clicks.splice(0, inps.length);
        }
    },
    getData: function (formElements) {
        var data = {};
        var d = {};
        for (let elm of formElements) {
            let name = elm.name;
            let val = elm.value;
            if (elm.type == "submit") {

            } else if (elm.type == "radio" && elm.checked == true) {
                d = {
                    [name]: val,
                };
                data = {
                    ...data,
                    ...d
                };
            } else if (elm.type == "checkbox" && elm.checked == true) {
                d = {
                    [name]: val,
                };
                data = {
                    ...data,
                    ...d
                };
            } else if (elm.type == 'text' || elm.type == 'textarea') {
                d = {
                    [name]: val,
                };
                data = {
                    ...data,
                    ...d
                };
            } else if (elm.type == 'select-one') {
                d = {
                    [name]: val,
                };
                data = {
                    ...data,
                    ...d
                };
            }
        }
        return data;
    },




    dataValidate: function (formElements) {

        for (let elm of formElements) {
            let val = elm.value;
            let err = elm.dataset.errormessage;
            for (let cla of elm.classList) {
                if (this.collections.checkClass.hasOwnProperty(cla)) {
                    myValidateData[this.collections.checkClass[cla]](elm, err, val);
                }
            }
        }
        myValidateData[this.collections.checkClass["radiobuttonRequired"]](formElements.getElementsByClassName("radiobuttonRequired"));
        myValidateData[this.collections.checkClass["checkboxRequired"]](formElements.getElementsByClassName("checkboxRequired"));
        data = this.getData(formElements);
        return data;
    },

};