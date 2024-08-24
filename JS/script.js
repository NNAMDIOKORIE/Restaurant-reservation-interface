// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }


document.addEventListener('DOMContentLoaded', function () {
    const menuBar = document.getElementById('menu-bar');
    const navbar = document.querySelector('.navbar');

    menuBar.addEventListener('click', function () {
        //Toggle the 'active' class on the navbar
        navbar.classList.toggle('active'); 
        
        //Apply animation to te navbar
        if (navbar.classList.contains(active)) {
            navbar.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
            navbar.style.opacity = "1";
            navbar.style.transition = "clip-path 0.5s ease-in-out, opacity 0.5s ease-in-out"
        }else {
            navbar.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
            navbar.style.opacity = "0";
        }
    });
});
