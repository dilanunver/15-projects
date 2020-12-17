window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight/*1200*/ - window.innerHeight/*743*/
    const scrolled = window.scrollY
    //console.log(scrollable)
    if (scrolled === scrollable) {
        alert('You\'ve reached the buttom!')
    }
    console.log(scrolled)
    console.log(scrollable)
})