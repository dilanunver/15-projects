// items
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/images.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/image-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/image-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/image-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/image-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/image-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/image-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/image-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/image-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 36.99,
        img: "./images/image-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

/* const sectionCenter = document.querySelector('.section-center'); //selected the parent my item

const filterBtns = document.querySelectorAll('.filter-btn')

// load items 
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
});

// filter items
filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id; // when it is clicked one of category, you can see it on console. eg. breakfast, or all
        const menuCategory = menu.filter(function(menuItem){
           // console.log(menuItem);
           // console.log(menuItem.category);
           if(menuItem.category === category){
               return menuItem;
           }
        });
    //  console.log(menuCategory);
    if (category === 'all'){
        displayMenuItems(menu);
    } else {
        displayMenuItems(menuCategory);
    }
    })
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item); // there are informations at menu. 
        // return `<h1>hello world</h1>`
        return `<article class="menu-item">
           <img src=${item.img} class="photo" alt=${item.title}>
           <div class="item-info">
               <header>
                   <h4>${item.title}</h4>
                   <h4 class="price">$${item.price}</h4>
               </header>
               <p class="item-text">
                   ${item.desc}
               </p>
           </div>
       </article>`

    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}
    //console.log(displayMenu); // there is an array consist of my menu features */

// get only unique categories - hardest one
// iterate over categories return buttons
// make sure to select buttons when they are available


    const sectionCenter = document.querySelector('.section-center');
    const filterBtns = document.querySelectorAll('.filter-btn');
    // load items
    window.addEventListener('DOMContentLoaded', function(){
             displayMenuItems(menu)
    });

    //filter items
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
             //  console.log(menuItem) // shows the Object like in the item
             // console.log(menuItem.category) // shows the categories like breakfast, lunch etc.
             if(menuItem.category === category){
                // console.log(menuItem) // categories beloging to your chose
                return menuItem;       
            }  
            });
            if (category === 'all') {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory); //???
            }
            console.log(menuCategory)
        })
    })


    function displayMenuItems(menuItems){
        let displayMenu = menuItems.map(function(item){
            // console.log(item) // shows the Object
           return `<article class="menu-item">
           <img src=${item.img} class="photo" alt=${item.title}>
           <div class="item-info">
               <header>
                   <h4>${item.title}</h4>
                   <h4 class="price">$${item.price}</h4>
               </header>
               <p class="item-text">
                  ${item.desc}
               </p>
           </div>
       </article>`   
        });
        displayMenu = displayMenu.join('')
        sectionCenter.innerHTML = displayMenu
        // console.log(displayMenu); shows the array , map function needs to return  
    }