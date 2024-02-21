let div_cat = document.getElementById("cat");

// Hide all elements initially
function hideAll() {
    div_cat.style.display = "none";
}

// Call hideAll to hide all elements initially
hideAll();

// Toggle the display of the elements based on the provided index
function show(toShow) {
    hideAll(); // Hide all elements before showing the selected one
    switch (toShow) {
        case 4:
            if (div_cat.style.display == "none") {
                div_cat.style.display = "block";
            }
            else {
                div_cat.style.display = "none";
            }
            break;
        default:
            console.log("Invalid option");
    }
}

function redirect(url) {
    div_Content.classList.add("animate__fadeOut");

    setTimeout(function () {
        location.href = url;
    }, 500); // How long you want the delay to be, measured in milliseconds.
}