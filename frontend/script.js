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

    // Share Button Logic
    const shareBtns = document.querySelectorAll(".share-trigger");

    shareBtns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const shareData = {
                title: 'Sanjai | Full Stack Developer',
                text: 'Check out this portfolio!',
                url: window.location.href
            };

            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (err) {
                    console.error('Error sharing:', err);
                }
            } else {
                openShareModal();
            }
        });
    });

    const openShareModal = () => {
        let modal = document.querySelector(".share-modal");
        if (!modal) {
            modal = document.createElement("div");
            modal.className = "share-modal";
            modal.innerHTML = `
                <div class="share-modal-content">
                    <h3>Share Portfolio</h3>
                    <div class="share-buttons">
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" target="_blank" class="share-option">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://wa.me/?text=${encodeURIComponent('Check out this portfolio: ' + window.location.href)}" target="_blank" class="share-option">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                           <span>WhatsApp</span>
                        </a>
                        <button class="share-option" id="copy-link-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                           <span>Copy Link</span>
                        </button>
                    </div>
                    <button class="share-modal-close">Close</button>
                </div>
            `;
            document.body.appendChild(modal);

            const closeBtn = modal.querySelector(".share-modal-close");
            closeBtn.addEventListener("click", () => {
                modal.classList.remove("open");
            });

            const copyBtn = modal.querySelector("#copy-link-btn");
            copyBtn.addEventListener("click", () => {
                navigator.clipboard.writeText(window.location.href);
                copyBtn.querySelector("span").textContent = "Copied!";
                setTimeout(() => copyBtn.querySelector("span").textContent = "Copy Link", 2000);
            });

            modal.addEventListener("click", (e) => {
                if (e.target === modal) modal.classList.remove("open");
            });
        }

        // Force reflow
        void modal.offsetWidth;
        modal.classList.add("open");
    };
});

