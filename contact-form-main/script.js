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

  const thankYou = document.getElementById("thankyou");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    if (firstName.value.trim() === "") {
      firstNameError.textContent = "First name field is required";
      isValid = false;
    } else if (firstName.value.length < 3) {
      firstNameError.textContent = "Name at least 3 character";
    } else {
      firstNameError.textContent = " ";
    }

    if (lastName.value.trim() === "") {
      lastNameError.textContent = "lastName field is required";
      isValid = false;
    } else {
      lastNameError.textContent = " ";
    }
    if (Email.value.trim() === "") {
      EmailError.textContent = "Email field is required";
      isValid = false;
    } else if (Email.value.length < 10)
      EmailError.textContent = "invalid email";
    else {
      EmailError.textContent = " ";
    }
    if (message.value.trim() === "") {
      messageError.textContent = "this field is required";
      isValid = false;
    }

    if (message.value.trim().length < 3) {
      messageError.textContent = "Message at least 3 character";
      isValid = false;
    } else {
      messageError.textContent = " ";
    }
    if (!checkBox.checked) {
      checkBoxError.textContent = " Accept terms & condotions";
      isValid = false;
    } else {
      checkBoxError.textContent = " ";
    }

    if (!Query1.checked && !Query2.checked) {
      QueryError.textContent = "Please select Query Type";
      isValid = false;
    } else {
      QueryError.textContent = " ";
    }

    if (isValid) {
      form.style.display = "none";
      thankYou.style.display = "flex";
    }
  });
  document.querySelector("#thankyou button").addEventListener("click", () => {
    location.reload();
  });
});
