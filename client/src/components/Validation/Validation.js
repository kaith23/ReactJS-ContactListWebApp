export const setErrors = (
  fullName,
  emailAddress,
  contactNumber,
  location,
  registeredDate
) => {
  const error = {};

  const name = RegExp(/^[aA-zZ\s]+\,[aA-zZ\s\.]+$/);

  //fullname
  if (!fullName) {
    error.fullName = "Full Name Field cannot be blank!";
  } else {
    if (fullName.length > 30) {
      error.fullName = "Full Name Field accepts up to 30 in size only.";
    }

    if (!name.test(fullName)) {
      error.fullName = "Full Name Field accept characters values only.";
    }
  }

  const validEmailRegex = RegExp(
    /^([A-Za-z\d.-]+)@([A-Za-z\d]+)\.([A-Za-z]{2,45})$/
  );

  //email
  if (!emailAddress) {
    error.emailAddress = "Email Address field cannot be blank!";
  } else {
    if (emailAddress.length > 45) {
      error.emailAddress = "Email Address field accept up to 45 in size only!";
    }
    if (!validEmailRegex.test(emailAddress)) {
      error.emailAddress =
        "Email Address field should have a email domain.";
    }
  }

  //contact number
  const contactVal = RegExp(/^\d+$/);

  if (!contactNumber) {
    error.contactNumber = "Contact Number field cannot be blank!";
  } else {
    if (contactNumber.length > 11 )  {
      error.contactNumber("Contact Number field accept up to 11 in size only");
    }
   
  }

  //location
  if (!location) {
    error.location = "Location Field cannot be blank.";
  }
  
  console.log(registeredDate);
  //registered date
  if (!registeredDate) {
    error.registeredDate = "Registered Date field cannot be blank*.";
  } else {
    const today = new Date();
    const currentDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() > 8
        ? today.getMonth() + 1
        : "0" + (today.getMonth() + 1)) +
      "-" +
      (today.getDate() > 9 ? today.getDate() : "0" + today.getDate());
    if (currentDate !== registeredDate) {
      error.registeredDate = "Registered Date field must be today*.";
    }
  }
  return error;
};
