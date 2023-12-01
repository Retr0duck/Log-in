document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var emailInput = document.getElementById('email');
        var passwordInput = document.getElementById('password');

        var isValidEmail = validarCorreo(emailInput.value);
        var isValidPassword = validarContraseña(passwordInput.value);

        if (isValidEmail && isValidPassword) {
            alert('¡Inicio de sesión exitoso!');
        } else {
            alert('Por favor, completa el formulario correctamente.');
        }
    });

    function validarCorreo(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validarContraseña(password) {
        return password.length <= 18;
    }
});
