// Insert nav bar at top of all pages
// modified from https://syntaxfix.com/question/4881/how-can-i-reuse-a-navigation-bar-on-multiple-pages
$(function() {
    $(".nav-bar").load("navigation.html");
});

// Insert footer at bottom of all pages
$(function() {
    $(".footer").load("footer.html");
});

// Load cart html code
$(function() {
    $("#cart").load("cart.html");
});

// Load hamburger menu html code
$(function() {
    $("#hamburger").load("hamburger.html");
});

// Open Hamburger Menu on click
function menuDisplay(){
    console.log("clicked");
    var menu = document.getElementById("hamburger");
    menu.classList.toggle("menu-shown");
    // Close cart if open
    if(document.getElementById("cart").classList.contains("cart-shown")) {
        document.getElementById("cart").classList.toggle("cart-shown");
    }
}

// Open Cart on click
function cartDisplay(){
    console.log("clicked");
    var cart = document.getElementById("cart");
    cart.classList.toggle("cart-shown");
    // Close menu if open
    if(document.getElementById("hamburger").classList.contains("menu-shown")) {
        document.getElementById("hamburger").classList.toggle("menu-shown");
    }
}

// Progress forward through the stages of the checkout
function nextStep(){
    console.log("clicked");
    var next = document.getElementById("next");
    var step = document.getElementById("step");
    var back = document.getElementById("back");
    var back_head = document.getElementById("back-head");
    var next_head = document.getElementById("next-head");
    var step_head = document.getElementById("step-head");

    if(back) {
        back.removeAttribute("id", "back");
        back_head.removeAttribute("id", "back");
    }
    
    next.classList.add("display-none");
    next_head.classList.add("display-none");

    next.setAttribute("id", "back");
    next_head.setAttribute("id", "back-head");

    step.classList.remove("display-none");
    step_head.classList.remove("display-none");

    step.setAttribute("id", "next");
    step_head.setAttribute("id", "next-head");

    // Display similar products after confirmation and hide discount input box
    if(step.classList.contains("confirmation")) {
        document.getElementById("more").classList.remove("display-none");
        document.getElementById("hide").classList.add("display-none");
        document.getElementById("space").classList.add("other-information-hidden");
    }
}

// Progress backward through the stages of the checkout
function lastStep(){
    console.log("clicked");
    var next = document.getElementById("next");
    var back = document.getElementById("back");
    var back_head = document.getElementById("back-head");
    var next_head = document.getElementById("next-head");
    
    next.classList.add("display-none");
    next_head.classList.add("display-none");

    next.setAttribute("id", "step");
    next_head.setAttribute("id", "step-head");

    back.classList.remove("display-none");
    back_head.classList.remove("display-none");
    
    back.setAttribute("id", "next");
    back_head.setAttribute("id", "next-head");
}

// Form Validation
function validateLoginForm() {
    var user = document.forms["login"]["Username"].value;
    var pword = document.forms["login"]["password"].value;
    if (user == "") {
      alert("Username cannot be blank");
      document.getElementById("Username").classList.add("incorrect-input");
      return false;
    }
    else if (pword == "") {
        alert("Incorrect Password");
        document.getElementById("password").classList.add("incorrect-input");
    }
    else {
        // Continue to next stage of the checkout
        document.getElementById("Username").classList.remove("incorrect-input");
        document.getElementById("password").classList.remove("incorrect-input");
        nextStep();
    }
}

// Validate shipping information
function validateShippingForm() {
    var name = document.forms["shipping"]["full-name"].value;
    var check_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email = document.forms["shipping"]["email"].value;
    var phone = document.forms["shipping"]["phone"].value;
    var address = document.forms["shipping"]["address"].value;
    var country =  document.forms["shipping"]["country"].value;
    var city =  document.forms["shipping"]["city"].value;
    var post =  document.forms["shipping"]["post-code"].value;
    if (name == "" || (name.match(/^\d+/))) {
        alert("Name cannot be blank");
        document.getElementById("full-name").classList.add("incorrect-input");
        return false;
    }
    else if (!(email.match(check_email))) {
        alert("Enter a valid email");
        document.getElementById("email").classList.add("incorrect-input");
        return false;
    }
    else if (phone != "" && !(phone.match(/^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{3})$/))) {
        alert("Enter a valid number");
        document.getElementById("phone").classList.add("incorrect-input");
        return false;
    }
    else if (address == "") {
        alert("Enter an address");
        document.getElementById("address").classList.add("incorrect-input");
        return false;
    }
    else if (country == "" || (country.match(/^\d+/))) {
        alert("Enter a country");
        document.getElementById("country").classList.add("incorrect-input");
        return false;
    }
    else if (city=="" || (city.match(/^\d+/))) {
        alert("Enter a city");
        document.getElementById("city").classList.add("incorrect-input");
        return false;
    }
    else if (!(post.match(/^\d+/))) {
        alert("Enter a valid post code");
        document.getElementById("post-code").classList.add("incorrect-input");
        return false;
    }
    else {
        nextStep();
    }
}

// Validate credit card information
function validateCardForm() {
    var name = document.forms["card"]["card-name"].value;
    var number = document.forms["card"]["card-number"].value;
    var expiry = document.forms["card"]["expiry"].value;
    var cvn = document.forms["card"]["cvn"].value;
    if (name == "") {
      alert("Cardholder name cannot be blank");
      return false;
    }
    else if (!(number.match(/^\d{16}$/))) {
        alert("Enter a valid card number with no spaces");
        document.getElementById("card-number").classList.add("incorrect-input");
        return false;
    }
    else if (expiry == "" ) {
        alert("Enter an expiry date");
        document.getElementById("expiry").classList.add("incorrect-input");
        return false;
    }
    else if (!(cvn.match(/^\d+/))) {
        alert("Enter a valid CVN");
        document.getElementById("cvn").classList.add("incorrect-input");
        return false;
    }
    else {
        nextStep();
    }
}


