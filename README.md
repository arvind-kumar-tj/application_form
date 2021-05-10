> Form Input data validation library with form

# add class in input tag as follows

## for all inputs except radio buttons and checkboxs
- if input/textarea is require feild then add **fieldRequired** as className in that input.
```html
    <label>Username</label>
    <input type="text" name="name" class="fieldRequired" data-errormessage="Please enter your username" />
    <span></span>
```

- if input is number feild then add **numberRequired** as className in that input.
```html
    <label>Mobile No</label>
    <input type="text" name="name" class="numberRequired" data-errormessage="Please enter your mobile no" />
    <span></span>
```

- if input is email feild then add **emailRequired** as className in that input.
```html
    <label>Email Id</label>
    <input type="text" name="email" class="emailRequired" /><span></span>
```

- if input is select feild with options as a dropdown then add **optionRequired** as className in that select tag.
```html
    <label>Select 1 Car</label>
    <select name="cars" class="optionRequired" data-errormessage="Please select">
        <option value="none">--select--</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </select><span></span>
```

## for radio buttons & checkboxs
- put all the radio buttons inside a div element & give class of **radiobuttonRequired** and put input[type="radio"] inside it.
```html
    <label>Select Gender</label>
    <div class="radiobuttonRequired" data-errormessage="Please click one">
        <label><input type="radio" name="gender" value="male">
            Male</label>
        <label><input type="radio" name="gender" value="female">
            Female</label>
        <label><input type="radio" name="gender" value="other">
            Other</label>
    </div><span></span>
```

- put all the radio buttons inside a div element & give class of **checkboxRequired** and put input[type="checkbox"] inside it.
```html
    <label>Select Profession</label>
    <div class="checkboxRequired">
        <label><input type="checkbox" name="profession" value="Student">
            Student</label>
        <label><input type="checkbox" name="profession" value="Teacher">
            Teacher</label>
        <label><input type="checkbox" name="profession" value="Administrator">
            Administrator</label>
        <label><input type="checkbox" name="profession" value="Others">
            Others</label>
    </div><span></span>
```

Style them as per your need by selecting that element by its parent as I do in this files