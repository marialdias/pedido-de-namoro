function responderSim() {
    alert("Sabia que você diria sim! ❤️"); 
}


document.addEventListener("DOMContentLoaded", function() {
    
    const noButton = document.getElementById("noButton");

    
    if (!noButton) return;

   
    noButton.style.position = "absolute";

   
    noButton.addEventListener("mouseover", function() {
        
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

        
        noButton.style.left = ${x}px;
        noButton.style.top = ${y}px;
    });
});