/*==================================================

LISHTO PREMIUM SCRIPT.JS
PART 1

==================================================*/

// =======================
// Currency
// =======================

async function loadCurrency(){

try{

const res=await fetch("https://open.er-api.com/v6/latest/INR");

const data=await res.json();

const usd=data.rates.USD;
const cny=data.rates.CNY;

document.getElementById("usdRate").innerHTML="$ "+usd.toFixed(4);
document.getElementById("cnyRate").innerHTML="¥ "+cny.toFixed(4);

document.getElementById("dashboardUsd").innerHTML="$ "+usd.toFixed(4);
document.getElementById("dashboardCny").innerHTML="¥ "+cny.toFixed(4);

document.getElementById("updatedTime").innerHTML=
new Date().toLocaleTimeString();

}catch(e){

console.log(e);

}

}

loadCurrency();

setInterval(loadCurrency,600000);


// =======================
// India / China Clock
// =======================

function updateClock(){

const india=new Date();

const china=new Date(

india.toLocaleString("en-US",{

timeZone:"Asia/Shanghai"

})

);

document.getElementById("indiaClock").innerHTML=
india.toLocaleTimeString();

document.getElementById("chinaClock").innerHTML=
china.toLocaleTimeString();

}

updateClock();

setInterval(updateClock,1000);


// =======================
// Counter
// =======================

function counter(id,target){

const el=document.getElementById(id);

if(!el) return;

let current=0;

const step=Math.ceil(target/70);

const timer=setInterval(()=>{

current+=step;

if(current>=target){

current=target;

clearInterval(timer);

}

el.innerHTML=current+"+";

},25);

}
/*==========================
Reveal Animation
==========================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

});

document.querySelectorAll("section,.stat-card,.news-card,.ship-card,.category-card,.network-card,.timeline-card,.city-card,.gallery-card,.value-card")

.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


/*==========================
Navbar Shadow
==========================*/

window.addEventListener("scroll",()=>{

const nav=document.querySelector("header");

if(window.scrollY>40){

nav.style.background="rgba(8,15,25,.95)";

nav.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";

}else{

nav.style.background="rgba(8,15,25,.82)";

nav.style.boxShadow="none";

}

});


/*==========================
Mouse Glow Effect
==========================*/

document.addEventListener("mousemove",(e)=>{

document.documentElement.style.setProperty(

"--mouse-x",

e.clientX+"px"

);

document.documentElement.style.setProperty(

"--mouse-y",

e.clientY+"px"

);

});


/*==========================
Floating Cards
==========================*/

document.querySelectorAll(".stat-card,.news-card,.ship-card,.category-card,.dashboard")

.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.transform=

`perspective(900px)
rotateX(${-(y-rect.height/2)/18}deg)
rotateY(${(x-rect.width/2)/18}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});


/*==========================
Smooth Fade
==========================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/*==================================================

LISHTO PREMIUM SCRIPT.JS
PART 2 (FINAL)

==================================================*/

/*==========================
Hidden Animation CSS Class
==========================*/

const style=document.createElement("style");

style.innerHTML=`

.hidden{

opacity:0;

transform:translateY(70px);

transition:1s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

.loaded{

animation:pageFade .8s ease;

}

@keyframes pageFade{

from{

opacity:0;

}

to{

opacity:1;

}

}

`;

document.head.appendChild(style);


/*==========================
Hero Typing Effect
==========================*/

const heroTitle=document.querySelector(".hero h1");

if(heroTitle){

const original=heroTitle.innerHTML;

heroTitle.innerHTML="";

let i=0;

function type(){

if(i<original.length){

heroTitle.innerHTML+=original.charAt(i);

i++;

setTimeout(type,18);

}

}

setTimeout(type,500);

}


/*==========================
Magnetic Buttons
==========================*/

document.querySelectorAll(".btn-primary,.btn-secondary,.nav-btn")

.forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

btn.style.transform=

`translate(${x*0.12}px,${y*0.12}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0)";

});

});


/*==========================
Parallax Background
==========================*/

window.addEventListener("scroll",()=>{

const scroll=window.pageYOffset;

document.querySelectorAll(".bg-glow").forEach((g,index)=>{

const speed=(index+1)*0.18;

g.style.transform=

`translateY(${scroll*speed}px)`;

});

});


/*==========================
Floating Animation
==========================*/

document.querySelectorAll(".dashboard-card,.stat-card")

.forEach((card,index)=>{

setInterval(()=>{

card.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3500+index*250,

iterations:1

});

},3500+index*250);

});


/*==========================
Navigation Active
==========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

const href=link.getAttribute("href");

if(current && href && href.includes(current)){

link.classList.add("active");

}

});

});


/*==========================
Random Shine Effect
==========================*/

setInterval(()=>{

document.querySelectorAll(".stat-card,.news-card,.category-card")

.forEach(card=>{

card.animate([

{

filter:"brightness(1)"

},

{

filter:"brightness(1.08)"

},

{

filter:"brightness(1)"

}

],{

duration:1200

});

});

},5000);


/*==========================
Dashboard Flash
==========================*/

setInterval(()=>{

const pulse=document.querySelector(".pulse");

if(pulse){

pulse.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.4)"

},

{

transform:"scale(1)"

}

],{

duration:1000

});

}

},2500);


/*==========================
Smooth Scroll
==========================*/

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*==========================
Console Signature
==========================*/

console.clear();

console.log("%cLISHTO","font-size:34px;font-weight:bold;color:#d8b15a;");
console.log("%cPremium China Sourcing Platform","font-size:16px;color:#ffffff;");
console.log("%cDesigned with ❤️","font-size:14px;color:#ff5555;");


/*==========================
Initialization
==========================*/

window.addEventListener("load",()=>{

updateClock();

loadCurrency();

console.log("LISHTO Loaded Successfully");

});

