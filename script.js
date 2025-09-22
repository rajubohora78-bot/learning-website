

const button = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  // Optional: animate hamburger into X
  button.classList.toggle('open');
});







// Slider starts here


 document.addEventListener('DOMContentLoaded', () => {
            const list = document.querySelector('.carousel .list');
            const items = document.querySelectorAll('.carousel .list .item');
            const nextBtn = document.querySelector('.carousel .arrows .next');
            const prevBtn = document.querySelector('.carousel .arrows .prev');
            const dotsContainer = document.querySelector('.carousel .dots');

            let active = 0;
            const lengthItems = items.length;
            let refreshInterval;

            // Function to load the dots and set the initial active dot
            const loadDots = () => {
                dotsContainer.innerHTML = '';
                items.forEach((item, index) => {
                    const dot = document.createElement('button');
                    dot.classList.add('w-3', 'h-3', 'rounded-full', 'bg-gray-400', 'cursor-pointer', 'transition-colors', 'duration-300');
                    dot.addEventListener('click', () => {
                        active = index;
                        reloadSlider();
                    });
                    dotsContainer.appendChild(dot);
                });
            };

            // Function to handle the slide logic
            const reloadSlider = () => {
                list.style.transform = `translateX(-${active * 100}%)`;
                
                // Update dots
                const dots = document.querySelectorAll('.dots button');
                dots.forEach(dot => dot.classList.remove('active'));
                dots[active].classList.add('active');

                // Restart auto-slide
                clearInterval(refreshInterval);
                refreshInterval = setInterval(() => {
                    nextBtn.click();
                }, 6000); // 6 seconds
            };

            // Next button click event
            nextBtn.addEventListener('click', () => {
                active = (active + 1) % lengthItems;
                reloadSlider();
            });

            // Prev button click event
            prevBtn.addEventListener('click', () => {
                active = (active - 1 + lengthItems) % lengthItems;
                reloadSlider();
            });

            // Initialize the slider
            loadDots();
            reloadSlider();
        });
// Slider ends here
