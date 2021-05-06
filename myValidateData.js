let error_icon = "<i style=\"margin-right: 5px;\" class=\"fa fa-exclamation-circle\"></i>"
let e1 = "Please enter the value here";
let e2 = "Please enter the number here";
let e3 = "Please enter the valid email id here";

var myValidateData = {

    checkClass: {
        "fieldRequired": "checkRequireField",
        "numberRequired": "checkNumberField",
        "emailRequired": "checkEmailField"
    },
    checkRequireField: function (inputTag, inputClass, inputValue) {
        if (inputValue == "") {
            inputTag.classList.add("validation_error");
            inputTag.nextElementSibling.innerHTML = error_icon + e1;
        } else {
            inputTag.nextElementSibling.innerHTML = "";
        }
    },
    checkNumberField: function (inputTag, inputClass, inputValue) {
        if (inputValue == "") {
            inputTag.classList.add("validation_error");
            inputTag.nextElementSibling.innerHTML = error_icon + e1;
        } else if (isNaN(inputValue)) {
            inputTag.classList.add("validation_error");
            inputTag.nextElementSibling.innerHTML = error_icon + e2;
        } else {
            inputTag.nextElementSibling.innerHTML = "";
        }
    },
    checkEmailField: function (inputTag, inputClass, inputValue) {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (inputValue == "") {
            inputTag.classList.add("validation_error");
            inputTag.nextElementSibling.innerHTML = error_icon + e1;
        } else if (!inputValue.match(mailformat)) {
            inputTag.classList.add("validation_error");
            inputTag.nextElementSibling.innerHTML = error_icon + e3;
        } else {
            inputTag.nextElementSibling.innerHTML = "";
        }
    },
    dataValidate: function (inpArray) {
        for (let inp of inpArray) {
            var inpVal = inp.value;
            for (let inpCla of inp.classList) {
                if (this.checkClass.hasOwnProperty(inpCla)) {
                    myValidateData[this.checkClass[inpCla]](inp, inpCla, inpVal);

                }
            }
        }
    },

};