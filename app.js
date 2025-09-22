 const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    menuButton.classList.toggle("open"); // for hamburger animation
  });
      // Card Toggle Logic
      document.querySelectorAll('.card').forEach(card => {
        const body = card.querySelector('.card-body');
        function open() {
          card.classList.add('open');
          card.setAttribute('aria-expanded', 'true');
          body.setAttribute('aria-hidden', 'false');
          const height = body.scrollHeight;
          body.style.maxHeight = height + 'px';
          const tidy = () => { body.style.maxHeight = 'none'; body.removeEventListener('transitionend', tidy); };
          body.addEventListener('transitionend', tidy);
        }
        function close() {
          body.style.maxHeight = body.scrollHeight + 'px';
          body.getBoundingClientRect();
          body.style.maxHeight = '0';
          card.classList.remove('open');
          card.setAttribute('aria-expanded', 'false');
          body.setAttribute('aria-hidden', 'true');
        }
        function toggle() { if (card.classList.contains('open')) close(); else open(); }
        card.addEventListener('click', (e) => {
          if (e.target.closest('.subject')) return;
          toggle();
        });
        card.addEventListener('keydown', (e) => {
          const tag = document.activeElement && document.activeElement.tagName.toLowerCase();
          if (tag === 'a' || tag === 'button' || tag === 'input' || tag === 'textarea') return;
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
        });
      });

      // Slider Logic
      const list = document.querySelector('.list');
      const itemCount = list.querySelectorAll('.item').length;
      list.setAttribute('data-slide-count', itemCount);
      if (itemCount > 4) {
        let keyframes = `@keyframes slideDynamic {`;
        const segment = 100 / itemCount;
        const pausePercent = segment * 0.2;
        for (let i = 0; i < itemCount; i++) {
          const startPercent = i * segment;
          const showUntil = startPercent + pausePercent;
          const translateX = i * 100;
          if (i === 0) {
            keyframes += `0%, ${showUntil}% { transform: translateX(0); }`;
          } else {
            keyframes += `${startPercent}%, ${showUntil}% { transform: translateX(-${translateX}%); }`;
          }
        }
        keyframes += `100% { transform: translateX(-${(itemCount - 1) * 100}%); } }`;
        const style = document.createElement('style');
        style.textContent = keyframes;
        document.head.appendChild(style);
        list.style.animation = 'slideDynamic 15s infinite cubic-bezier(0.5, 0, 0.5, 1)';
      }
    });
