function toggleMenu() {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
}
function changeLanguage() {
    const selectedLanguage = document.getElementById('language').value;
    alert(`Language changed to: ${selectedLanguage}`);
    // Here, you can add your logic to change the language of your content
}