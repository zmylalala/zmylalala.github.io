function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("endBanner");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          banner.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  // 选择 content 区域最后一个 section 作为触发点
  const lastSection = document.querySelector(".content section:last-of-type");
  if (lastSection) {
    observer.observe(lastSection);
  }
});


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("endBanner");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          banner.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  // 选择 content 区域最后一个 section 作为触发点
  const lastSection = document.querySelector(".content section:last-of-type");
  if (lastSection) {
    observer.observe(lastSection);
  }
});

/*
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('Particles.js loaded - callback');
});
*/
