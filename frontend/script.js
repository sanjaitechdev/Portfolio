document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const navToggle = document.querySelector(".nav-toggle");
    const navLinksContainer = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-link");
    const projectSelect = document.getElementById("project-nav-select");
    const animatedNodes = document.querySelectorAll("[data-animate]");
    const contactForm = document.querySelector(".contact-form");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const navToggleLines = navToggle ? navToggle.querySelectorAll(".nav-toggle-line") : [];

    const resetToggleLines = () => {
        navToggleLines.forEach((line) => {
            line.style.transform = "";
            line.style.opacity = "";
        });
    };

    const closeMobileNav = () => {
        navLinksContainer.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.classList.remove("active");
        resetToggleLines();
    };

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            const isOpen = navLinksContainer.classList.toggle("open");
            navToggle.classList.toggle("active", isOpen);
            navToggle.setAttribute("aria-expanded", String(isOpen));
            // Animate icon into X state
            navToggleLines.forEach((line, index) => {
                if (isOpen) {
                    line.style.transform =
                        index === 0
                            ? "translateY(7px) rotate(45deg)"
                            : index === 1
                                ? "scaleX(0)"
                                : "translateY(-7px) rotate(-45deg)";
                    line.style.opacity = index === 1 ? "0" : "1";
                } else {
                    line.style.transform = "";
                    line.style.opacity = "";
                }
            });
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                event.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
                }
            }
            closeMobileNav();
        });
    });

    if (projectSelect) {
        projectSelect.addEventListener("change", (event) => {
            const value = event.target.value;
            let targetId = null;

            if (value === "primary") {
                targetId = "#projects";
            }

            if (targetId) {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
                }
            }

            if (projectSelect.value !== "") {
                projectSelect.value = "";
            }

            closeMobileNav();
        });
    }

    document.addEventListener("click", (event) => {
        if (!navLinksContainer.contains(event.target) && !navToggle.contains(event.target)) {
            closeMobileNav();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            closeMobileNav();
        }
    });

    const updateHeaderState = () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    if (!prefersReducedMotion && "IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target;
                    if (entry.isIntersecting) {
                        const delay = target.dataset.animateDelay ? parseInt(target.dataset.animateDelay, 10) : 0;
                        setTimeout(() => target.classList.add("animate-in"), delay);
                        revealObserver.unobserve(target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        animatedNodes.forEach((node) => revealObserver.observe(node));
    } else {
        animatedNodes.forEach((node) => node.classList.add("animate-in"));
    }

    if ("IntersectionObserver" in window) {
        const sections = document.querySelectorAll("main > section[id]");
        const activeNavObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        navLinks.forEach((link) => {
                            const matches = link.getAttribute("href") === `#${id}`;
                            link.classList.toggle("active", matches);
                            link.setAttribute("aria-current", matches ? "page" : "false");
                        });
                    }
                });
            },
            {
                rootMargin: "-40% 0px -55% 0px",
                threshold: 0.2
            }
        );

        sections.forEach((section) => activeNavObserver.observe(section));
    }

    if (contactForm) {
        const showFieldError = (field, message = "") => {
            const container = field.closest(".form-field");
            const errorSpan = container?.querySelector(".field-error");
            if (errorSpan) {
                errorSpan.textContent = message;
            }
            field.setAttribute("aria-invalid", message ? "true" : "false");
        };

        const validators = {
            name: (value) => (value.trim().length < 2 ? "Please share your name." : ""),
            email: (value) => {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(value.trim()) ? "" : "Provide a valid email address.";
            },
            message: (value) => (value.trim().length < 10 ? "Add more details so I can help." : "")
        };

        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            let hasErrors = false;

            const submitBtn = contactForm.querySelector(".contact-submit");
            const originalBtnText = submitBtn.textContent;

            [...contactForm.elements].forEach((field) => {
                if (field.tagName !== "BUTTON" && field.name in validators) {
                    const error = validators[field.name](field.value || "");
                    showFieldError(field, error);
                    if (error) {
                        hasErrors = true;
                    }
                }
            });

            if (!hasErrors) {
                try {
                    // Update UI to loading state
                    submitBtn.disabled = true;
                    submitBtn.textContent = "Sending...";

                    const formData = {
                        name: contactForm.elements['name'].value,
                        email: contactForm.elements['email'].value,
                        message: contactForm.elements['message'].value
                    };

                    const response = await fetch('http://localhost:5001/api/submit-enquiry', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    });

                    const result = await response.json();

                    if (response.ok) {
                        contactForm.reset();
                        contactForm.querySelector(".form-success")?.remove();
                        contactForm.querySelector(".form-error")?.remove();

                        const feedback = document.createElement("p");
                        feedback.className = "form-success";
                        feedback.style.color = "#28a745";
                        feedback.style.marginTop = "10px";
                        feedback.textContent = result.message || "Message sent! I'll get back to you soon.";
                        contactForm.append(feedback);

                        setTimeout(() => feedback.remove(), 5000);
                    } else {
                        throw new Error(result.error || "Failed to send message.");
                    }
                } catch (error) {
                    console.error('Submission error:', error);
                    contactForm.querySelector(".form-error")?.remove();

                    const errorFeedback = document.createElement("p");
                    errorFeedback.className = "form-error";
                    errorFeedback.style.color = "#dc3545";
                    errorFeedback.style.marginTop = "10px";
                    errorFeedback.textContent = error.message || "An error occurred. Please try again later.";
                    contactForm.append(errorFeedback);
                } finally {
                    // Restore button state
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
            }
        });

        contactForm.addEventListener("input", (event) => {
            const field = event.target;
            if (field.name in validators) {
                const errorMessage = validators[field.name](field.value || "");
                showFieldError(field, errorMessage);
                contactForm.querySelector(".form-success")?.remove();
            }
        });
    }

    const yearNode = document.getElementById("current-year");
    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }

    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    }

    themeSwitcher.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'light') {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});
