window.addEventListener("resize",addCtText);
window.addEventListener("load",addCtText);
function addCtText () {
    let ctText = "Contact Me";
    let d = document.getElementById("contact-text") ;
    let fw = "normal";
    let fs = "1.1em";
    const pageWidth = window.innerWidth ;
    if (pageWidth <= 600) {
        ctText = ctText+":";
        fw = "bold" ;
        fs = "1.25em";
    }
    d.style.fontWeight = fw;
    d.style.fontSize = fs;  
    d.innerText = ctText;
    document.getElementById("contact-text") = d ;
}


let m = document.getElementById('tagline');
alert(m);
m.onmouseover = addContent;
function addContent () {
    alert("working");
}
