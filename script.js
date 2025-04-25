document.addEventListener('DOMContentLoaded', function() {
  // Create sparkle container
  const sparkleContainer = document.createElement('div');
  sparkleContainer.className = 'sparkle-container';
  document.body.appendChild(sparkleContainer);

  // Track mouse movement
  document.addEventListener('mousemove', function(e) {
      // Get the elements we want to show sparkles on
      const contactSection = document.querySelector('.contact-section');
      const consultationForm = document.querySelector('.consultation-form');
      const footer = document.querySelector('footer');
      
      if (!contactSection && !consultationForm && !footer) return;
      
      // Check if mouse is in the correct sections
      const mouseY = e.clientY + window.scrollY;
      const contactRect = contactSection.getBoundingClientRect();
      const formRect = consultationForm.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();
      
      const contactTop = contactRect.top + window.scrollY;
      const footerBottom = footerRect.bottom + window.scrollY;
      
      // Only create sparkles between contact section and end of footer
      if (mouseY >= contactTop && mouseY <= footerBottom) {
          createSparkle(e.clientX, e.clientY);
      }
  });

  function createSparkle(x, y) {
      // Create multiple sparkles for each mouse movement
      for (let i = 0; i < 3; i++) {
          setTimeout(() => {
              const sparkle = document.createElement('div');
              sparkle.className = 'sparkle';
              
              // Add random offset to make it look more natural
              const offsetX = x + (Math.random() - 0.5) * 30;
              const offsetY = y + (Math.random() - 0.5) * 30;
              
              sparkle.style.left = `${offsetX}px`;
              sparkle.style.top = `${offsetY}px`;
              
              sparkleContainer.appendChild(sparkle);
              
              // Remove sparkle after animation completes
              setTimeout(() => {
                  sparkle.remove();
              }, 800);
          }, i * 50);
      }
  }
});