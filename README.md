> Form Input data validation library with form

# add class in input tag as follows

## for all inputs except radio buttons and checkboxs
- if input/textarea is require feild then add **fieldRequired** as className in that input.

- if input is number feild then add **numberRequired** as className in that input.

- if input is email feild then add **emailRequired** as className in that input.

- if input is select feild with options as a dropdown then add **optionRequired** as className in that select tag.

## for radio buttons & checkboxs
- put all the radio buttons inside a div element & give class of **radiobuttonRequired** and put input[type="radio"] inside it.

- put all the radio buttons inside a div element & give class of **checkboxRequired** and put input[type="checkbox"] inside it.



Style them as per your need by selecting that element by its parent as I do in this files