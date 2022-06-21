/*function validateForm() {
    var nameVal = document.forms["reservationForm"]["name"].value;
    var emailVal = document.forms["reservationForm"]["email"].value;

    if (nameVal == null || nameVal == "") {
        //document.getElementsByClassName("errorMessage")[0].style.visibility = "visible";
        document.getElementsByClassName("errorMessage")[0].innerHTML = "This field is required";
        return false;
    } else if (emailVal == null || emailVal == "") {
        document.getElementsByClassName("errorMessage")[1].innerHTML = "This field is required";
        return false;
    } else {
        return true;
    }
}
*/
//Change meridian time AM or PM
function meridianSelector() {
    const meridianSelector = document.querySelector(".meridian-wrapper");
    const meridianDropdown = document.querySelector(".meridian-dropdown");
    const meridianAm = document.querySelector(".meridian-dropdown .am");
    const meridianAmCheck = document.querySelector(".meridian-dropdown .am .meridian-icon");
    const meridianPm = document.querySelector(".meridian-dropdown .pm");
    const meridianPmCheck = document.querySelector(".meridian-dropdown .pm .meridian-icon");
    const meridianValue = document.querySelector(".meridian-value");
    const chevron = document.querySelector(".chevron");

    meridianSelector.addEventListener("click", () => {
        meridianDropdown.classList.toggle("active");
        chevron.classList.toggle("active");
    });
    meridianAm.addEventListener("click", () => {
        meridianAmCheck.classList.add("active");
        meridianPmCheck.classList.remove("active");
        meridianValue.textContent = "AM";
    });
    meridianPm.addEventListener("click", () => {
        meridianPmCheck.classList.add("active");
        meridianAmCheck.classList.remove("active");
        meridianValue.textContent = "PM";
    });
}
meridianSelector();

//Increase or decrease the number of persons

function numberOfPersons() {
    const minus = document.querySelector(".guest-input.minus");
    const plus = document.querySelector(".guest-input.plus");
    var numberOfPersons = document.querySelector("span.guest-input-number");
    currentNumberOfPersons = Number(numberOfPersons.textContent);

    minus.addEventListener("click", () => {
        currentNumberOfPersons--;
        numberOfPersons.textContent = currentNumberOfPersons;
    });
    plus.addEventListener("click", () => {
        currentNumberOfPersons++;
        numberOfPersons.textContent = currentNumberOfPersons;
    });
}
numberOfPersons();

//Form validator
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let name = id("name"),
    email = id("email"),
    month = id("month"),
    day = id("day"),
    year = id("year"),
    hour = id("hour"),
    minute = id("minute"),
    form = id("form"),
    errorMsg = classes("errorMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        //add error class to input id
        id.classList.add("error");
        id.classList.remove("success");
    } else {
        errorMsg[serial].innerHTML = "";
        //remove error class to input id
        id.classList.remove("error");
        id.classList.add("success");
        succesFunc();
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(name, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(month, 2, "This field is incomplete");
    engine(day, 2, "This field is incomplete");
    engine(year, 2, "This field is incomplete");
    engine(hour, 3, "This field is incomplete");
    engine(minute, 3, "This field is incomplete");
});

function emailValidator() {
    email = document.getElementById("email");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
        email.classList.add("success");
        email.classList.remove("error");
        document.getElementById("emailMsg").textContent = "";
        return true;
    } else {
        email.classList.add("error");
        email.classList.remove("success");
        document.getElementById("emailMsg").textContent =
            "You have entered an invalid email address!";

        return false;
    }
}
function succesFunc() {
    const submitSucces = document.querySelector(".submit-success");
    submitSucces.classList.add("success-active");
    submitSucces.style.opacity = "1";
    form.classList.add("form-inactive");
    form.style.opacity = "0";
    form.style.visibility = "hidden";
}
