var myValidateData = {

    checkClass: {
        "required": "requireFeild",
        "number": "checkNumber",
        "email": "checkEmail"
    },
    requireFeild: function (string) {
        if (string == "") {
            document.getElementById("required").insertAdjacentHTML("afterend", "<br>This field is required<br>");
        }
    },
    checkNumber: function (number) {
        if (isNaN(number) || number == "") {
            document.getElementById("number").insertAdjacentHTML("afterend", "<br>This field need a number<br>");
        }
    },
    checkEmail: function (email) {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email == "") {
            document.getElementById("email").insertAdjacentHTML("afterend", "<br>This field need a valid email id<br>");
        } else if (email.match(mailformat)) {

        } else {
            document.getElementById("email").insertAdjacentHTML("afterend", "<br>This is not a valid email id<br>");
        }
    },
    dataValidate: function (strings) {
        // console.log(strings);
        for (let string of strings) {
            // console.log(string.classList);
            for (let cls of string.classList) {
                // console.log(cls);
                var elementSelect = document.getElementById(cls);
                var inputValue = elementSelect.value;
                //console.log(inputValue + ' & ' + myValidateData.checkClass[cls]);
                myValidateData[this.checkClass[cls]](inputValue);
            }
        }
    },

};