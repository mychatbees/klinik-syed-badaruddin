// ===== CONTACT FORM SUBMISSION =====
    // Function: handleContactSubmit()
    // Purpose: Validate the form, show a success message, and give immediate user feedback
    // Triggers: Submit event on the contact form
    function handleContactSubmit(e) {
      e.preventDefault();

      const form = e.target;
      const name = document.getElementById('nama').value.trim();
      const phone = document.getElementById('telefon').value.trim();
      const purpose = document.getElementById('tujuan').value;
      const message = document.getElementById('mesej').value.trim();
      const output = document.getElementById('formMessage');

      if (!name || !phone || !purpose || !message) {
        output.textContent = 'Sila lengkapkan semua maklumat sebelum menghantar mesej.';
        output.className = 'rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-800 font-medium';
        output.classList.remove('hidden');
        return;
      }

      output.textContent = 'Terima kasih! Mesej anda telah berjaya dihantar. Pihak klinik akan menghubungi anda dengan segera.';
      output.className = 'rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-800 font-medium';
      output.classList.remove('hidden');
      form.reset();
      alert('Mesej anda telah dihantar dengan berjaya.');
    }

    document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);