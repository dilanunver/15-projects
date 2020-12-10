// using selector inside the element
const questions = document.querySelectorAll('.question');
 // console.log(questions); 

questions.forEach(function(question){
     // console.log(question); 
    // 
     const btn = question.querySelector('.question-btn');
        //  console.log(btn); 
      btn.addEventListener('click', function(){
    questions.forEach(function(item){
     console.log(item)
               if (item !== question){
                   item.classList.remove('show-text');
              }
            });
            question.classList.toggle('show-text');
       }); 
});

// closure 
// traversing the dom


/* const btns = document.querySelectorAll('.question-btn');


btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement // e.currentTarget => button type="button" class="question-btn">
        // e.currentTarget.parentElement => question title, e.currentTarget.parentElement.parentElement => question
        question.classList.toggle('show-text')                   
    })
}); */

// note : console.log(questions) => article.question (3)
// console.log(question) => article class = 'question'
// console.log(btn) => question-btn


