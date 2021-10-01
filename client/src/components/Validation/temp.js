
  const form = document.getElementsByTagName("form")[0];
  const fullName = document.getElementByName("fullName");
  const emailAddress = document.getElementByName("emailAddress");
  const contactNumber = document.getElementByName("contactNumber");
  const location = document.getElementByName("location");
  const registeredDate = document.getElementByName("registeredDate");

  // Full Name
  let nameError = fullName;
  while ((nameError = nameError.nextSibling).nodeType != 1);

  const nameRegExp = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;

  //  Email Address
  let emailError = emailAddress;
  while ((emailError = emailError.nextSibling).nodeType != 1);

  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Contact Number
  let numberError = contactNumber;
  while ((numberError = numberError.nextSibling).nodeType != 1);

  const numberRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

  // Location
  let locationError = location;
  while ((locationError = locationError.nextSibling).nodeType != 1);

  // Registered Date
  let registrationError = registeredDate;
  while ((registrationError = registrationError.nextSibling).nodeType != 1);

  function addEvent(element, event, callback) {
    let previousEventCallBack = element["on" + event];
    element["on" + event] = function (e) {
      const output = callback(e);

      if (output === false) return false;

      if (typeof previousEventCallBack === "function") {
        output = previousEventCallBack(e);
        if (output === false) return false;
      }
    };
  }

  addEvent(window, "load", function () {
    const nameValidation =
      fullName.value.length === 0 || nameRegExp.nameValidation(fullName.value);

    const emailValidation =
      emailAddress.value.length === 0 ||
      emailRegExp.emailValidation(emailAddress.value);

    const contactNumberValidation =
      contactNumber.value.length === 0 ||
      numberRegExp.contactNumberValidation(contactNumber.value);

    const locationValidation = location.value.length === 0;

    const registrationValidation = registeredDate.value.length === 0;

    fullName.className = nameValidation ? "valid" : "invalid";
    emailAddress.className = emailValidation ? "valid" : "invalid";
    contactNumber.className = numberValidation ? "valid" : "invalid";
    location.className = locationValidation ? "valid" : "invalid";
    registeredDate.className = registrationValidation ? "valid" : "invalid";
  });
  // When User try to input
  // Full Name Input
  addEvent(fullName, "input", function () {
    const nameValidation =
      fullName.value.length === 0 || nameRegExp.nameValidation(fullName.value);
    if (nameValidation) {
      fullName.className = "valid";
      nameError.textContent = "";
      nameError.className = "nameError";
    } else {
      fullName.className = "invalid";
    }
  });

  // Full Name Submit
  addEvent(form, "submit", function () {
    const nameValidation =
      fullName.value.length === 0 || nameRegExp.nameValidation(fullName.value);

    if (!nameValidation) {
      fullName.className = "invalid";
      nameError.textContent = "Full Name Field accept characters values only.";
      nameError.className = "nameError active";

      return false;
    } else {
      fullName.className = "valid";
      nameError.textContent = "";
      nameError.className = "nameError";
    }
  });

  // Email Address
  addEvent(form, "submit", function () {
    const emailValidation =
      emailAddress.value.length === 0 ||
      emailRegExp.emailValidation(emailAddress.value);

    if (!emailValidation) {
      emailAddress.className = "invalid";
      emailError.textContent = "Email Address Field should have email domain.";
      emailError.className = "emailError active";

      return false;
    } else {
      emailAddress.className = "valid";
      emailError.textContent = "";
      emailError.className = "emailError";
    }
  });

  // Contact Number
  addEvent(form, "submit", function () {
    const numberValidation =
      contactNumber.value.length === 0 ||
      numberRegExp.numberValidation(contactNumber.value);

    if (!numberValidation) {
      contactNumber.className = "invalid";
      numberError.textContent =
        "Contact Number Field accept number characters only.";
      numberError.className = "numberError active";

      return false;
    } else {
      contactNumber.className = "valid";
      numberError.textContent = "";
      numberError.className = "numberError";
    }
  });

  // Location
  addEvent(form, "submit", function () {
    const locationValidation = location.value.length === 0;

    if (!locationValidation) {
      location.className = "invalid";
      locationError.textContent = "Location Field cannot be blank.";
      emailError.className = "emailError active";

      return false;
    } else {
      location.className = "valid";
      locationError.textContent = "";
      locationError.className = "locationError";
    }
  });

  // Registered Date
  addEvent(form, "submit", function () {
    const registrationValidation = registeredDate.value.length === 0;

    if (!registrationValidation) {
      registeredDate.className = "invalid";
      registrationError.textContent =
        "Registration Date accept current date only.";
      registrationError.className = "registrationError active";

      return false;
    } else {
      registeredDate.className = "valid";
      registrationError.textContent = "";
      registrationError.className = "registrationError";
    }
  });