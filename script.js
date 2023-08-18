document.addEventListener("DOMContentLoaded", function () {
  // Get the current page without the .html extension
  var currentPage = window.location.pathname.split("/").pop();
  console.log(currentPage);
  console.log(currentPage);
  // Find the navigation links
  var navLinks = document.querySelectorAll("nav ul li a");
  var currentPageOpt = window.location.pathname.replace(/\.html$/, '').split("/").pop();
  console.log(currentPageOpt);
  // Loop through the navigation links to set the "active" class
  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentPage || link.getAttribute("href") === currentPageOpt) {
      link.classList.add("active");
    }
  });


  if (currentPage === "contact.html" || currentPage === "contact") {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const firstName = $('#first-name').val();
      const lastName = $('#last-name').val();
      const phone = $('#phone').val();
      const email = $('#email').val();
      const propertyType = $('#property-type').val();;
      const bedrooms = $('#bedrooms').val();
      const bathrooms = $('#bathrooms').val();
      const priceRange = $('#price-range').val();
      const comments = $('#comments').val();

      // call the validateForm function
      // validateForm();
      // perform additional validations
      if (firstName === "") {
        alert("Please enter your first name.");
        return;
      }

      if (lastName === "") {
        alert("Please enter your last name.");
        return;
      }

      if (phone === "") {
        alert("Please enter your phone number.");
        return;
      }

      if (email === "") {
        alert("Please enter your email address.");
        return;
      }

      if (propertyType === "") {
        alert("Please select a property type.");
        return;
      }

      if (bedrooms === "") {
        alert("Please select a number of bedrooms.");
        return;
      }

      if (bathrooms === "") {
        alert("Please select a number of bathrooms.");
        return;
      }

      if (priceRange === "") {
        alert("Please select a price range.");
        return;
      }

      if (comments === "") {
        alert("Please enter your comments.");
        return;
      }

      // check if the email address is valid
      if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
      }

      // If all validations pass, alert success message
      alert("Registered Successfully");

      // Clear the form
      $('#contact-form')[0].reset();
    });
  }
});

$(document).ready(function () {
  $('.property-carousel').slick({
    // Customize carousel options here
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nav: true
  });
});

// Function to validate form
function validateForm() {
  var firstName = document.forms["contact-form"]["first-name"].value;
  var lastName = document.forms["contact-form"]["last-name"].value;
  var phone = document.forms["contact-form"]["phone"].value;
  var email = document.forms["contact-form"]["email"].value;
  var propertyType = document.forms["contact-form"]["property-type"].value;
  var bedrooms = document.forms["contact-form"]["bedrooms"].value;
  var bathrooms = document.forms["contact-form"]["bathrooms"].value;
  var priceRange = document.forms["contact-form"]["price-range"].value;
  var comments = document.forms["contact-form"]["comments"].value;

  // perform additional validations
  if (firstName === "") {
    alert("Please enter your first name.");
    return;
  }

  if (lastName === "") {
    alert("Please enter your last name.");
    return;
  }

  if (phone === "") {
    alert("Please enter your phone number.");
    return;
  }

  if (email === "") {
    alert("Please enter your email address.");
    return;
  }

  if (propertyType === "") {
    alert("Please select a property type.");
    return;
  }

  if (bedrooms === "") {
    alert("Please select a number of bedrooms.");
    return;
  }

  if (bathrooms === "") {
    alert("Please select a number of bathrooms.");
    return;
  }

  if (priceRange === "") {
    alert("Please select a price range.");
    return;
  }

  if (comments === "") {
    alert("Please enter your comments.");
    return;
  }

  // check if the email address is valid
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  // If all validations pass, alert success message
  alert("Registered Successfully");
}