let navbar=document.querySelector(".header .navbar");const country=document.querySelector(".country").innerHTML;const contentCountry=document.querySelector(".contentCountry").innerHTML;const packages=document.querySelector(".packages").innerHTML;const rewaiting=setTimeout(loading,10000);const body=document.body;const btntoggle=document.querySelector(".btn-toggle");var Theme=localStorage.getItem("Theme");var Loading=localStorage.getItem("loading");window.onload=()=>{if(Theme==="night"){body.classList="night";localStorage.setItem("Theme","night");localStorage.setItem("theme","night");btntoggle.classList.add("fa-sun");btntoggle.classList.remove("fa-moon")}else{body.classList="light";localStorage.setItem("Theme","light");localStorage.setItem("theme","light");btntoggle.classList.remove("fa-sun");btntoggle.classList.add("fa-moon")}
if(Loading==="none"){document.getElementById("loading").classList.remove("active");document.getElementById("homepage").classList.add("active")}else{localStorage.setItem("loading","none");const waiting=setTimeout(showPage,1500);function showPage(){document.getElementById("loading").classList.remove("active");document.getElementById("homepage").classList.add("active")}
function myStopFunction(){clearTimeout(waiting)}}
console.clear()};window.onscroll=()=>{navbar.classList.remove("active")};document.querySelectorAll(".about .video-container .controls .control-btn").forEach((btn)=>{btn.onclick=()=>{let src=btn.getAttribute("data-src");document.querySelector(".about .video-container .video").src=src}});btntoggle.addEventListener("click",function(){if(body.getAttribute("class")=="light"){body.classList="night";localStorage.setItem("Theme","night");localStorage.setItem("theme","night");btntoggle.classList.add("fa-sun");btntoggle.classList.remove("fa-moon")}else{body.classList="light";localStorage.setItem("Theme","light");localStorage.setItem("theme","light");btntoggle.classList.remove("fa-sun");btntoggle.classList.add("fa-moon")}});localStorage.setItem("country",country);localStorage.setItem("content",contentCountry);localStorage.setItem("packages",packages);function onSubmit(){alert("Chuyến đi đã được đăng ký thành công !");localStorage.setItem("countrySubmit",country);return!1}
function loading(){localStorage.removeItem("loading")}
document.querySelector("#menu-btn").onclick=()=>{navbar.classList.toggle("active")}