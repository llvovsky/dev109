function validateForm() {
 
  document.querySelectorAll(".error-message").forEach(el => el.innerHTML = "");

  let valid = true;

  // First Name
  const firstname = document.getElementById("firstname").value.trim();
  if (!firstname || firstname.length > 20 || !/^[a-zA-Z]+$/.test(firstname)) {
    document.getElementById("firstnameError").innerHTML = "First name is required and must be alphabetical, max 20 characters.";
    valid = false;
  }

  // Last Name
  const lastname = document.getElementById("lastname").value.trim();
  if (!lastname || lastname.length > 20 || !/^[a-zA-Z]+$/.test(lastname)) {
    document.getElementById("lastnameError").innerHTML = "Last name is required and must be alphabetical, max 20 characters.";
    valid = false;
  }

  // Email
  const email = document.getElementById("email").value.trim();
  const atpos = email.indexOf("@");
  const dotpos = email.lastIndexOf(".");
  if (!email || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
    valid = false;
  }

  // Phone
  const phone = document.getElementById("phone").value.trim();
  if (!/^\d{10,15}$/.test(phone)) {
    document.getElementById("phoneError").innerHTML = "Phone number must be numeric and between 10 to 15 digits.";
    valid = false;
  }

  // Username
  const username = document.getElementById("username").value.trim();
  if (!username || username.length > 12) {
    document.getElementById("usernameError").innerHTML = "Username is required and must not exceed 12 characters.";
    valid = false;
  }

  // Password
  const password = document.getElementById("password").value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,7}$/;
  if (!password || !passwordRegex.test(password)) {
    document.getElementById("passwordError").innerHTML = "Password must be max 7 characters and include upper, lower, number, and special char.";
    valid = false;
  }

  // Address
  const address = document.getElementById("address").value.trim();
  if (!address) {
    document.getElementById("addressError").innerHTML = "Address is required.";
    valid = false;
  }

  // City
  const city = document.getElementById("city").value.trim();
  if (!city) {
    document.getElementById("cityError").innerHTML = "City is required.";
    valid = false;
  }

  // Country & State
  const country = document.getElementById("country").value;
  const state = document.getElementById("state").value;
  if (!country) {
    document.getElementById("countryError").innerHTML = "Country is required.";
    valid = false;
  } else if (country === "USA" && state === "") {
    document.getElementById("stateError").innerHTML = "State is required when country is USA.";
    valid = false;
  }

  // Zip Code (Only required for USA)
  const zipcode = document.getElementById("zipcode").value.trim();
  if (country === "USA") {
    if (!/^\d{5}$/.test(zipcode)) {
      document.getElementById("zipcodeError").innerHTML = "Zip code is required for USA and must be 5 digits.";
      valid = false;
    }
  }

  
  // If all valid, redirect
  if (valid) {
    window.location.href = "thankyou.html";
  }

  return false; // Prevent form submission to handle validation first
}
