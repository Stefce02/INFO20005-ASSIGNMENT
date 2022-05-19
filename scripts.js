// Insert nav bar at top of all pages
// modified from https://syntaxfix.com/question/4881/how-can-i-reuse-a-navigation-bar-on-multiple-pages
$(function() {
    $(".nav-bar").load("navigation.html");
});

// Insert footer at bottom of all pages
$(function() {
    $(".footer").load("footer.html");
});

// $(function() {
//     $(".cart").load("cart.html");
// });

// function toggleResponsive {
//     //   var navbar = document.getElementById("myTopnav");
//     //   navbar.classList.toggle("myTopnav");
//     // }

// onclick="newWindow(' + waypointas + ');">
