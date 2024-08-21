const scriptURL = 'https://script.google.com/macros/s/AKfycbyWmeXuJi0wJt8A213iX893LIKX9qZLwMIIRPE_dGAdz0Roj5pZIQKWdOKjymyH7-oJ/exec';

const form = document.forms['contact-form'];
const loadingDiv = document.getElementById('loading');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Show the loading animation
    loadingDiv.style.display = 'block';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(data => {
            // Hide the loading animation
            loadingDiv.style.display = 'none';

            alert(" Success! We’ve got your request. Reply coming your way!");
            window.location.reload(); // Reload the page or redirect as needed
        })
        .catch(error => {
            // Hide the loading animation even if there's an error
            loadingDiv.style.display = 'none';
            console.error('Error!', error.message);
        });
});
