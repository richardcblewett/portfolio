window.addEventListener("load",loadFunctions);
window.addEventListener("resize",addCtText);
function loadFunctions () {
    addCtText();
}
function addCtText () {
    let ctText = "Contact Me";
    let d = document.getElementById("contact-text") ;
    let fw = "normal";
    let fs = "1.1em";
    const pageWidth = window.innerWidth ;
    if (pageWidth <= 700) {                     //value is stored in the css media control
        ctText = ctText+":";
        fw = "bold" ;
        fs = "1.25em";
    }
    d.style.fontWeight = fw;
    d.style.fontSize = fs;  
    d.innerText = ctText;
}