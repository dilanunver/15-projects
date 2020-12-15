// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
   // console.log(containerHeight) // 0
    const linksHeight = links.getBoundingClientRect().height;
   // console.log(linksHeight) // 200

    if (containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
})

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', function(){
   const scrollHeight = window.pageYOffset;
   const navHeight = navbar.getBoundingClientRect().height;

  console.log(navHeight);
  if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav")
  } else {
      navbar.classList.remove("fixed-nav")
  }

  if (scrollHeight > 500 ) {
      topLink.classList.add('show-link');
  } else {
      topLink.classList.remove('show-link')
  }
})

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    //console.log(link)
    link.addEventListener('click', function(e){
       e.preventDefault(); // when you click 'e'(home,about,services, etc.), does not work anyway.
       // navigate to specific spot
       const id = e.currentTarget.getAttribute("href").slice(1);
       const element = document.getElementById(id);

       // calculate the heights 
       const navHeight = navbar.getBoundingClientRect().height;
       // console.log(navHeight) => 282
       const containerHeight = linksContainer.getBoundingClientRect().height;
      // console.log(containerHeight)
       const fixedNav = navbar.classList.contains("fixed-nav");
       // console.log(fixedNav)
       let position = element.offsetTop - navHeight;
            // position = element.offsetTop => home: 0, about: 821 etc.
           // console.log(position) home: 0 - 282, about: 821 - 282 etc.
       if (!fixedNav){
           position = position - navHeight;
       }

       if (navHeight > 82) {
           position = position + containerHeight;
       }
       window.scrollTo({
           left: 0,
           top: position,
       });
       linksContainer.style.height = 0 // not about the if's
    })
})