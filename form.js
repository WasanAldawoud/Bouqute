
    const container = document.querySelector('.container');
    const registerbtn = document.querySelector('.register-btn');
    const loginbtn = document.querySelector('.login-btn');

    // Event listeners for toggling between login and register
    registerbtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginbtn.addEventListener('click', () => {
        container.classList.remove('active');
    });

