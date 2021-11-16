"use strict"

/* header js */
let oldValue = 0;
let header = document.querySelector("header");
window.addEventListener("scroll",()=>{
    if(window.scrollY > oldValue){
        oldValue = window.scrollY;
        header.setAttribute("style" ,"top: -100%;transition:0.5s;");
        }
        else{
            oldValue = window.scrollY;
            header.setAttribute("style" ,"top: 0px;transition:0.5s;");
        }
    });