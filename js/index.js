/* DARK MODE */

document.querySelector("header img").addEventListener("click", darkMode);

function darkMode(){
    console.log("Dark Mode")
    
    document.querySelector("header").classList.toggle("fondNoir")

    document.querySelectorAll("header a").forEach(e=>{
        e.classList.toggle("aNoir")
    })

    document.getElementById("laPage").classList.toggle("laPage")

    document.querySelector("main").classList.toggle("fondNoir")

    if (document.querySelector("header>img").src="img/lune.svg")
    {
        document.querySelector("header>img").src="img/soleil.svg"
    }
    else
    {
        document.querySelector("header>img").src="img/lune.svg"
    }   
}