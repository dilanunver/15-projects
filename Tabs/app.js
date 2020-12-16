const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
// console.log(about) article class = "about"
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
   const id = e.target.dataset.id;
   if (id){
       // remove active from other buttons
       btns.forEach(function(btn){
           // btn.classList.toggle('active')
           // it is okey, but the color of the tab-btn is changing. 
           
          btn.classList.remove('active');
           //const list2 = btn.classList;
         //  console.log(list2)
          // const list = e.target.classList;
          // console.log(list)
           e.target.classList.add('active');
       });
      // hide other articles
      articles.forEach(function(article){
          article.classList.remove('active')
      }) 
      const element = document.getElementById(id);
      element.classList.add('active')
   }
});