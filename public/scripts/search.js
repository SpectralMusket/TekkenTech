console.log("this is working")
const params = new URLSearchParams(window.location.search)
let val = params.get('search');
console.log(val);


const listOfPages = [{"name": "Alisa"}, {"name":"Jin"}];
val = val.toUpperCase();
for (page of listOfPages) {
    if (page.name.toUpperCase().includes(val)) {
        const pNode = document.createElement("p");
        const textNode = document.createTextNode(page.name);
        pNode.appendChild(textNode);
        const resultElement = document.getElementById("searchResults");
        resultElement.appendChild(pNode);
        console.log(page.name);
    }
}
