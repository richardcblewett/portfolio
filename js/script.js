window.addEventListener("resize",addCtText);
window.addEventListener("load",addCtText);
function addCtText () {
    height();
    let ctText = "Contact Me";
    let d = document.getElementById("contact-text") ;
    let fw = "normal";
    const pageWidth = window.innerWidth ;
    if (pageWidth <= 600) {
        ctText = ctText+":";
        fw = "bold" ;
    }
    d.style.fontWeight = fw;
    d.innerText = ctText;
    document.getElementById("contact-text") = d ;
}
