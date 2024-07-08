let e=document.getElementById("servicesModal"),n=document.getElementsByClassName("close")[0];// When the user clicks on a service item, open the modal 
document.querySelectorAll(".services-list-item").forEach(function(n){n.addEventListener("click",function(){e.style.display="flex"})}),// When the user clicks on <span> (x), close the modal
n.onclick=function(){e.style.display="none"},// When the user clicks anywhere outside of the modal, close it
window.onclick=function(n){n.target==e&&(e.style.display="none")};