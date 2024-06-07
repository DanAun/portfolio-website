/** Toggles the navbar display when in mobile view mode */
function toggleNavbar() {
    if (mobileQuery.matches) {
        document.getElementById("navbar").style.display === "none" ?
            document.getElementById("navbar").style.display = "inline" :
            document.getElementById("navbar").style.display = "none";
    }
    else {
        // Always display navbar when not in mobile view
        document.getElementById("navbar").style.display = "flex";
    }
}

// MediaQueryList object for mobile view
const mobileQuery = window.matchMedia("(max-width: 992px)");

toggleNavbar();

// Event listener for when the viewport changes to and from mobile view
mobileQuery.addEventListener("change", toggleNavbar);