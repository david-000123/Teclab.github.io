
document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contactForm');
  const inputs = form.querySelectorAll('.main-input');
  const successModal = document.getElementById('successModal');
  const closeModal = successModal.querySelector('.close');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+\-\s]*$/;

  // -----------------------------
  // FUNCIONES DE VALIDACIÓN
  // -----------------------------
  const validators = {
    text: value => value.length > 0,
    email: value => emailRegex.test(value),
    tel: value => phoneRegex.test(value)
  };

  function showError(input, message) {
    const group = input.closest('.footer-form-group');
    group.classList.add('error');
    group.classList.remove('success');
    group.querySelector('.error-message').textContent = message;
  }

  function showSuccess(input) {
    const group = input.closest('.footer-form-group');
    group.classList.add('success');
    group.classList.remove('error');
    group.querySelector('.error-message').textContent = "";
  }

  function validateInput(input) {
    const value = input.value.trim();

    if (!value) {
      showError(input, "Campo obligatorio");
      return false;
    }

    const type = input.type;
    if (validators[type] && !validators[type](value)) {
      showError(input, `Formato de ${type} inválido`);
      return false;
    }

    showSuccess(input);
    return true;
  }

  // -----------------------------
  // EFECTO VISUAL LABELS
  // -----------------------------
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.classList.toggle('filled', input.value.trim() !== "");
      input.closest('.footer-form-group').classList.remove('error');
      input.closest('.footer-form-group').querySelector('.error-message').textContent = "";
    });
  });

  // -----------------------------
  // MODALES
  // -----------------------------
  function openModal() { successModal.classList.add('active'); }
  function closeModalFunc() { successModal.classList.remove('active'); }

  closeModal.addEventListener('click', closeModalFunc);
  successModal.addEventListener('click', e => {
    if (e.target === successModal) closeModalFunc();
  });

  // -----------------------------
  // ENVÍO DEL FORMULARIO
  // -----------------------------
  form.addEventListener('submit', async e => {
    e.preventDefault();

    let valid = true;
    inputs.forEach(input => { if (!validateInput(input)) valid = false; });
    if (!valid) return;

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      // Si FormSubmit responde OK → perfecto.
      if (response.ok) {
        openModal();
        form.reset();
        inputs.forEach(i => i.classList.remove('filled'));
      } else {
        // Fallback automático: enviar con submit real
        form.submit();
      }

    } catch (error) {
      // Si fetch falla por CORS, red, etc → fallback
      form.submit();
    }
  });
});

