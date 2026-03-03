document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider__track');
  if (!track) return;

  const slides = document.querySelectorAll('.slider__slide');
  const dots   = document.querySelectorAll('.slider__dot');
  const total  = slides.length;
  let current  = 0;
  let timer;

  function goTo(index) {
    dots[current].classList.remove('slider__dot--active');
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots[current].classList.add('slider__dot--active');
  }

  function startAuto() {
    timer = setInterval(() => goTo(current + 1), 4500);
  }

  function stopAuto() {
    clearInterval(timer);
  }

  // Arrows — one set per slide, all wired to the same handlers
  document.querySelectorAll('.slider__arrow--prev').forEach(btn => {
    btn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  });

  document.querySelectorAll('.slider__arrow--next').forEach(btn => {
    btn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });
  });

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); });
  });

  // Pause on hover
  track.addEventListener('mouseenter', stopAuto);
  track.addEventListener('mouseleave', startAuto);

  startAuto();
});
