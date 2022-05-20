// Insert nav bar at top of all pages
// modified from https://syntaxfix.com/question/4881/how-can-i-reuse-a-navigation-bar-on-multiple-pages
$(function() {
    $(".nav-bar").load("navigation.html");
});

// Insert footer at bottom of all pages
$(function() {
    $(".footer").load("footer.html");
});

// Open cart
$(function() {
    $("#cart").load("cart.html");
});


function cartDisplay(){
    console.log("clicked");
    var cart = document.getElementById("cart");
    cart.classList.toggle("cart-shown");
}

function nextStep(){
    console.log("clicked");
    var next = document.getElementById("next");
    next.classList.toggle("display-none");
    if(next.classList.contains("display-none")){
        document.getElementById('step').style.display = "block";
    }
}
