// ===============================
// LISHTO Homepage Script
// ===============================

// ---------- Currency ----------

async function loadCurrency() {

try {

const response = await fetch("https://open.er-api.com/v6/latest/INR");

const data = await response.json();

const usd = data.rates.USD;
const cny = data.rates.CNY;

document.getElementById("usdRate").innerHTML =
"$ " + usd.toFixed(4);

document.getElementById("cnyRate").innerHTML =
"¥ " + cny.toFixed(4);

document.getElementById("dashboardUsd").innerHTML =
"$ " + usd.toFixed(4);

document.getElementById("dashboardCny").innerHTML =
"¥ " + cny.toFixed(4);

const now = new Date();

document.getElementById("updatedTime").innerHTML =
now.toLocaleTimeString();

}

catch(error){

console.log(error);

}

}

loadCurrency();

setInterval(loadCurrency,600000);


// ===============================
// INDIA & CHINA CLOCK
// ===============================

function updateClocks(){

const india=new Date();

const china=new Date(
india.toLocaleString("en-US",{timeZone:"Asia/Shanghai"})
);

document.getElementById("indiaClock").innerHTML=
india.toLocaleTimeString();

document.getElementById("chinaClock").innerHTML=
china.toLocaleTimeString();

}

updateClocks();

setInterval(updateClocks,1000);


// ===============================
// Counter Animation
// ===============================

function counter(id,target){

let count=0;

let speed=Math.ceil(target/50);

let obj=document.getElementById(id);

let timer=setInterval(()=>{

count+=speed;

if(count>=target){

count=target;

clearInterval(timer);

}

obj.innerHTML=count+"+";

},30);

}

counter("count1",13);

counter("count2",200);


// ===============================
// China Business News
// (Replace with API later)
// ===============================

const news=[

{

title:"China's manufacturing activity shows steady recovery",

desc:"Factory output and industrial production continue improving as export demand stabilizes.",

link:"https://english.news.cn"

},

{

title:"Shenzhen expands AI and technology investment",

desc:"Technology companies receive additional support to accelerate innovation and manufacturing.",

link:"https://english.news.cn"

},

{

title:"Chinese exporters increase focus on India market",

desc:"Electronics and consumer goods manufacturers strengthen partnerships with Indian buyers.",

link:"https://english.news.cn"

}

];

const container=document.getElementById("newsContainer");

container.innerHTML="";

news.forEach(item=>{

container.innerHTML+=`

<div class="news-card">

<h3>${item.title}</h3>

<p>${item.desc}</p>

<a href="${item.link}" target="_blank">

Read More →

</a>

</div>

`;

});
