Form Input data validation library with form

########add class in input tag as follows#############


if input/textarea is require feild then add "fieldRequired" as className in that input.

if input is number feild then add "numberRequired" as className in that input.

if input is email feild then add "emailRequired" as className in that input.

if input is select feild with options as a dropdown then add "optionRequired" as className in that select tag.

if input is radio buttons feild then add "radiobuttonRequired" as className in that parentNode of all input[type="radio"].
Use "checkRadiobuttonField" function for the div section of radio buttons.

if input is checkbox buttons feild then add "checkboxRequired" as className in that parentNode of all input[type="checkbox"].
Use "checkCheckboxField" function for the div section of checkbox buttons.


Style them as per your need by selecting that element by its parent as I do in this files