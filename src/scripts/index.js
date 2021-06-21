document.addEventListener("DOMContentLoaded", () => {
  checkScroll();

  window.onscroll = () => {
    checkScroll();
  }

  function posTop () {
    return typeof window.pageYOffset != 'undefined' ? window.pageYOffset: document.documentElement.scrollTop? document.documentElement.scrollTop: document.body.scrollTop? document.body.scrollTop:0;
  }

  function checkScroll () {
    const toTopElement = document.querySelector("#toTop");

    if (posTop() < 20) {
      toTopElement.style.opacity = 0;
      toTopElement.style.visibility = "hidden";
    } else {
      toTopElement.style.opacity = 1;
      toTopElement.style.visibility = "visible";
    }
  }
});
