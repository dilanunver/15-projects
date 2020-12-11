
const questions = document.querySelectorAll('.question')
// we chose all because there are three question in questions .
// then we should walk around the three question. for that reason, we should set forEach func. 

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', function(){
        questions.forEach(function(item){
            console.log(item)
            if(item !== question){
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})

// note btw 6-11 ; I have formed parameter which is called question. but it can be different from question such as orange, apple etc. 
// because we can click it, we gave it a name. after we can form a click func. 
// then we gave it toggle to show-text

// after that, we formed a questions.forEach, our aim is when we click on question-btn, the others are closed.
// item = question ; these are btw 9-13