// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }


document.addEventListener('DOMContentLoaded', function () {
    const menuBar = document.getElementById('menu-bar');
    const navbar = document.querySelector('.navbar');
    const icon = document.querySelector('.icon');

    menuBar.addEventListener('click', function () {
        // Toggle the 'show' class on the navbar
        navbar.classList.toggle('show');
        
        // Toggle the 'active' class on the icon container to rotate the icon
        icon.classList.toggle('active');
    });
});
