const sr=ScrollReveal({
    distance:'80px',
    duration:2500,
    delay:400,
    reset:true

});

sr.reveal('.home-bar',{delay:200, origin:'top'})
sr.reveal('.work',{delay:200, origin:'top'})

let openel=document.querySelector(".top-part");

function openbar(){
    openel.style.right=0;
}
function closebar(){
    openel.style.right="-200px" 
}


