function validateForm() {
  // Get the email and password from the form.
  const email = document.querySelector("input[type=email]").value;
  const password = document.querySelector("input[type=password]").value;

  // Check if the email is empty.
  if (email === "") {
    alert("Please enter your email address.");
    return false;
  }

  // Check if the password is empty.
  if (password === "") {
    alert("Please enter your password.");
    return false;
  }

  // The form is valid, so submit it and redirect the user to the books page in a new tab.
  try {
    document.querySelector("form").submit();
    window.open("books.html");
  } catch (error) {
    // Do something if the `openInNewTab` function is not supported.
  }
}

// Add event listener to the "Enter" button
document.getElementById("enter").addEventListener("click", validateForm);
