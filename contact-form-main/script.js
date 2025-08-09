document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const firstName = document.getElementById("firstName");
  const firstNameError = document.getElementById("firstNameError");

  const lastName = document.getElementById("lastName");
  const lastNameError = document.getElementById("lastNameError");

  const Email = document.getElementById("Email");
  const EmailError = document.getElementById("EmailError");

  const message = document.getElementById("message");
  const messageError = document.getElementById("messageError");

  const checkBox = document.getElementById("checkBox");
  const checkBoxError = document.getElementById("checkBoxError");

  const Query1 = document.getElementById("Query1");
  const Query2 = document.getElementById("Query2");
  const QueryError = document.getElementById("QueryError");

  let result = false;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);

    if (firstName.value.trim() === "")
      firstNameError.textContent = "First name field is required";
    else if (firstName.value.length < 3)
      firstNameError.textContent = "Name at least 3 character";
    else {
      firstNameError.textContent = " ";
    }

    if (lastName.value.trim() === "")
      lastNameError.textContent = "lastName field is required";
    else {
      lastNameError.textContent = " ";
    }
    if (Email.value.trim() === "")
      EmailError.textContent = "Email field is required";
    else if (Email.value.length < 10) EmailError.textContent = "invalid email";
    else {
      EmailError.textContent = " ";
    }
    if (message.value.trim() === "")
      messageError.textContent = "this field is required";

    if (message.value.trim().length < 3)
      messageError.textContent = "Message at least 3 character";
    else {
      messageError.textContent = " ";
    }
    if (!checkBox.checked) {
      checkBoxError.textContent = " Accept terms & condotions";
    } else {
      checkBoxError.textContent = " ";
    }

    if (!Query1.checked && !Query2.checked) {
      QueryError.textContent = "Please select Query Type";
    } else {
      QueryError.textContent = " ";
    }
    result = true;

    if (result == true) {
      console.log("form submitted successfully");
    } else {
      console.log("Invalid inputs");
    }
  });
});



