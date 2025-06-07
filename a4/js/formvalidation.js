function validateForm() {
      let errorMessages = "";
      let validFirstname = false;
      let validLastname = false;
      let validEmail = false;
      let validPhone = false;
      let validUsername = false;
      let validPassword = false;
      let validAddress = false;
      let validCity = false;
      let validState = false;
      let validCountry = false;
      let validZipcode = true; // Only required if country is USA

      const nameRegex = /^[A-Za-z]+$/;
      const firstname = document.getElementById("firstname").value.trim();
      if (!firstname || firstname.length > 20 || !firstname.match(nameRegex)) {
        errorMessages += "<p>First name is required, must be alphabetical, and max 20 characters.</p>";
      } else {
        validFirstname = true;
      }

      const lastname = document.getElementById("lastname").value.trim();
      if (!lastname || lastname.length > 20 || !lastname.match(nameRegex)) {
        errorMessages += "<p>Last name is required, must be alphabetical, and max 20 characters.</p>";
      } else {
        validLastname = true;
      }

      const userEmail = document.getElementById("email").value.trim();
      const atpos = userEmail.indexOf("@");
      const dotpos = userEmail.lastIndexOf(".");
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email format.</p>";
      } else {
        validEmail = true;
      }

      let phone = document.getElementById("phone").value.replace(/[^0-9]/g, "");
      if (!phone.match(/^\d{10,15}$/)) {
        errorMessages += "<p>Phone must be 10–15 digits, numeric only.</p>";
      } else {
        // Auto-insert dashes (e.g. 123-456-7890)
        phone = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6);
        validPhone = true;
      }

      const username = document.getElementById("username").value.trim();
      if (!username || username.length > 12) {
        errorMessages += "<p>Username is required and must be 12 characters or fewer.</p>";
      } else {
        validUsername = true;
      }

      const password = document.getElementById("password").value;
      const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,7}$/;
      if (!password.match(passRegex)) {
        errorMessages += "<p>Password must be 1–7 characters, include 1 uppercase, 1 lowercase, 1 number, and 1 special character.</p>";
      } else {
        validPassword = true;
      }

      const address = document.getElementById("address").value.trim();
      if (!address) {
        errorMessages += "<p>Address is required.</p>";
      } else {
        validAddress = true;
      }

      const city = document.getElementById("city").value.trim();
      if (!city) {
        errorMessages += "<p>City is required.</p>";
      } else {
        validCity = true;
      }

      const state = document.getElementById("state").value;
      if (!state) {
        errorMessages += "<p>State is required.</p>";
      } else {
        validState = true;
      }

      const country = document.getElementById("country").value;
      if (!country) {
        errorMessages += "<p>Country is required.</p>";
      } else {
        validCountry = true;
      }

      const zipcode = document.getElementById("zipcode").value.trim();
      if (country === "USA") {
        if (!zipcode.match(/^\d{5}$/)) {
          errorMessages += "<p>Zip Code is required for USA and must be 5 digits.</p>";
          validZipcode = false;
        } else {
          validZipcode = true;
        }
      }

      document.getElementById("errorMessages").innerHTML = errorMessages;
      return (validFirstname && validLastname && validEmail && validPhone &&
              validUsername && validPassword && validAddress && validCity &&
              validState && validCountry && validZipcode);
    }
