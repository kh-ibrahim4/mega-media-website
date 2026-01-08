javascript

document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {
       
        window.addEventListener("scroll", function () {
            if (document.documentElement.scrollTop > 200) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        });

        scrollBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

   
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all required fields.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (successMessage) {
                successMessage.classList.add("show");
                
                
                setTimeout(function() {
                    successMessage.classList.remove("show");
                }, 5000);
            }

           
            contactForm.reset();

         
            console.log("Form submitted:", {
                name: name,
                email: email,
                message: message
            });
        });
    }

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (href !== "#") {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
});
