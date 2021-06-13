/* PASSER LA SOURIS SUR LES LIENS*/

document.querySelectorAll("header a").forEach(e=>{
    e.addEventListener("mouseover", linkHover);
});

function linkHover(){
    this.classList.add("linkHover");
}

/* ENLEVER LA SOURIS DES LIENS */

document.querySelectorAll("header a").forEach(e=>{
    e.addEventListener("mouseleave", linkLeave);
});

function linkLeave(){
    this.classList.remove("linkHover");
}