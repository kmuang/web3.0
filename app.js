const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const mobileMenu = document.querySelector(".navbar__mobile");

const navDestinations = {
  Home: "home",
  New: "new",
  Popular: "popular",
  Trending: "trending",
  Categories: "categories",
};

document.querySelectorAll(".navbar__content a, .navbar__desktop a").forEach((link) => {
  const destination = navDestinations[link.textContent.trim()];
  if (destination) {
    link.href = `index.html#${destination}`;
  }
});

hamburger?.addEventListener("click", () => {
  mobileMenu?.classList.add("open");
});

closeBtn?.addEventListener("click", () => {
  mobileMenu?.classList.remove("open");
});
