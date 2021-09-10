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

    document.querySelectorAll(".graph").forEach(e=>{
        e.classList.toggle("graphBlanc")
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

    document.querySelectorAll(".graph").forEach(e=>{
        e.classList.toggle("graphBlanc")
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