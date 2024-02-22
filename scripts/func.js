let div_Content = document.getElementById("maincontent");

let div_profilePage = document.getElementById("profile-page");
let div_preInstall = document.getElementById("preInstall");
let div_stream_tools = document.getElementById("stream_tools");
let div_wvcd = document.getElementById("windows_vista_classic_dark_for_retrobar");
let div_py_repo_downloader = document.getElementById("py_repo_downloader");
let div_vrievid = document.getElementById("vrievid");
let div_cat = document.getElementById("cat");

// Hide all elements initially
function hideAll() {
    div_profilePage.style.display = "none";
    div_preInstall.style.display = "none";
    div_stream_tools.style.display = "none";
    div_wvcd.style.display = "none";
    div_py_repo_downloader.style.display = "none";
    div_vrievid.style.display = "none";
    div_cat.style.display = "none";
}

// Call hideAll to hide all elements initially
hideAll();

// Toggle the display of the elements based on the provided index
function show(toShow) {
    hideAll(); // Hide all elements before showing the selected one
    switch (toShow) {
        case 1:
            if (div_profilePage.style.display == "none") {
                div_profilePage.style.display = "block";
            }
            break;
        case 2:
            div_preInstall.style.display = "block";
            break;
        case 3:
            div_stream_tools.style.display = "block";
            break;
        case 4:
            div_wvcd.style.display = "block";
            break;
        case 5:
            div_py_repo_downloader.style.display = "block";
            break;
        case 6:
            div_vrievid.style.display = "block";
            break;
        case 7:
            div_cat.style.display = "block";
            break;
        default:
            console.log("Invalid option");
    }
}

function redirect(url) {
    div_Content.classList.add("animate__fadeOut");

    setTimeout(function () {
        location.href = url;
    }, 550); // How long you want the delay to be, measured in milliseconds.
}
