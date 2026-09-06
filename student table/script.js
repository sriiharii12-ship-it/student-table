// Heading
let heading = document.createElement("h1");
heading.innerText = "STUDENT FORM";
document.body.appendChild(heading);


// Form
let form = document.createElement("form");


// Name
let nameLabel = document.createElement("label");
nameLabel.innerText = "Name";

let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Enter name";


// Age
let ageLabel = document.createElement("label");
ageLabel.innerText = "Age";

let ageInput = document.createElement("input");
ageInput.type = "number";
ageInput.placeholder = "Enter age";


// Gender
let genderLabel = document.createElement("label");
genderLabel.innerText = "Gender";

let male = document.createElement("input");
male.type = "radio";
male.name = "gender";
male.value = "Male";

let maleText = document.createTextNode(" Male ");

let female = document.createElement("input");
female.type = "radio";
female.name = "gender";
female.value = "Female";

let femaleText = document.createTextNode(" Female ");


// Course
let courseLabel = document.createElement("label");
courseLabel.innerText = "Course";

let course = document.createElement("select");

let courses = ["JavaScript", "HTML", "CSS", "Python", "Java"];

courses.forEach(function(item) {
    let option = document.createElement("option");
    option.innerText = item;
    option.value = item;
    course.appendChild(option);
});


// Email
let emailLabel = document.createElement("label");
emailLabel.innerText = "E-mail";

let emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Enter email";


// Save Button
let saveButton = document.createElement("button");
saveButton.innerText = "Save";
saveButton.type = "submit";


// Add elements to form
function addField(label, control) {
    let field = document.createElement("div");
    field.className = "form-field";
    field.appendChild(label);
    field.appendChild(control);
    form.appendChild(field);
}

let genderGroup = document.createElement("div");
genderGroup.className = "gender-options";
genderGroup.appendChild(male);
genderGroup.appendChild(maleText);
genderGroup.appendChild(female);
genderGroup.appendChild(femaleText);

addField(nameLabel, nameInput);
addField(ageLabel, ageInput);
addField(genderLabel, genderGroup);
addField(courseLabel, course);
addField(emailLabel, emailInput);

form.appendChild(saveButton);

document.body.appendChild(form);


// Table
let table = document.createElement("table");

table.innerHTML = `
    <thead>
        <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>COURSE</th>
            <th>GENDER</th>
            <th>EMAIL</th>
            <th>ACTION</th>
        </tr>
    </thead>
`;

let tbody = document.createElement("tbody");
table.appendChild(tbody);

document.body.appendChild(table);


// Save student
form.addEventListener("submit", function(event) {

    event.preventDefault();

    let gender;

    if (male.checked) {
        gender = "Male";
    }
    else if (female.checked) {
        gender = "Female";
    }
    else {
        alert("Please select gender");
        return;
    }

    if (
        nameInput.value === "" ||
        ageInput.value === "" ||
        emailInput.value === ""
    ) {
        alert("Please fill all fields");
        return;
    }


    // Create row
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${nameInput.value}</td>
        <td>${ageInput.value}</td>
        <td>${course.value}</td>
        <td>${gender}</td>
        <td>${emailInput.value}</td>
        <td>
            <button class="delete">Delete</button>
        </td>
    `;

    tbody.appendChild(row);


    // Delete
    row.querySelector(".delete").addEventListener("click", function() {
        row.remove();
    });


    // Clear form
    form.reset();
});


// CSS using JavaScript
document.body.style.fontFamily = "'Trebuchet MS', sans-serif";
document.body.style.backgroundColor = "#eef4f6";
document.body.style.padding = "32px 20px";

let style = document.createElement("style");
style.innerText = `
    * { box-sizing: border-box; }
    h1 { color: #183b4a; font-size: 2rem; letter-spacing: 1px; margin: 0 0 24px; text-align: center; }
    form { border: 1px solid #d5e2e7; box-shadow: 0 12px 28px rgba(24, 59, 74, .12); }
    .form-field { align-items: center; display: grid; gap: 16px; grid-template-columns: 90px minmax(0, 1fr); margin-bottom: 14px; width: 100%; }
    .form-field label { color: #355664; font-size: .85rem; font-weight: bold; letter-spacing: .4px; margin: 0; }
    .form-field input[type="text"], .form-field input[type="number"], .form-field input[type="email"], .form-field select { background: #fff; border: 1px solid #c7d6dc; border-radius: 7px; font: inherit; height: 42px; min-width: 0; padding: 0 12px; width: 100%; }
    .form-field > label + input, .form-field > label + select { grid-column: 2; }
    .form-field input:focus, .form-field select:focus { border-color: #2b9a8f; box-shadow: 0 0 0 3px rgba(43, 154, 143, .15); outline: none; }
    .gender-options { align-items: center; display: flex; flex-wrap: wrap; gap: 7px; min-height: 42px; }
    .gender-options input { accent-color: #2b9a8f; margin: 0 1px 0 0; }
    .gender-options input:nth-of-type(2) { margin-left: 12px; }
    button { cursor: pointer; font: inherit; font-weight: bold; }
    .delete { background: #d85c5c; border: 0; border-radius: 5px; color: white; padding: 7px 12px; }
    th { background: #183b4a; color: white; }
    tbody tr:nth-child(even) { background: #f6fafb; }
    @media (max-width: 560px) { body { padding: 24px 12px; } form { width: 100% !important; } .form-field { grid-template-columns: 78px minmax(0, 1fr); gap: 10px; } }
`;
document.head.appendChild(style);

heading.style.textAlign = "center";

form.style.width = "450px";
form.style.margin = "auto";
form.style.padding = "30px";
form.style.backgroundColor = "#ffffff";
form.style.borderRadius = "14px";

let labels = form.querySelectorAll("label");

labels.forEach(function(label) {
    label.style.display = "block";
    label.style.fontWeight = "bold";
});

let inputs = form.querySelectorAll("input[type='text'], input[type='number'], input[type='email'], select");

inputs.forEach(function(input) {
    input.style.padding = "12px";
    input.style.borderRadius = "8px";
    input.style.border = "1px solid #ccc";
});

saveButton.style.display = "block";
saveButton.style.width = "100%";
saveButton.style.padding = "12px";
saveButton.style.marginTop = "20px";
saveButton.style.backgroundColor = "#8174ff";
saveButton.style.color = "white";
saveButton.style.border = "none";
saveButton.style.borderRadius = "8px";

table.style.width = "95%";
table.style.margin = "40px auto";
table.style.backgroundColor = "white";

let cells = table.querySelectorAll("th, td");

cells.forEach(function(cell) {
    cell.style.padding = "12px";
    cell.style.textAlign = "center";
});