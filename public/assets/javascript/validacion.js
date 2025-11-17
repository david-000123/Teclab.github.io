document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const inputs = form.querySelectorAll('.main-input');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+\-\s]*$/;
  const successModal = document.getElementById('successModal');
  const closeModal = successModal.querySelector('.close');

  // Funciones de error/éxito
  function showError(input, message) {
    const parent = input.closest('.footer-form-group');
    const error = parent.querySelector('.error-message');
    parent.classList.add('error');
    parent.classList.remove('success');
    error.textContent = message;
  }

  function clearError(input) {
    const parent = input.closest('.footer-form-group');
    parent.classList.remove('error');
    const error = parent.querySelector('.error-message');
    if (error) error.textContent = '';
  }

  function showSuccess(input) {
    const parent = input.closest('.footer-form-group');
    parent.classList.add('success');
    parent.classList.remove('error');
    const error = parent.querySelector('.error-message');
    if (error) error.textContent = '';
  }

  // Input visual
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        input.classList.add('filled');
      } else {
        input.classList.remove('filled');
      }
      clearError(input);
    });
  });

  // Modal
  function openModal() {
    successModal.classList.add('active');
  }

  function closeModalFunc() {
    successModal.classList.remove('active');
  }

  closeModal.addEventListener('click', closeModalFunc);
  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) closeModalFunc();
  });

  // Envío del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Siempre prevenimos para controlar con fetch
    let isValid = true;

    // Validación campos
    inputs.forEach(input => {
      const value = input.value.trim();
      if (!value) {
        showError(input, 'Campo obligatorio');
        isValid = false;
      } else if (input.type === 'email' && !emailRegex.test(value)) {
        showError(input, 'Formato de email inválido');
        isValid = false;
      } else if (input.type === 'tel' && !phoneRegex.test(value)) {
        showError(input, 'Número de teléfono inválido');
        isValid = false;
      } else {
        showSuccess(input);
      }
    });

    // Validación checkboxes
    const privacy = document.getElementById('privacy');
    const terms = document.getElementById('terms');
    if (!privacy.checked || !terms.checked) {
      alert('Debes aceptar las políticas de privacidad y los términos y condiciones.');
      isValid = false;
    }

    if (!isValid) return;

    // Enviar con fetch a FormSubmit
    const formData = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        openModal();
        form.reset();
        inputs.forEach(i => i.classList.remove('filled'));
      } else {
        alert('Error al enviar el formulario. Intente nuevamente.');
      }
    })
    .catch(err => {
      alert('Error de conexión al enviar el formulario: ' + err);
    });
  });
});
