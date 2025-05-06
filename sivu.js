function toggleInfo(id) {
    var infoDiv = document.getElementById(id);
    
    // Toggle the display property (hide or show the information)
    if (infoDiv.style.display === "none" || infoDiv.style.display === "") {
        infoDiv.style.display = "block";
    } else {
        infoDiv.style.display = "none";
    }
}
