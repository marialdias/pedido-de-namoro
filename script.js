document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("yesButton").addEventListener("click", () => {
        alert("Sabia que você diria sim! ❤️");
    });
    
    const noButton = document.getElementById("noButton");
    if (!noButton) return;
    
    noButton.style.position = "absolute";
    noButton.addEventListener("mouseover", () => {
        noButton.style.left = `${Math.random() * (window.innerWidth - noButton.offsetWidth)}px`;
        noButton.style.top = `${Math.random() * (window.innerHeight - noButton.offsetHeight)}px`;
    });

});
