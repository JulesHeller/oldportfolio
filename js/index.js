/* DARK MODE */

document.querySelector("header img").addEventListener("click", darkMode);

function darkMode(){
    document.querySelector("header").classList.toggle("fondNoir")

    document.querySelectorAll("header a").forEach(e=>{
        e.classList.toggle("aNoir")
    })

    document.getElementById("laPage").classList.toggle("laPage")

    document.querySelector("main").classList.toggle("fondNoir")

    document.querySelector("header img").classList.toggle("soleil")
}

/* SCROLL FORCE */

var rootElement = document.documentElement

document.getElementById("scrollTop").addEventListener("click", scrollTop)

function scrollTop(){
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}