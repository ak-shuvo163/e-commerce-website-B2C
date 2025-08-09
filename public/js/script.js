// ========== DARK MODE TOGGLE ==========
const themeToggleBtn = document.getElementById("theme-toggle");
const icon = themeToggleBtn.querySelector("i");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  html.classList.add("dark");
  icon.classList.replace("fa-moon", "fa-sun");
} else {
  html.classList.remove("dark");
  icon.classList.replace("fa-sun", "fa-moon");
}

themeToggleBtn.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  icon.classList.toggle("fa-moon", !isDark);
  icon.classList.toggle("fa-sun", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ========== MOBILE MENU ==========
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.replace("right-[-100%]", "right-0");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.replace("right-0", "right-[-100%]");
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.replace("right-0", "right-[-100%]");
  });
});

// ========== CART ITEM COUNT ==========
const cartCountEl = document.getElementById("cart-count");

function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartCountEl.textContent = cartItems.length;
}

// Initial load
updateCartCount();

// Example: Adding item to cart (for demo)
function addToCart(item) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(item);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateCartCount();
}

// ========== NAV ANIMATION ==========
anime({
  targets: "nav",
  opacity: [0, 1],
  translateY: [-30, 0],
  duration: 1000,
  easing: "easeOutExpo"
});

