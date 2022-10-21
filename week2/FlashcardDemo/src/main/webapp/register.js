let backButton = document.getElementById("back-button")

backButton.addEventListener('click', (event) => {
event.preventDefault();
window.location.replace("index.html")
})