function toggleMenu() {
  const navbarLinks = document.getElementById("navbarLinks");
  navbarLinks.classList.toggle("active");
}
function changeLanguage() {
  const selectedLanguage = document.getElementById("language").value;
  alert(`Language changed to: ${selectedLanguage}`);
  // Here, you can add your logic to change the language of your content
}

let slideIndex = 0;
showSlides(slideIndex);

// Function to display the current slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel_slide");
  let dots = document.getElementsByClassName("dot");

  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides and deactivate all dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the active slide and highlight the active dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

// Function to set the current slide when a dot is clicked
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Optional: Automatic slide transition
setInterval(function () {
  showSlides(++slideIndex);
}, 5000);
