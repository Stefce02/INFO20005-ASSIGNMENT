// Insert nav bar at top of all pages
// modified from https://syntaxfix.com/question/4881/how-can-i-reuse-a-navigation-bar-on-multiple-pages
$(function() {
    $(".nav-bar").load("navigation.html");
});

// Insert footer at bottom of all pages
$(function() {
    $(".footer").load("footer.html");
});

// Load cart html
$(function() {
    $("#cart").load("cart.html");
});


// Open Cart on click
function cartDisplay(){
    console.log("clicked");
    var cart = document.getElementById("cart");
    cart.classList.toggle("cart-shown");
}

// Progress forward through the stages of the cart
function nextStep(){
    console.log("clicked");
    var next = document.getElementById("next");
    var step = document.getElementById("step");
    var next_head = document.getElementById("next-head");
    var step_head = document.getElementById("step-head");
    
    next.classList.add("display-none");
    next_head.classList.add("display-none");

    next.removeAttribute("id", "next");
    next_head.removeAttribute("id", "next-head");

    step.classList.remove("display-none");
    step_head.classList.remove("display-none");

    step.setAttribute("id", "next");
    step_head.setAttribute("id", "next-head");
}

// Progress backward through the stages of the cart
function lastStep(){
    console.log("clicked");
    var next = document.getElementById("next");
    var step = document.getElementById("step");
    var next_head = document.getElementById("next-head");
    var step_head = document.getElementById("step-head");
    
    next.classList.add("display-none");
    next_head.classList.add("display-none");

    next.removeAttribute("id", "next");
    next_head.removeAttribute("id", "next-head");

    step.classList.remove("display-none");
    step_head.classList.remove("display-none");

    step.setAttribute("id", "next");
    step_head.setAttribute("id", "next-head");
}


