AOS.init();
// Setup and start animation!
var typed = new Typed('.typed-text', {
strings: ['I am Manasseh <span class="name">Hirekaan</span>', "I'm a Software <span class='name'> Developer</span>", "I'm a Frontend <span class='name'> Developer</span>", "I'm a Backend <span class='name'>Developer</sapn>"],
typeSpeed: 50,
loop:true
});


const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item)=>{
    item.addEventListener('click', function (){
        this.classList.toggle('collapsible--expanded');
    })
})

let items = document.getElementsByClassName("nav__item");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


function handleFormSubmit(event){
    const form = event.target.closest("form")
    console.log("form submit called ")
    if (form.reportValidity()) {
        form.submit();
      }
}