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

// Open and close descriptive text 
function openAndClose(){
    document.getElementById("open-close").classList.toggle("open-close");
    document.getElementById("desc-txt").classList.toggle("display-none");
}

// Progress forward through the stages of the checkout
function nextStep(){
    var next = document.getElementById("next");
    var step = document.getElementById("step");
    var back = document.getElementById("back");
    var back_head = document.getElementById("back-head");
    var next_head = document.getElementById("next-head");
    var step_head = document.getElementById("step-head");

    // Previous step no longer the immediate previous step
    if(back) {
        back.removeAttribute("id", "back");
        back_head.removeAttribute("id", "back");
        back.setAttribute("id", "back-again");
        back_head.setAttribute("id", "back-again-head");
    }
    
    // Hide current step
    next.classList.add("display-none");
    next_head.classList.add("display-none");

    // Current step becomes the previous
    next.setAttribute("id", "back");
    next_head.setAttribute("id", "back-head");

    // Show next step
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
    var next = document.getElementById("next");
    var back = document.getElementById("back");
    var back_head = document.getElementById("back-head");
    var next_head = document.getElementById("next-head");
    var back_again = document.getElementById("back-again");
    var back_again_head = document.getElementById("back-again-head");  

    // Hide current step
    next.classList.add("display-none");
    next_head.classList.add("display-none");

    next.setAttribute("id", "step");
    next_head.setAttribute("id", "step-head");

    // Show previous step
    if(back) {
        back.classList.remove("display-none");
        back_head.classList.remove("display-none");
        
        // Previous step becomes current step
        back.setAttribute("id", "next");
        back_head.setAttribute("id", "next-head");
    }
    // Going back twice in a row
    else {
        back_again.classList.remove("display-none");
        back_again_head.classList.remove("display-none");
        back_again.setAttribute("id", "next");
        back_again_head.setAttribute("id", "next-head");
    }
   
}

// Form Validation
function validateLoginForm() {
    var valid = 1;
    var user = document.forms["login"]["username"].value;
    var pword = document.forms["login"]["password"].value;
    // Empty value
    if (user == "") {
        // Change input box colour to red and display error message
        document.getElementById("username").classList.add("incorrect-input");
        document.getElementById("user-error").style.display = "block";
        // Scroll to where error occured 
        document.getElementById("username").scrollIntoView({behavior: "smooth", block: "center"});
        valid = 0;
    }
    // Remove error message if correct
    else {
        document.getElementById("username").classList.remove("incorrect-input");
        document.getElementById("user-error").style.display = "none";
    }
    // Empty
    if (pword == "") {
        document.getElementById("password").classList.add("incorrect-input");
        document.getElementById("pword-error").style.display = "block";
        document.getElementById("password").scrollIntoView({behavior: "smooth", block: "center"});
        valid = 0;
    }
    else {
        document.getElementById("password").classList.remove("incorrect-input");
        document.getElementById("pword-error").style.display = "none";
    }
    if(valid) {
        // Continue to next stage of the checkout
        nextStep();
    }
}

// Validate shipping information
function validateShippingForm() {
    var valid = 1;
    var name = document.forms["shipping"]["full-name"].value;
    var check_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email = document.forms["shipping"]["email"].value;
    var phone = document.forms["shipping"]["phone"].value;
    var address = document.forms["shipping"]["address"].value;
    var country =  document.forms["shipping"]["country"].value;
    var city =  document.forms["shipping"]["city"].value;
    var post =  document.forms["shipping"]["post-code"].value;
    //Empty value or has numbers
    if (name == "" || (name.match(/^\d+/))) {
        document.getElementById("full-name").classList.add("incorrect-input");
        document.getElementById("name-error").style.display = "block";
        document.getElementById("full-name").scrollIntoView({behavior: "smooth", block: "end"});
        valid=0;
    }
    // Remove error message if correct
    else {
        document.getElementById("full-name").classList.remove("incorrect-input");
        document.getElementById("name-error").style.display = "none";
    }
    //Not an email address
    if (!(email.match(check_email))) {
        document.getElementById("email").classList.add("incorrect-input");
        document.getElementById("email-error").style.display = "block";
        document.getElementById("email").scrollIntoView({behavior: "smooth", block: "end"});
        valid=0;
    }
    else {
        document.getElementById("email").classList.remove("incorrect-input");
        document.getElementById("email-error").style.display = "none";
    }
    // Phone must have 10 digits
    if (phone != "" && !(phone.match(/^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{3})$/))) {
        document.getElementById("phone").classList.add("incorrect-input");
        document.getElementById("phone-error").style.display = "block";
        document.getElementById("phone").scrollIntoView({behavior: "smooth", block: "center"});
        valid=0;
    }
    else {
        document.getElementById("phone").classList.remove("incorrect-input");
        document.getElementById("phone-error").style.display = "none";
    }
    //Empty value
    if (address == "") {
        document.getElementById("address").classList.add("incorrect-input");
        document.getElementById("address-error").style.display = "block";
        document.getElementById("address").scrollIntoView({behavior: "smooth", block: "center"});
        valid=0;
    }
    else {
        document.getElementById("address").classList.remove("incorrect-input");
        document.getElementById("address-error").style.display = "none";
    }
    //Empty value or has numbers
    if (country == "" || (country.match(/^\d+/))) {
        document.getElementById("country").classList.add("incorrect-input");
        document.getElementById("country-error").style.display = "block";
        document.getElementById("country").scrollIntoView({behavior: "smooth", block: "start"});
        valid=0;
    }
    else {
        document.getElementById("country").classList.remove("incorrect-input");
        document.getElementById("country-error").style.display = "none";
    }
    //Empty value or has numbers
    if (city=="" || (city.match(/^\d+/))) {
        document.getElementById("city").classList.add("incorrect-input");
        document.getElementById("city-error").style.display = "block";
        document.getElementById("city").scrollIntoView({behavior: "smooth", block: "start"});
        valid=0;
    }
    else {
        document.getElementById("city").classList.remove("incorrect-input");
        document.getElementById("city-error").style.display = "none";
    }
    //Empty value or doesn't have numbers
    if (!(post.match(/^\d+/))) {
        document.getElementById("post-code").classList.add("incorrect-input");
        document.getElementById("post-error").style.display = "block";
        document.getElementById("post-code").scrollIntoView({behavior: "smooth", block: "start"});
        valid=0;
    }
    else {
        document.getElementById("post-code").classList.remove("incorrect-input");
        document.getElementById("post-error").style.display = "none";   
    }

    // Continue to next stage of the checkout
    if(valid) {
        // Update shipping price in order summary
        document.getElementById("old-ship-price").classList.add("display-none");
        document.getElementById("ship-price").classList.remove("display-none");
        document.getElementById("old-total").classList.add("display-none");
        document.getElementById("new-total").classList.remove("display-none");
        nextStep();
    }
}

// Validate credit card information
function validateCardForm() {
    var valid = 1;
    var name = document.forms["card"]["card-name"].value;
    var number = document.forms["card"]["card-number"].value;
    var expiry = document.forms["card"]["expiry"].value;
    var cvn = document.forms["card"]["cvn"].value;
    //Empty value or has numbers
    if (name == "" || (name.match(/^\d+/))) {
        document.getElementById("card-name").classList.add("incorrect-input");
        document.getElementById("cname-error").style.display = "block";
        document.getElementById("card-name").scrollIntoView({behavior: "smooth", block: "end"});
        valid=0;
    }
    // Remove error message if correct
    else {
        document.getElementById("card-name").classList.remove("incorrect-input");
        document.getElementById("cname-error").style.display = "none";
    }
    // Card number does not have 16 digits
    if (!(number.match(/^\d{16}$/))) {
        document.getElementById("card-number").classList.add("incorrect-input");
        document.getElementById("cnumber-error").style.display = "block";
        document.getElementById("card-number").scrollIntoView({behavior: "smooth", block: "center"});
        valid=0;
    }
    else {
        document.getElementById("card-number").classList.remove("incorrect-input");
        document.getElementById("cnumber-error").style.display = "none";
    }
    // Empty value
    if (expiry == "" ) {
        document.getElementById("expiry").classList.add("incorrect-input");
        document.getElementById("expiry-error").style.display = "block";
        document.getElementById("expiry").scrollIntoView({behavior: "smooth", block: "start"});
        valid=0;
    }
    else {
        document.getElementById("expiry").classList.remove("incorrect-input");
        document.getElementById("expiry-error").style.display = "none";
    }
    //Empty value or doesn't have numbers
    if (!(cvn.match(/^\d+/))) {
        document.getElementById("cvn").classList.add("incorrect-input");
        document.getElementById("cvn-error").style.display = "block";
        document.getElementById("cvn").scrollIntoView({behavior: "smooth", block: "start"});
        valid=0;
    }
    else {
        document.getElementById("cvn").classList.remove("incorrect-input");
        document.getElementById("cvn-error").style.display = "none";
    }
    
    // Continue to confirmation
    if(valid){
        document.getElementById("space").scrollIntoView({behavior: "smooth", block: "end"});
        nextStep();
        // Reformat order summary container
        document.getElementById("space").classList.add("other-information-confirmation");
    }
}

// Check if valid discount code
function applyDiscount(){
    var code=document.getElementById("code").value;

    // Code is empty
    if(code == "") {
        document.getElementById("code-error-two").style.display = "none";
        document.getElementById("code").classList.add("incorrect-input");
        document.getElementById("code-error").style.display = "block";
        document.getElementById("code").scrollIntoView({behavior: "smooth", block: "center"});
    }
    // Code is expired
    else {
        document.getElementById("code-error").style.display = "none";
        document.getElementById("code").classList.add("incorrect-input");
        document.getElementById("code-error-two").style.display = "block";
        document.getElementById("code").scrollIntoView({behavior: "smooth", block: "center"});
    }
}

