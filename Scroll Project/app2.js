// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle") 
const linksContainer = document.querySelector(".links-container") // consist of home, about, services, tours
const links = document.querySelector(".links")


navToggle.addEventListener("click", function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
   // console.log(containerHeight); 0
    const linksHeight = links.getBoundingClientRect().height;
   // console.log(linksHeight) 200


   if (containerHeight === 0){
       linksContainer.style.height = `${linksHeight}px`
   } else {
       linksContainer.style.height=0
   } 
   //console.log(containerHeight);
   // console.log(linksHeight);
});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector(".top-link")

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset; // when you scroll, the number is increasing.
    //console.log(scrollHeight);
    const navHeight = navbar.getBoundingClientRect().height;
   // console.log(navHeight) everywhere is 82. nav id=82
   if(scrollHeight > navHeight){
       navbar.classList.add('fixed-nav')
   } else {
       navbar.classList.remove('fixed-nav')
   }

   if (scrollHeight > 500) {
       topLink.classList.add('show-link')
   } else {
       topLink.classList.remove('show-link')
   }
})

// ********** smooth scroll ************

const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault()
         // navigate to specific spot
         const id = e.currentTarget.getAttribute("href").slice(1);
         const element = document.getElementById(id);
         // console.log(element) shows the id where you click.
                
         // calculate the heights 
         const navHeight = navbar.getBoundingClientRect().height;
         const containerHeight = linksContainer.getBoundingClientRect().height;
         const fixedNav = navbar.classList.contains("fixed-nav")

         //console.log(navHeight); // 82
         //console.log(containerHeight); // 26 
         //console.log(fixedNav); // false
         let position = element.offsetTop - navHeight
        // console.log(position)
         if(!fixedNav){
            position = position - navHeight;
        }
        if (fixedNav > 82) {
            position = position + containerHeight
        } 
        window.scrollTo ({
            top: position,
            left: 0
        });

        linksContainer.style.height = 0;



    })
})
