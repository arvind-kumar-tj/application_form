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
        //add the class in tag
        addErrorClass: function (tag, cla) {
            tag.classList.add(cla);
        },
        //remove the class from tag
        removeErrorClass: function (tag, cla) {
            tag.classList.remove(cla);
        },
        //add icon & text in tag which defined in this funtion
        err_text: function (tag, e_text) {
            tag.nextElementSibling.innerHTML = this.addErrorText["e_icon"] + this.addErrorText["e_" + e_text];
        },
        //add icon & text value from user in tag
        err_text_val: function (tag, e_text) {
            tag.nextElementSibling.innerHTML = this.addErrorText["e_icon"] + e_text;
        },
        //combine the err_text() & err_text_val()
        err_message: function (tag, err, err_text) {
            if (err == undefined) {
                this.err_text(tag, err_text)
            } else {
                this.err_text_val(tag, err)
            }
        },
        //check all values in arr are equal or not but not work when it being call
        allEqual: function (arr) {
            arr.every(val => val === arr[0]);
        },
        //call at the end of iteration of a group of radio & checkbox buttons and remove the all elements after error message will shown
        emptyArr: function (arr, type) {
            let clicks = [];
            let p = arr[0].parentNode.parentNode;
            let err = p.dataset.errormessage;
            for (click of arr) {
                bool = click.checked;
                clicks.push(bool);
            }
            const allEqual = arr => arr.every(val => val === arr[0]);
            if (allEqual(clicks)) {
                this.addErrorClass(p.nextElementSibling, "error_value");
                this.err_message(p, err, type);
            } else {
                p.nextElementSibling.innerHTML = "";
            }
        }
    },



    checkRequire: function (tag, cla, err, val) {
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorClass(tag.nextElementSibling, "error_value");
            this.collections.err_message(tag, err, "field");
        } else {
            tag.nextElementSibling.innerHTML = "";
            this.collections.removeErrorClass(tag, "validation_error");
        }
    },
    checkText: function (tag, cla, err, val) {
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorClass(tag.nextElementSibling, "error_value");
            this.collections.err_message(tag, err, "field");
        } else {
            tag.nextElementSibling.innerHTML = "";
            this.collections.removeErrorClass(tag, "validation_error");
        }
    },
    checkNumber: function (tag, cla, err, val) {
        if (val == "") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorClass(tag.nextElementSibling, "error_value");
            this.collections.err_message(tag, err, "field");
        } else if (isNaN(val)) {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorClass(tag.nextElementSibling, "error_value");
            this.collections.err_message(tag, err, "number");
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
            this.collections.err_message(tag, err, "field");
        } else if (!val.match(mailformat)) {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorClass(tag.nextElementSibling, "error_value");
            this.collections.err_message(tag, err, "email");
        } else {
            tag.nextElementSibling.innerHTML = "";
            this.collections.removeErrorClass(tag, "validation_error");
        }
    },
    checkOption: function (tag, cla, err, val) {
        if (val == "none") {
            this.collections.addErrorClass(tag, "validation_error");
            this.collections.addErrorClass(tag.nextElementSibling, "error_value");
            this.collections.err_message(tag, err, "option");
        } else {
            tag.nextElementSibling.innerHTML = "";
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
                this.collections.addErrorClass(elms.nextElementSibling, "error_value");
                this.collections.err_message(elms, err_message, "radio");
            } else {
                elms.nextElementSibling.innerHTML = "";
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
            if (allEqual(clicks)) {
                this.collections.addErrorClass(elms.nextElementSibling, "error_value");
                this.collections.err_message(elms, err_message, "checkbox");
            } else {
                elms.nextElementSibling.innerHTML = "";
            }
            clicks.splice(0, inps.length);
        }
    },




    dataValidate: function (formElements) {
        for (let elm of formElements) {
            let val = elm.value;
            let err = elm.dataset.errormessage;
            for (let cla of elm.classList) {
                if (this.collections.checkClass.hasOwnProperty(cla)) {
                    myValidateData[this.collections.checkClass[cla]](elm, cla, err, val);
                }
            }
        }

        var radiobtns = document.getElementsByClassName("radiobuttonRequired");
        myValidateData[this.collections.checkClass["radiobuttonRequired"]](radiobtns);
        var checkbox = document.getElementsByClassName("checkboxRequired");
        myValidateData[this.collections.checkClass["checkboxRequired"]](checkbox);
    },

};