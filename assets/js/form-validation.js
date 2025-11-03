/**
 * Form Validation Script
 * Handles real-time validation for the contact form
 */
document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('contact-form');
	const nameField = document.getElementById('name');
	const emailField = document.getElementById('email');
	const messageField = document.getElementById('message');
	const submitBtn = document.getElementById('submit-btn');
	
	// Validation functions
	function validateName() {
		const name = nameField.value.trim();
		const errorElement = document.getElementById('name-error');
		
		if (name.length < 2) {
			errorElement.textContent = 'Name must be at least 2 characters long';
			nameField.classList.add('invalid');
			nameField.classList.remove('valid');
			return false;
		}
		
		errorElement.textContent = '';
		nameField.classList.remove('invalid');
		nameField.classList.add('valid');
		return true;
	}
	
	function validateEmail() {
		const email = emailField.value.trim();
		const errorElement = document.getElementById('email-error');
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		
		if (!emailRegex.test(email)) {
			errorElement.textContent = 'Please enter a valid email address';
			emailField.classList.add('invalid');
			emailField.classList.remove('valid');
			return false;
		}
		
		errorElement.textContent = '';
		emailField.classList.remove('invalid');
		emailField.classList.add('valid');
		return true;
	}
	
	function validateMessage() {
		const message = messageField.value.trim();
		const errorElement = document.getElementById('message-error');
		
		if (message.length < 10) {
			errorElement.textContent = 'Message must be at least 10 characters long';
			messageField.classList.add('invalid');
			messageField.classList.remove('valid');
			return false;
		}
		
		errorElement.textContent = '';
		messageField.classList.remove('invalid');
		messageField.classList.add('valid');
		return true;
	}
	
	function updateSubmitButton() {
		const isValid = validateName() && validateEmail() && validateMessage();
		submitBtn.disabled = !isValid;
	}
	
	// Add event listeners for real-time validation
	nameField.addEventListener('blur', validateName);
	nameField.addEventListener('input', updateSubmitButton);
	
	emailField.addEventListener('blur', validateEmail);
	emailField.addEventListener('input', updateSubmitButton);
	
	messageField.addEventListener('blur', validateMessage);
	messageField.addEventListener('input', updateSubmitButton);
	
	// Initial validation check
	updateSubmitButton();
	
	// Form submission validation
	form.addEventListener('submit', function(e) {
		if (!validateName() || !validateEmail() || !validateMessage()) {
			e.preventDefault();
			alert('Please fix the errors in the form before submitting.');
		}
	});
});
