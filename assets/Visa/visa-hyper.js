document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', function () {
        const currentlyOpen = document.querySelector('.accordion.open');
        const parent = this.parentElement;

        if (currentlyOpen && currentlyOpen !== parent) {
          currentlyOpen.classList.remove('open');
        }

        parent.classList.toggle('open');
      });
    });

    // Ensure the first dropdown is open by default
    window.addEventListener('DOMContentLoaded', () => {
      const firstAccordion = document.querySelector('.accordion');
      firstAccordion.classList.add('open');
    });  

    window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.getElementById('toggleForm').checked = true;
    }, 3000); // 3000ms = 3 seconds
  });