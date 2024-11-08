//import "./styles.css";

// Menu data structure -> Update Menu
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

//Part 1 - Getting Started - Build a main content element 
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

const h1 = document.createElement("h1");
//const h1Text = document.createTextNode ("DOM Manipulation");

h1.innerText = "DOM Manipulation"
mainEl.appendChild(h1);

//mainEl.innerHTML = "<h1>DOM Manipulation<h1>";
mainEl.classList.add("flex-ctr");

// Part 2 - Create a Blank Menu Bar

//let topMenuEl = document.createElement("nav");
//topMenuEl.id = "top-menu";
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3 - Add Menu bars using menu date structure
menuLinks.forEach(link => {
  const a = document.createElement("a");
  a.href = link.href;
  a.textContent = link.text;
  topMenuEl.append(a);
});

const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
document.getElementById("sub-menu").style.position = "absolute";
document.getElementById("sub-menu").style.top = "0";

// Part 3 - Add Menu bars using menu date structure

// Select and Cache all of the <a> elements inside of topMenuEl
// in a variable name topMenuLinks
const topMenuLinks = topMenuEl.querySelectorAll("a");
//console.log(topMenuLinks);

// Now that we have references to each of these links, and a registered 
// event listener, we will want to add a toggled "active" state to each 
// menu item, showing whether or not it is currently selected:

// 1. The event listener should add the active class to the <a> element that 
// was clicked, unless it was already active, in which case it should remove it.
// 2. The event listener should remove the active class from each other <a> 
// element in topMenuLinks - whether the active class exists or not.

topMenuEl.addEventListener("click", menuClicked);

function menuClicked(evt) {
  if (evt.target.localName !== "a") {
    return;
  }
  //console.log(evt.target.textContent); 
  else {
    evt.preventDefault();

  }

}
document.addEventListener('DOMContentLoaded', () => {

  for (let i = 0; i < topMenuLinks.length; i++) {
    const clicked = topMenuLinks[i]
    console.log(clicked);

    clicked.addEventListener("click", function (evt) {
      if (!evt.target.matches('a')) return
      //e.target targets a tag
      console.log(evt.target);
      evt.target.classList.toggle('active') //Toggle
      topMenuLinks.forEach(link => {
        console.log(link.subLinks);
        if (link !== evt.target) {
          link.classList.remove('active')
        }
        const clickedLink = menuLinks.find((link) => link.text == evt.target.textContent)
        console.log(clickedLink.subLinks);
        if (evt.target.classList.contains('active') && evt.target.innerHTML !== "about") {
          subMenuEl.style.top = "100%"
          buildSubMenu(clickedLink.subLinks)
        } else {
          subMenuEl.style.top = "0%"
        }
      })
      function buildSubMenu(subLinks) {
        console.log(subLinks);
        // const subMenuEl = document.querySelectorAll("sub-menu")
        console.log(subMenuEl);
        subMenuEl.innerHTML = ""
        subLinks.forEach(link => {
          const a = document.createElement('a')
          a.setAttribute('href', link.href)
          a.textContent = link.text
          subMenuEl.appendChild(a)
        })
      }
      subMenuEl.addEventListener("click", function (evt) {
        evt.preventDefault()
        if (!evt.target.matches('a')) {
          return;
        }
        console.log(evt.target);
        subMenuEl.style.top = "0%"
        topMenuLinks.forEach(link => {
          link.classList.remove('active')
        })
        h1.textContent = `${evt.target.textContent}`
      })
    })
  }
});

