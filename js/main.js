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
  let current = document.querySelector(".navbar__list .active");
  current.className = current.className.replace(" active", "");
  this.className += " active";
  });
}


let languages = document.querySelectorAll('[class*="language-"]');
for (let i = 0; i < languages.length; i++) {
  languages[i].addEventListener("click", function() {
  let current = document.querySelector(".languages-container .active");
  current.classList.remove("active");
  this.classList.add("active");
  const language = this.textContent;
  const currentPreTag = document.querySelector(`.${current.textContent.toLowerCase()}`);
  const nextPreTag = document.querySelector(`.${language.toLowerCase()}`)
  currentPreTag.classList.add("hidden")
  nextPreTag.classList.remove("hidden")
  });
}


function handleFormSubmit(event){
    const form = event.target.closest("form")
    console.log("form submit called ")
    if (form.reportValidity()) {
        form.submit();
      }
}