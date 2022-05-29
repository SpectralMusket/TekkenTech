console.log("this script is running");
const mainWrapper = document.getElementsByClassName("mainWrapper")[0];
const toc = document.getElementsByClassName("TOC")[0];
const mainTitle = document.getElementById("mainTitle");

function move(source, destination, elsePrepend) {
    
    const screenWidth = window.innerWidth;
    console.log(`move is called, screenWidth is ${screenWidth}`);
    console.log(`${source} & ${destination}`);
    if (screenWidth <= 768) {
        destination.after(source);
        console.log("toc is moved");
    } else {
        elsePrepend.prepend(toc);
        console.log("prepended to wrapper");
    }
}

window.addEventListener("resize", () => move(toc, mainTitle, mainWrapper));
// document.addEventListener("scroll", () => console.log("scroll"));