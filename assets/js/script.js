
// Reveal side nav after scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("navbar").classList.add("reveal");
    } else {
    document.getElementById("navbar").classList.remove("reveal");
    }
}

// About dropdown
const accordion = document.querySelectorAll('.contentBx') ; 

accordion.forEach(acc => {
    acc.addEventListener('click', function(){
        this.classList.toggle('active'); 
    })
})
    









  
