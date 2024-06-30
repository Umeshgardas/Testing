// document.querySelector('.Running-Container-LeftSide-Scroll-Button').addEventListener('click',()=>{
// document.querySelector('.ChangeColorBlack').classList.toggle('Change-Color-All-Black');



// });
function ChangeColor(){
    const getColorBack = document.querySelectorAll(".ChangeColorBlack");
for (let i = 0; i < getColorBack.length; i++) {
    getColorBack[i].classList.toggle("Change-Color-All-Black");
}
const getColor = document.querySelectorAll(".ChangeColor");
for (let i = 0; i < getColor.length; i++) {
    getColor[i].classList.toggle("Change-Color-All");
}
}
