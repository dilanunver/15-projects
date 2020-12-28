const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const alert = document.querySelector('.alert');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// **** Event Listeners ***
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems)

// **** Functions *****
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        const attr = document.createAttribute('data-id');
        attr.value=id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
        </div>`
        list.appendChild(element);
        container.classList.add('show-container');
        displayAlert('added item to the list', 'success');
        setBackToDefault()

    }
    else if (value && editFlag){
        console.log('editing')
    }
    else{
        displayAlert('please enter a valid item', 'danger')
    }
}

function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

function setBackToDefault(){
    grocery.value='';
    editFlag = false;
    editID='';
    submitBtn.textContent = 'submit';
}

function clearItems(){
        const items = document.querySelectorAll('.grocery-item');
        items.forEach(function(item){
            item.remove();
        })
        container.classList.remove('show-container');
        displayAlert('items removed!', 'success');
        setBackToDefault();  
}