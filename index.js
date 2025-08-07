// Optimized JavaScript for better performance
const gradient = "linear-gradient(to bottom, black, rgba(0,0,0,0))";
const nav2text7 = document.getElementById("nav-bar2-text7");
let exploreVasaviButton = document.getElementById("exploreVasaviButton");

// Function to scroll down
function scrollDown() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

// Hide button when at the top, show it when scrolled down
window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
        exploreVasaviButton.classList.remove("hidden"); // show button when at the top
    } else {
        exploreVasaviButton.classList.add("hidden"); // hide button when scrolled down
    }
});

// Event listener for clicking the button
if (exploreVasaviButton) {
    exploreVasaviButton.addEventListener("click", scrollDown);
}

function showDropdown(element) {
    let dropdown = element.nextElementSibling;
    
    dropdown.style.opacity = "1";
    dropdown.style.visibility = "visible";
    dropdown.style.transform = "scale(1)";
}

function increaseNumber(targetElement, endValue) {
    let currentNumber = 0;
    const duration = 2300;
    let step = 20;
    if (endValue === 23) {
        step = 1;
    }
    const interval = duration / (endValue / step);
    const timer = setInterval(() => {
        currentNumber += step;
        if (currentNumber >= endValue) {
            clearInterval(timer);
            currentNumber = endValue;
        }
        targetElement.textContent = currentNumber;
        let content = targetElement.textContent;
        targetElement.textContent = content + "+";
    }, interval);
}

// Optimized statistics elements
const lastStats = document.getElementById("lastStats");
const placement2021Element = document.getElementById("placement-2021");
const placement2022Element = document.getElementById("placement-2022");
const placement2023Element = document.getElementById("placement-2023");
const statisticsSection = document.getElementById("placement-stats");
const facultNumberElement = document.getElementById("facultyNumber");
const studentNumberElement = document.getElementById("studentsNumber");
const experienceNumberElement = document.getElementById("experienceNumber");

// Intersection Observer for statistics
const observer_1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (placement2021Element) increaseNumber(placement2021Element, 500);
            if (placement2022Element) increaseNumber(placement2022Element, 900);
            if (placement2023Element) increaseNumber(placement2023Element, 690);
            observer_1.unobserve(statisticsSection);
        }
    });
});

const observer_2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (placement2021Element) increaseNumber(placement2021Element, 500);
            if (placement2022Element) increaseNumber(placement2022Element, 900);
            if (placement2023Element) increaseNumber(placement2023Element, 690);
            if (facultNumberElement) increaseNumber(facultNumberElement, 500);
            if (studentNumberElement) increaseNumber(studentNumberElement, 5000);
            if (experienceNumberElement) increaseNumber(experienceNumberElement, 23);
            observer_2.unobserve(lastStats);
        }
    });
});

if (statisticsSection) observer_1.observe(statisticsSection);
if (lastStats) observer_2.observe(lastStats);

document.addEventListener("DOMContentLoaded", function () {
    const navdiv = document.querySelector(".fixed-top");
    const navbar = document.querySelector(".navbar");
    const navbar2 = document.querySelector(".navbar-expand-lg");
    const navbar2ndLarge = document.querySelector("#second-large-navbar");
    const codeNavbar = document.getElementById("codeNavbar");
    const nav2text = document.getElementById("nav-bar2-text");
    const nav2text2 = document.getElementById("nav-bar2-text2");
    const nav2text3 = document.getElementById("nav-bar2-text3");
    const nav2text4 = document.getElementById("nav-bar2-text4");
    const nav2text5 = document.getElementById("nav-bar2-text5");
    const nav2text6 = document.getElementById("nav-bar2-text6");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateNavbarBackground() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollPosition > windowHeight * 0.5) {
            if (navbar) navbar.style.backgroundColor = "#b1040e";
            if (navbar2) navbar2.style.backgroundColor = "#b1040e";
            if (navbar2ndLarge) navbar2ndLarge.style.backgroundColor = "#b1040e";
            if (codeNavbar) codeNavbar.style.backgroundColor = "#b1040e";
            
            // Update text colors
            if (nav2text) nav2text.style.color = "#fff";
            if (nav2text2) nav2text2.style.color = "#fff";
            if (nav2text3) nav2text3.style.color = "#fff";
            if (nav2text4) nav2text4.style.color = "#fff";
            if (nav2text5) nav2text5.style.color = "#fff";
            if (nav2text6) nav2text6.style.color = "#fff";
            if (nav2text7) nav2text7.style.color = "#fff";
        } else {
            if (navbar) navbar.style.backgroundColor = "transparent";
            if (navbar2) navbar2.style.backgroundColor = "transparent";
            if (navbar2ndLarge) navbar2ndLarge.style.backgroundColor = "transparent";
            if (codeNavbar) codeNavbar.style.backgroundColor = "transparent";
            
            // Reset text colors
            if (nav2text) nav2text.style.color = "#fff";
            if (nav2text2) nav2text2.style.color = "#fff";
            if (nav2text3) nav2text3.style.color = "#fff";
            if (nav2text4) nav2text4.style.color = "#fff";
            if (nav2text5) nav2text5.style.color = "#fff";
            if (nav2text6) nav2text6.style.color = "#fff";
            if (nav2text7) nav2text7.style.color = "#fff";
        }
    }

    // Initial call
    updateNavbarBackground();

    // Add scroll event listener
    window.addEventListener("scroll", updateNavbarBackground);

    // Optimized dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        const dropdownToggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
        
        if (dropdownToggle && dropdownMenu) {
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdownMenu.classList.toggle('show');
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});

// Optimized scroll to top functionality
function scrollFunction() {
    const myBtn = document.getElementById("myBtn");
    if (!myBtn) return;
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Add scroll event listener for scroll to top button
window.addEventListener("scroll", scrollFunction);

// Initialize AOS (Animate On Scroll) if available
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

// Optimized image lazy loading
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Optimized mobile menu functionality
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuToggle = document.querySelector('.navbar-toggler');
    const mobileMenu = document.querySelector('.navbar-collapse');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('show');
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('show');
            });
        });
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollFunction = debounce(scrollFunction, 10);
window.addEventListener("scroll", debouncedScrollFunction);