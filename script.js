function openTab(evt, tabId) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("active-content");
    }

    // Remove 'active' class from all tab links
    var tabLinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the current tab, and add 'active' class to the link
    document.getElementById(tabId).style.display = "block";
    document.getElementById(tabId).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}

// Initially display the first tab
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tab1").style.display = "block";
});

