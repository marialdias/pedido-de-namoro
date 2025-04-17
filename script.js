<<<<<<< HEAD
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
=======
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
>>>>>>> fe0a58fa571e0f9d2d8d8f4317c326550af84492
