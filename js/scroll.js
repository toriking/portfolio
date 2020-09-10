const trigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < trigger.length; i++){
    trigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = trigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 0;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }