document.addEventListener("DOMContentLoaded", function () {
    fetch("../header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
            setTimeout(() => {
                Webflow.require('ix2').init();
                Webflow.require('navbar').ready();
            }, 100);
        });
    fetch("../footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);
});

setTimeout(() => {
    const currentPath = window.location.pathname;
    document.querySelectorAll(".nav-link-2.w-nav-link").forEach(link => {
        if (link.getAttribute("href").includes(currentPath)) {
            link.classList.add("w--current");
        }
    });
}, 2000);