let toggleBtn = document.querySelector(".toggle-menu");
let navList = document.querySelector(".heading ul");

toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
});


const toggleB = document.getElementById("modeToggle");
const body = document.body;

toggleB.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleB.classList.replace("fa-moon", "fa-sun");
    } else {
        toggleB.classList.replace("fa-sun", "fa-moon");
    }
});

let section=document.querySelectorAll("section");
let navlinks=document.querySelectorAll("ul li a");

window.onscroll=()=>{
    let current="";
    section.forEach((section)=>{
        const sectop=section.offsetTop;
        const secheight=section.clientHeight;
        if(scrollY >= sectop - secheight /3){
            current= section.getAttribute("id");
        }
    });
    navlinks.forEach((link)=>{
        link.classList.remove("active");
        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active");
        }
    });
};

const sec=document.querySelectorAll("section.hidden");
const observer= new IntersectionObserver((enteries, observer)=>{
    enteries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.3});

sec.forEach(section=> observer.observe(section));