// var regex= new RegExp('foo');
// var regexG = new RegExp('foo', 'g');

// var myString = "foo bar foo";

// console.log(myString.match(regex));
// console.log(myString.match(regex));
// console.log(myString.match(regexG));

// stores link "cards" or "elements"
let links = [];
console.log("hello");

const userCardTemplate = document.querySelector("[search-link-template]");
const userCardContainer = document.querySelector("[searchDropdown]");
const searchInput = document.querySelector("[searchBox]");

console.log(searchInput);
searchInput.addEventListener("input", e => {
  const value = e.target.value;
  links.forEach(leenk => {
    const isVisible =
      leenk.name.toLowerCase().includes(value) ||
      leenk.email.toLowerCase().includes(value);
    leenk.element.classList.toggle("hide", !isVisible);
  })
})

const test = document.querySelector("article");
const testClone = test.cloneNode(true).children[0];
test.append(testClone);

const test2 = document.querySelector("p");
// userCardContainer.append(testClone);

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    links = data.map(link => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const cardHeader = card.querySelector(".data-header");
      const cardLink = card.querySelector(".data-link");
      cardHeader.textContent = link.name;
      cardLink.textContent = link.email;
      userCardContainer.append(card);
      return { name: link.name, email: link.email, element: card }

    })
  })

// let articleLinks = JSON.parse("articles.json");

// let para = document.createElement("p");
// let alisaText = articleLinks.alisaQT.name;
// let node = document.createTextNode(alisaText);
// para.appendChild(node);

// let dropdown = document.getElementById("searchDropdown");

// dropdown.appendChild(para);
// dropdown.classList.toggle("visible");
