
// navbar 
const navToggle=document.getElementById('nav_toggle');

const navMenu=document.getElementById('nav_menu');

const navClose = document.getElementById("nav_close");

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink= document.querySelectorAll('.li-item');

const linkaction= ()=> {
    const navMenu=document.getElementById('nav_menu');

    navMenu.classList.remove('show-menu')
}

navLink.forEach( n => n.addEventListener('click', linkaction))




const item = document.querySelectorAll(".item");

item.forEach((element)=>{
    element.addEventListener('click' , ()=>{
        let  x = confirm("Do You want to order it");
    
        if(x){
            alert("Restaurant is under maintainece");
        }

        else{
            alert("Thank You");
        }

        
    })   

})




let pizza = document.querySelector('#pizza');
let burger= document.querySelector("#burger");
let momo = document.querySelector("#momo");
let chowmein = document.querySelector('#chowmein');
let french_fries= document.querySelector("#frech-fries");

let menu_content = document.querySelector("#menu_content");


let item_1 = document.querySelectorAll(".item_1");
let item_2 = document.querySelectorAll(".item_2");
let item_3 = document.querySelectorAll(".item_3");
let item_4 = document.querySelectorAll(".item_4");
let item_5 = document.querySelectorAll(".item_5");


pizza.addEventListener('click', ()=>{
       item_1.forEach((element)=>{
        menu_content.prepend(element);
       })
})


burger.addEventListener('click', ()=>{
       item_2.forEach((element)=>{
        menu_content.prepend(element);
       })
})


momo.addEventListener('click', ()=>{
       item_3.forEach((element)=>{
        menu_content.prepend(element);
       })
})


chowmein.addEventListener('click', ()=>{
       item_4.forEach((element)=>{
        menu_content.prepend(element);
       })
})


french_fries.addEventListener('click', ()=>{
       item_5.forEach((element)=>{
        menu_content.prepend(element);
       })
})

