// ===== FAQ ACCORDION TOGGLE =====
    // Function: toggleAccordionItem(button)
    // Purpose: Expand or collapse a selected FAQ item while keeping the interaction accessible
    // Triggers: Click on any accordion button within the FAQ list
    function toggleAccordionItem(button) {
      const item = button.closest('[data-accordion-item]');
      const panel = item.querySelector('.faq-panel');
      const icon = item.querySelector('.accordion-icon');
      const isOpen = item.classList.contains('active');

      item.classList.toggle('active', !isOpen);
      button.setAttribute('aria-expanded', String(!isOpen));
      icon.textContent = isOpen ? '+' : '−';
      panel.style.maxHeight = isOpen ? '0px' : panel.scrollHeight + 'px';
    }

    // ===== INITIALIZE ACCORDION HEIGHTS =====
    // Function: initializeAccordion()
    // Purpose: Set the initial max-height for any pre-open accordion and bind click handlers
    // Triggers: Page load
    function initializeAccordion() {
      document.querySelectorAll('[data-accordion-item]').forEach(function(item) {
        const button = item.querySelector('.accordion-btn');
        const panel = item.querySelector('.faq-panel');
        if (item.classList.contains('active')) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
        button.addEventListener('click', function() {
          toggleAccordionItem(button);
        });
      });
    }

    initializeAccordion();
    window.addEventListener('resize', function() {
      document.querySelectorAll('[data-accordion-item].active .faq-panel').forEach(function(panel) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      });
    });