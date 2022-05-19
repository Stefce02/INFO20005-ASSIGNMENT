// Insert nav bar at top of all pages
// modified from https://syntaxfix.com/question/4881/how-can-i-reuse-a-navigation-bar-on-multiple-pages
$(function() {
    $(".nav-bar").load("navigation.html");
});

// Insert footer at bottom of all pages
$(function() {
    $(".footer").load("footer.html");
});

$(function() {
    $("#cart").load("cart.html");
});


function cartDisplay(){
    console.log("clicked");
    var cart = document.getElementById("cart");
    cart.classList.toggle("cart-shown");
}

// var cartIcon = document.getElementById("cart-icon");

// if(cartIcon) {
//     cartIcon.addEventListener("click", display);
// }

// function display() {
//     console.log("click");
// }


// cartIcon.addEventListener('click', function handleClick(event) {
//     console.log("click");
//     event.target.classList.add('bg-yellow');
// });

// onclick="newWindow(' + waypointas + ');">
