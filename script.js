/* =========================================
   THE MUSEUM OF US
   JavaScript
   ========================================= */

   document.addEventListener("DOMContentLoaded", () => {

    /* ---------- ELEMENTS ---------- */
  
    const loader = document.getElementById("loader");
    const museum = document.getElementById("museum");
    const enterButton = document.getElementById("enterMuseum");
  
    /* ---------- INITIAL STATE ---------- */
  
    document.body.classList.add("museum-locked");
  
    /* ---------- LOADING SCREEN ---------- */
  
    setTimeout(() => {
      if (loader) {
        loader.classList.add("loaded");
  
        setTimeout(() => {
          loader.style.display = "none";
        }, 800);
      }
    }, 1800);
  
  
    /* ---------- ENTER THE MUSEUM ---------- */
  
    if (enterButton) {
      enterButton.addEventListener("click", () => {
  
        if (museum) {
          museum.classList.add("visible");
        }
  
        document.body.classList.remove("museum-locked");
  
        // Smoothly move into the museum
        setTimeout(() => {
          const ticket = document.querySelector(".ticket-section");
  
          if (ticket) {
            ticket.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }, 300);
  
        // Small celebration
        createHearts(12);
      });
    }
  
  
    /* ---------- SCROLL REVEAL ---------- */
  
    const revealElements = document.querySelectorAll(".reveal");
  
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15
      }
    );
  
    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  
  
    /* ---------- EXHIBIT STAMP ---------- */
  
    const exhibits = document.querySelectorAll(".exhibit");
  
    const exhibitObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
  
          if (entry.isIntersecting) {
  
            const stamp = entry.target.querySelector(".completed-stamp");
  
            if (stamp) {
              stamp.classList.add("show");
            }
  
            entry.target.classList.add("visited");
          }
  
        });
      },
      {
        threshold: 0.35
      }
    );
  
    exhibits.forEach((exhibit) => {
      exhibitObserver.observe(exhibit);
    });
  
  
    /* ---------- IMAGE FADE-IN ---------- */
  
    const images = document.querySelectorAll("img");
  
    images.forEach((image) => {
  
      image.addEventListener("load", () => {
        image.classList.add("image-loaded");
      });
  
    });
  
  
    /* ---------- FLOATING HEARTS ---------- */
  
    function createHearts(amount = 8) {
  
      for (let i = 0; i < amount; i++) {
  
        const heart = document.createElement("span");
  
        heart.innerHTML = "♥";
  
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = (12 + Math.random() * 18) + "px";
        heart.style.color = "#d4af37";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.opacity = "0";
  
        document.body.appendChild(heart);
  
        const duration = 2500 + Math.random() * 2000;
  
        heart.animate(
          [
            {
              transform: "translateY(0) scale(0.6)",
              opacity: 0
            },
            {
              transform: "translateY(-30vh) scale(1)",
              opacity: 1
            },
            {
              transform: "translateY(-100vh) scale(0.8)",
              opacity: 0
            }
          ],
          {
            duration: duration,
            easing: "ease-out"
          }
        );
  
        setTimeout(() => {
          heart.remove();
        }, duration);
      }
    }
  
  
    /* ---------- CLICK ANYWHERE FOR TINY SPARK ---------- */
  
    document.addEventListener("click", (event) => {
  
      if (
        event.target.closest("button") ||
        event.target.closest("a")
      ) {
        return;
      }
  
      const sparkle = document.createElement("span");
  
      sparkle.innerHTML = "✦";
  
      sparkle.style.position = "fixed";
      sparkle.style.left = event.clientX + "px";
      sparkle.style.top = event.clientY + "px";
      sparkle.style.color = "#d4af37";
      sparkle.style.fontSize = "14px";
      sparkle.style.pointerEvents = "none";
      sparkle.style.zIndex = "9999";
  
      document.body.appendChild(sparkle);
  
      sparkle.animate(
        [
          {
            transform: "translate(-50%, -50%) scale(0.5)",
            opacity: 1
          },
          {
            transform: "translate(-50%, -80px) scale(1.4)",
            opacity: 0
          }
        ],
        {
          duration: 700,
          easing: "ease-out"
        }
      );
  
      setTimeout(() => {
        sparkle.remove();
      }, 700);
    });
  
  
    /* ---------- SMOOTH INTERNAL LINKS ---------- */
  
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
  
      link.addEventListener("click", (event) => {
  
        const targetId = link.getAttribute("href");
  
        if (targetId === "#") return;
  
        const target = document.querySelector(targetId);
  
        if (target) {
          event.preventDefault();
  
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
  
    });
  
  
    /* ---------- CONSOLE SIGNATURE ---------- */
  
    console.log(
      "%c THE MUSEUM OF US ❤️ ",
      "font-size:20px;font-weight:bold;color:#d4af37;"
    );
  
    console.log(
      "%c Curated with love, by Babdi.",
      "font-size:14px;color:#888;"
    );
  
  });