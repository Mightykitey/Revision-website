document.getElementById("changeFontLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior (no page reload)

    // Change font of the entire body or specific element (like the paragraph)
    document.body.classList.toggle("font-changed");
});
