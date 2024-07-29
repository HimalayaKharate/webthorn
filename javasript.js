
          const menuBtn = document.querySelector('[data-collapse-toggle="navbar-default"]');
          const navbarDefault = document.getElementById('navbar-default');
          const loginDropdownButton = document.getElementById('loginDropdownButton');
          const loginDropdown = document.getElementById('loginDropdown');
      
          menuBtn.addEventListener('click', () => {
              navbarDefault.classList.toggle('hidden');
          });
      
          loginDropdownButton.addEventListener('click', () => {
              loginDropdown.classList.toggle('hidden');
          });

          let index = 0;

          function showSlide(i) {
              const slides = document.querySelectorAll('.carousel-item');
              const totalSlides = slides.length;
              if (i >= totalSlides) index = 0;
              else if (i < 0) index = totalSlides - 1;
              else index = i;
              document.querySelector('.carousel-inner').style.transform = `translateX(${-index * 100}%)`;
          }
  
          function nextSlide() {
              showSlide(index + 1);
          }
  
          function prevSlide() {
              showSlide(index - 1);
          }