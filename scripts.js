// JavaScript for form validation and submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact-form');
    
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      // Form validation logic here
      
      // Display success alert
      alert('Registered Successfully');
    });
  });
  
  function validateForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const bedrooms = document.getElementById('bedrooms').value;
    const bathrooms = document.getElementById('bathrooms').value;
    
    // Validate first name and last name (non-empty)
    if (firstName === '' || lastName === '') {
      alert('Please enter your first and last name.');
      return false;
    }
    
    // Validate phone (numeric)
    if (isNaN(phone)) {
      alert('Please enter a valid phone number.');
      return false;
    }
    
    // Validate email (simple pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    
    // Validate bedrooms and bathrooms (positive integers)
    if (bedrooms <= 0 || bathrooms <= 0 || isNaN(bedrooms) || isNaN(bathrooms)) {
      alert('Please enter valid numbers for bedrooms and bathrooms.');
      return false;
    }
    
    // Validation passed, show success alert
    alert('Registered Successfully');
    return true;
  }
  