document.addEventListener("DOMContentLoaded", function () {

    console.log("Remote Rise website is ready!");

    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Application form
    const form = document.querySelector(".application-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            alert(
                "Thank you for applying to Remote Rise! " +
                "Your application has been received."
            );

            form.reset();
        });
    }

});
