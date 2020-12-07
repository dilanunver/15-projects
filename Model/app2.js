// click 'open modal' 
// close 'modal content'

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function(){
         modal.classList.add('open-modal');
})

closeBtn.addEventListener('click', function(){
    modal.classList.remove('open-modal');
    
  })

  // modalBtn refers 'open modal button'
  // modal refers 'whole page' 
  // closeBtn refers 'X image on the container' 

  // info: when you click on the open modal button, the modal content should be opened. to do this, you should create a function which name is 
  // modalBtn and give it click function. when click it, the modal content should be opened on the whole page which is 'modal-overlay'

  // after opening it, you should close the modal content by using closeBtn.
  // to do this, you should close it and remove it what you opened before. 