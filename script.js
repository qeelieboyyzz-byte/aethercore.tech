/* ==========================================
   AetherCore Technologies
   script.js
========================================== */

// Navbar shadow on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(8,17,31,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        header.style.background = "rgba(10,15,30,.7)";
        header.style.boxShadow = "none";
    }

});

// ===============================
// Reveal Elements on Scroll
// ===============================

const revealElements = document.querySelectorAll(
".card,.project,.member,.stats div"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{threshold:0.15});

revealElements.forEach(el=>{

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .7s ease";

    observer.observe(el);

});

// ===============================
// Animated Counters
// ===============================

const counters = document.querySelectorAll(".stats h3");

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter = entry.target;

const finalText = counter.innerText;

const finalNumber = parseInt(finalText);

const suffix = finalText.replace(/[0-9]/g,'');

let count = 0;

const speed = Math.max(15, finalNumber / 100);

const update = () => {

if(count < finalNumber){

count += speed;

counter.innerText =
Math.floor(count) + suffix;

requestAnimationFrame(update);

}else{

counter.innerText = finalText;

}

};

update();

counterObserver.unobserve(counter);

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ===============================
// Contact Form Demo
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

const button = form.querySelector("button");

button.innerHTML = "Sending...";

button.disabled = true;

setTimeout(()=>{

alert(
"Thanks for contacting AetherCore! This is a demo website. Connect this form to a backend service to receive messages."
);

button.innerHTML = "Send Message";

button.disabled = false;

form.reset();

},1200);

});

// ===============================
// Active Navigation Highlight
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const top = section.offsetTop - 120;

if(pageYOffset >= top){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});

// ===============================
// Hero Fade Effect
// ===============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const value = window.scrollY;

hero.style.opacity = Math.max(1 - value / 700, 0);

});

// ===============================
// Console Welcome
// ===============================

console.log(`
======================================

   AetherCore Technologies

 Building Intelligent Digital Solutions

 Website Version: 1.0

======================================
`);
