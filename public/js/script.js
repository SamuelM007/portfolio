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
        '<span class="error">ENTER FIRST NAME!</span>',
      );
  }

  let lName = document.getElementById("last-name").value.trim();
  if (!lName) {
    isValid = false;
    document
      .getElementById("last-name")
      .insertAdjacentHTML(
        "beforebegin",
        '<span class="error">ENTER LAST NAME!</span>',
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
        '<span class="error">ENTER VALID EMAIL!</span>',
      );
  }

  let linkedin = document.getElementById("linkedin").value.trim();
  if (linkedin && !linkedin.startsWith("https://linkedin.com/in/")) {
    isValid = false;
    document
      .getElementById("linkedin")
      .insertAdjacentHTML(
        "beforebegin",
        '<span class="error">ENTER VALID LINK!</span>',
      );
  }

  let meet = document.getElementById("meet").value;
  if (meet == "none") {
    isValid = false;
    document
      .getElementById("meet")
      .insertAdjacentHTML(
        "beforebegin",
        '<span class="error">PLEASE SELECT!</span>',
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
