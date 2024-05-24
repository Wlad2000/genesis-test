document.addEventListener('DOMContentLoaded', function() {

    const burgerMenuButton = document.getElementById('burger-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    //header mobile
    burgerMenuButton.addEventListener('click', function() {
        navLinks.classList.toggle('mobile');
    });

    //SUBMIT FORM HANDLER 
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        let isValid = true;
        formMessage.innerHTML = '';
        formMessage.classList.remove('error', 'success');

        if (!name) {
            isValid = false;
            formMessage.innerHTML += '<p>Будь ласка, введіть ваше ім\'я.</p>';
        }

        if (!email) {
            isValid = false;
            formMessage.innerHTML += '<p>Будь ласка, введіть ваш email.</p>';
        } else if (!validateEmail(email)) {
            isValid = false;
            formMessage.innerHTML += '<p>Будь ласка, введіть коректний email.</p>';
        }
        //Correct data
        if (isValid) {
            formMessage.innerHTML = '<p>Форма успішно відправлена!</p>';
            formMessage.classList.add('success');
            contactForm.reset();
            setTimeout(clearFormMessage, 10000); 
        } else {
            formMessage.classList.add('error');
            setTimeout(clearFormMessage, 10000); 
        }
    });

    //Validate data
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    //Clear form-message data
    function clearFormMessage() {
        formMessage.innerHTML = '';
        formMessage.classList.remove('error', 'success');
    }
});
