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
            "notValidate": "checkNotValidate",
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


    checkNotValidate: function (tag, err, name, val) {
        let data = {};
        data = {
            [name]: val,
        };
        return data;
    },
    checkRequire: function (tag, err, name, val) {
        let data = {};
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "field");
        } else {
            this.collections.removeErrorElement(tag);
            this.collections.removeErrorClass(tag, "validation_error");
            data = {
                [name]: val,
            };
        }
        return data;
    },
    checkText: function (tag, err, name, val) {
        let data = {};
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "field");
        } else {
            this.collections.removeErrorElement(tag);
            this.collections.removeErrorClass(tag, "validation_error");
            data = {
                [name]: val,
            };
        }
        return data;
    },
    checkNumber: function (tag, err, name, val) {
        let data = {};
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "field");
        } else if (isNaN(val)) {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "number");
        } else {
            this.collections.removeErrorElement(tag);
            this.collections.removeErrorClass(tag, "validation_error");
            data = {
                [name]: val,
            };
        }
        return data;
    },
    checkEmail: function (tag, err, name, val) {
        let data = {};
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
            data = {
                [name]: val,
            };
        }
        return data;
    },
    checkOption: function (tag, err, name, val) {
        let data = {};
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorElement(tag, err, "option");
        } else {
            this.collections.removeErrorElement(tag);
            this.collections.removeErrorClass(tag, "validation_error");
            data = {
                [name]: val,
            };
        }
        return data;
    },
    checkRadiobutton: function (formElements) {
        let data = {};
        let clicks = [];
        for (let elms of formElements) {
            let inps = elms.getElementsByTagName("input");
            let err_message = elms.dataset.errormessage;
            const allEqual = arr => arr.every(val => val === arr[0]);
            let d = {};
            for (key in inps) {
                if (!isNaN(key)) {
                    let bool = inps[key].checked;
                    let name = inps[key].name;
                    clicks.push(bool);
                    if (bool == true) {
                        d = {
                            [name]: inps[key].value,
                        };
                    }
                }
            }
            if (allEqual(clicks)) {
                this.collections.addErrorElement(elms, err_message, "option");
            } else {
                this.collections.removeErrorElement(elms);
            }
            clicks.splice(0, inps.length);
            data = {
                ...data,
                ...d
            };
        }

        return data;
    },
    checkCheckbox: function (formElements) {
        let clicks = [];
        let data = {};

        for (let elms of formElements) {
            let inps = elms.getElementsByTagName("input");
            let err_message = elms.dataset.errormessage;
            const allEqual = arr => arr.every(val => val === arr[0]);
            let d = {};
            let values = [];
            for (key in inps) {
                if (!isNaN(key)) {
                    let bool = inps[key].checked;
                    let name = inps[key].name;
                    clicks.push(bool);
                    if (bool == true) {
                        values.push(inps[key].value)
                        d = {
                            [name]: values,
                        };
                    }
                }
            }
            if (clicks.includes(false) && allEqual(clicks)) {
                this.collections.addErrorElement(elms, err_message, "option");
            } else {
                this.collections.removeErrorElement(elms);
            }
            clicks.splice(0, inps.length);
            data = {
                ...data,
                ...d
            };
        }
        return data;
    },




    dataValidate: function (formElements) {
        let data = {};
        for (let elm of formElements) {
            let name = elm.name;
            let val = elm.value;
            let err = elm.dataset.errormessage;
            for (let cla of elm.classList) {
                if (this.collections.checkClass.hasOwnProperty(cla)) {
                    d = myValidateData[this.collections.checkClass[cla]](elm, err, name, val);
                }
            }
            data = {
                ...data,
                ...d
            };
        }
        dradio = myValidateData[this.collections.checkClass["radiobuttonRequired"]](formElements.getElementsByClassName("radiobuttonRequired"));
        data = {
            ...data,
            ...dradio
        };
        dcheckbox = myValidateData[this.collections.checkClass["checkboxRequired"]](formElements.getElementsByClassName("checkboxRequired"));
        data = {
            ...data,
            ...dcheckbox
        };
        return data;
    },

};