//import "./styles.css";

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  //Part 1 - Getting Started - Build a main content element 
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

/* const h1El = document.createElement("h1");
const h1Text = document.createTextNode ("DOM Manipulation");

h1El.appendChild(h1Text);
mainEl.appendChild(h1El); */

mainEl.innerHTML = "<h1>DOM Manipulation<h1>";
mainEl.classList.add("flex-ctr");

// Part 2 - Create a Blank Menu Bar

//let topMenuEl = document.createElement("nav");
//topMenuEl.id = "top-menu";
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");


// Part 3 - Add Menu bars using menu date structure
menuLinks.forEach(link =>{
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    topMenuEl.append(a);
});