(() => {
    'use strict'

    // Fatch all the forms we want to apply custom Bootstrap validation styles to 
    const froms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission 
    Array.from(froms).forEach(from => {
        from.addEventListener('submit', event => {
            if (!from.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            from.classList.add('was-validated');
        }, false);
    });
})();