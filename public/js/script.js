document.getElementById("contact-form").onsubmit = () => {
  let isValid = true;
  clearErrors();

  let fName = document.getElementById("first-name").value.trim();
  if (!fName) {
    isValid = false;
    document
      .getElementById("first-name")
      .insertAdjacentHTML(
        "beforebegin",
        '<span class="error">Enter First Name!</span>',
      );
  }

  let lName = document.getElementById("last-name").value.trim();
  if (!lName) {
    isValid = false;
    document
      .getElementById("last-name")
      .insertAdjacentHTML(
        "beforebegin",
        '<span class="error">Enter Last Name!</span>',
      );
  }

  let email = document.getElementById("email").value.trim();
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let mailing = document.getElementById("mailing").checked;

  if ((mailing || email) && !regex.test(email)) {
    isValid = false;
    document
      .getElementById("email")
      .insertAdjacentHTML(
        "beforebegin",
        '<span class="error">Enter Valid Email!</span>',
      );
  }

  let linkedin = document.getElementById("linkedin").value.trim();
  if (linkedin && !linkedin.contains("linkedin.com")) {
    isValid = false;
    document
      .getElementById("linkedin")
      .insertAdjacentHTML(
        "beforebegin",
        '<span class="error">Enter Valid link!</span>',
      );
  }

  let meet = document.getElementById("meet").value;
  if (meet == "none") {
    isValid = false;
    document
      .getElementById("meet")
      .insertAdjacentHTML(
        "beforebegin",
        '<span class="error">Please Select!</span>',
      );
  }

  return isValid;
};

function clearErrors() {
  let errors = document.getElementsByClassName("error");
  for (let i = errors.length - 1; i >= 0; i--) {
    errors[i].remove();
  }
}
