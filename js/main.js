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