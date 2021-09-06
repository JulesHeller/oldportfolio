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

    document.querySelectorAll(".plein").forEach(e=>{
        e.classList.toggle("darkPlein")
    })
    document.querySelectorAll(".plein100").forEach(e=>{
        e.classList.toggle("darkPlein100")
    })
    document.querySelectorAll(".vide").forEach(e=>{
        e.classList.toggle("darkVide")
    })
    
    document.querySelectorAll("h4").forEach(e=>{
        e.classList.toggle("darkh4")
    })

    document.querySelector(".programmation").classList.toggle("whiteOutline")
    document.querySelector(".suiteAdobe").classList.toggle("whiteOutline")
    document.querySelector(".packOffice").classList.toggle("whiteOutline")
    document.querySelector(".langues").classList.toggle("whiteOutline")

    document.querySelectorAll(".competences img").forEach(e=>{
        e.classList.toggle("logoBlanc")
    })

    // Condition Local Storage

    if (localStorage.getItem("dark_mode") == "true")
    {
        localStorage.removeItem("dark_mode")
    }
    else
    {
        localStorage.setItem("dark_mode", "true")
    }
}

// Forcer le dark mode s'il a déjà été activé

function forceDarkMode(){
    document.querySelector("header").classList.toggle("fondNoir")
    
    document.querySelectorAll("header a").forEach(e=>{
        e.classList.toggle("aNoir")
    })
    
    document.getElementById("laPage").classList.toggle("laPage")
    
    document.querySelector("main").classList.toggle("fondNoir")
    
    document.querySelector("header img").classList.toggle("soleil")
    
    document.querySelectorAll(".plein").forEach(e=>{
        e.classList.toggle("darkPlein")
    })
    document.querySelectorAll(".vide").forEach(e=>{
        e.classList.toggle("darkVide")
    })
    
    document.querySelectorAll("h4").forEach(e=>{
        e.classList.toggle("darkh4")
    })
    
    document.querySelector(".programmation").classList.toggle("whiteOutline")
    document.querySelector(".suiteAdobe").classList.toggle("whiteOutline")
    document.querySelector(".packOffice").classList.toggle("whiteOutline")
    document.querySelector(".langues").classList.toggle("whiteOutline")
    
    document.querySelectorAll(".competences img").forEach(e=>{
        e.classList.toggle("logoBlanc")
    })
    
    localStorage.setItem("dark_mode", "true")
}

if (localStorage.getItem("dark_mode") == "true")
{
    forceDarkMode();
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