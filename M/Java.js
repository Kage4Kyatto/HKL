document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');

    setTimeout(() => {
        successMessage.classList.add('hidden'); // Hide after 3 seconds
    }, 3000);

    this.reset(); // Clear the form fields
});
