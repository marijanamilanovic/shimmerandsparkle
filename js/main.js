var error = 0;
let url = location.href;
if(url.indexOf("contact.html") != -1){
    window.onload=function(){
        var button = document.getElementById("btnSend");
        button.addEventListener("click", formProcessing);
    }
}

//navbar

let navBar = document.querySelector("#navMeni");

let navPage = ["Home", "Jewelry", "Contact", "Author"];
let navLink = ["index.html", "#", "contact.html", "author.html"];
let submenuLink = ["rings.html", "earrings.html", "necklaces.html", "bracelets.html"];
let submenuText = ["Rings", "Earrings", "Necklaces", "Bracelets"];

let navPrint = `<ul class="navbar-nav">`;

for(let i = 0; i < navPage.length; i++){
    if(navPage[i] == 'Jewelry'){
        navPrint += `<li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Jewelry</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">`;
         for(let j = 0; j < submenuLink.length; j++){
            navPrint += `<li>
                            <a class="dropdown-item" href="${submenuLink[j]}">${submenuText[j]}</a>
                        </li>`;
        } 
        navPrint += `</ul>`;
    }
    else{
        navPrint += `<li class="nav-item">
                        <a class="nav-link" href="${navLink[i]}">${navPage[i]}</a>
                    </li>`;
    }
}

navPrint += `</ul>`;
navBar.innerHTML += navPrint; 

if(url.indexOf("index.html") != -1){

    //holiday sale block

    let holidaySale = document.querySelector("#holidaySale");

    let saleImg = ["assets/img/ring2-sale.jpg", "assets/img/earrings3.jpg", "assets/img/bracelet-sale.jpg"];
    let saleDiscount = ["-35%", "-40%", "-40%"];
    let saleProduct = ["Cocktail ring", "Constella stud earrings", "Subtle Trilogy bracelet"];
    let saleText = ["Pear cut | White | Rhodium plated", "Round cut | White | Rhodium plated", "Mixed round cuts | White | Rhodium plated"];
    let saleOldPrice = ["$15,500", "$3,900", "$9,600"];
    let saleNewPrice = ["$10,075", "$2,340", "$5,760"];

    let salePrint = `<div class="pageHeadings">
                        <h2>HOLIDAY SALE</h2>
                    </div>
                    <div class="container">
                        <div class="row blockCenter">`;

    for(let i in saleImg){
        salePrint += `<div class="col-lg-4 col-md-6 mb-4 md-12">
                        <div class="card">
                            <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                                <img src="${saleImg[i]}" alt="jewelry product" class="w-100" />
                                <div class="mask">
                                    <div class="d-flex justify-content-start align-items-end h-100">
                                        <h5><span class="badge ms-2" id="percentage">${saleDiscount[i]}</span></h5>
                                    </div>
                                </div>
                                <div class="hover-overlay">
                                    <div class="mask"></div>
                                </div>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title mb-3 text-reset">${saleProduct[i]}</h5>
                                <p class="text-reset">${saleText[i]}</p>
                                <h6 class="mb-3">
                                    <s>${saleOldPrice[i]}</s><strong class="ms-2" id="newPrice">${saleNewPrice[i]}</strong>
                                </h6>
                            </div>
                        </div>
                    </div>`;
    }

    salePrint += `</div></div>`;

    holidaySale.innerHTML = salePrint;


    //services

    let services = document.getElementById("services");

    let servicesIcon = ["assets/img/credit-card.png", "assets/img/shipped.png", "assets/img/gift-card.png"];
    let servicesHeading = ["METHOD OF PAYMENT", "FREE SHIPPING", "GIFT VOUCHER"];
    let servicesText = ["Pay quickly, easily and securely.", "Free shipping on all products.", "Delight your loved ones with our gift vouchers."];

    let servicesPrint = `<div class="container">
                            <div class="row align-items-center text-center blockCenter" id="icons">`;

    for(let i = 0; i < servicesIcon.length; i++){
        servicesPrint += `<div class="col-lg-4 col-md-6 mb-4 md-12">
                            <img src="${servicesIcon[i]}" alt="service icon"/>
                            <h3 class="hBold">${servicesHeading[i]}</h3>
                            <p>${servicesText[i]}</p>
                        </div>`;
    }

    servicesPrint += `</div></div>`;

    services.innerHTML = servicesPrint;
}

//jewelry

if(url.indexOf("bracelets.html") != -1){
    var braceletName = ["Diamond bracelet", "Sparkle bracelet", "Constella bracelet", "Soleste bracelet", "Victoria Sparkle bracelet", "Sparkle bracelet"];
    var braceletDetails = ["White | Platinum plated", "White | Platinum plated", "Sapphire | Rhodium plated", "Yellow gold | Platinum plated", "Diamonds | Platinum plated", "Rose gold | Platinum plated"];
    var braceletPrice = ["$3,500", "$1,000", "$2,340", "$1,200", "$3,200", "$1,000"];

    products("bracelets", "Bracelets", "bracelet", "bracelet", braceletName, braceletDetails, braceletPrice);
}

if(url.indexOf("rings.html") != -1){
    var ringsName = ["Constella cocktail ring", "Soleste ring", "Shimmer ring", "Sparkle ring", "Shimmer Legacy ring", "Soleste ring"];
    var ringsDetails = ["Round cut | White | Rhodium plated", "Cushion cut | Tanzanite | Diamonds", "Round cut | White | Rhodium plated", "Cushion cut | White | Platinum plated", "Yellow gold | Diamonds | Platinum plated", "Cushion cut | Rubellite | Platinum plated"];
    var ringsPrice = ["$7,000", "$11,000", "$6,000", "$6,400", "$4,300", "$10,000"];

    products("rings", "Rings", "ring", "ring", ringsName, ringsDetails, ringsPrice);
}

if(url.indexOf("necklaces.html") != -1){
    var necklaceName = ["Solitaire necklace", "Victoria Sparkle necklace", "Shimmer necklace", "Soleste necklace", "Sparkle necklace", "Sapphire necklace"];
    var necklaceDetails = ["White | Rhodium plated", "Diamonds | Platinum plated", "Cushion cut | Platinum plated", "Diamonds | Platinum plated", "Diamonds | Platinum plated", "Cushion cut | Platinum plated"];
    var necklacePrice = ["$3,250", "$3,000", "$2,000", "$3,500", "$2,300", "$10,000"];

    products("necklaces", "Necklaces", "necklace", "necklace", necklaceName, necklaceDetails, necklacePrice);
}

if(url.indexOf("earrings.html") != -1){
    var earringsName = ["Solitaire stud earrings", "Shimmer earrings", "Constella stud earrings", "Soleste earrings", "Victoria Sparkle earrings", "Shimmer earrings"];
    var earringsDetails = ["White | Platinum plated", "Diamonds | Platinum plated", "Round cut | Rhodium plated", "Yellow gold | Platinum plated", "Rubellite | Platinum plated", "Rubellite | Platinum plated"];
    var earringsPrice = ["$1,250", "$3,000", "$2,340", "$3,500", "$2,300", "$2,000"];

    products("earrings", "Earrings", "earrings", "earrings", earringsName, earringsDetails, earringsPrice);
}

function products(prodId, prodHeading, prodImg, prodImgAlt, prodName, prodDetails, prodPrice){
    var id = document.getElementById(prodId); 
    console.log(prodId);

    var container = document.createElement("div");
    container.setAttribute("class", "text-center container py-5");
    id.appendChild(container);

    var h4 = document.createElement("h4");
    h4.setAttribute("class", "mt-4 mb-5");
    container.appendChild(h4);

    var strongTag = document.createElement("strong");
    h4.appendChild(strongTag);
    strongTag.innerHTML = prodHeading;

    var row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);

    for(let i = 0; i < prodName.length; i++){
        var column = document.createElement("div");
        column.setAttribute("class", "col-lg-4 col-md-12 mb-4");
        row.appendChild(column);

        var card = document.createElement("div");
        card.setAttribute("class", "card");
        column.appendChild(card);

        var divImg = document.createElement("div");
        divImg.setAttribute("class", "bg-image hover-zoom ripple");
        divImg.setAttribute("data-mdb-ripple-color", "light");
        card.appendChild(divImg);

        var imgProduct = document.createElement("img");
        imgProduct.setAttribute("src", "assets/img/"+prodImg+[i+1]+".jpg");
        imgProduct.setAttribute("class", "w-100");
        imgProduct.setAttribute("alt", prodImgAlt);
        divImg.appendChild(imgProduct);

        var cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        card.appendChild(cardBody);

        var nameProd = document.createElement("h5");
        nameProd.setAttribute("class", "card-title mb-3");
        cardBody.appendChild(nameProd);
        nameProd.innerHTML = prodName[i];

        var details = document.createElement("p");
        cardBody.appendChild(details);
        details.innerHTML = prodDetails[i];

        var price = document.createElement("h6");
        price.setAttribute("class", "mb-3");
        cardBody.appendChild(price);
        price.innerHTML = prodPrice[i];
    }
} 


//form

/*let formId = document.querySelector("#form");

let labelId = ["fName", "lName", "email", "mobile"];
let label = ["First name", "Last name", "Email address", "Mobile number"];

let printForm = `<div class="pageHeadings">
                    <h2>BOOK AN APPOINTMENT</h2>
                </div>
                <div class="container" id="formStyle">
                    <div class="row text-align-center d-flex justify-content-center" id="rowForm">
                        <div class="col-5">
                            <form action="#" method="get" name="formBook" id="formBook">`;
                
for(let i = 0; i < labelId.length; i++){

    printForm += `<div class="mb-3">
                    <label for="${labelId[i]}" class="form-label">${label[i]}</label>
                    <input type="text" id="${labelId[i]}" class="form-control" required/>
                    <p class="formP mt-3 hide"></p>
                </div>`;
}

printForm += `</form></div></div></div>`;

formId.innerHTML = printForm; 

let selectId = document.getElementById("ddlService");
let optionValue = ["0", "gift", "consult", "collection", "other"];
let optionText = ["Choose", "Find the perfect gift", "Consult with a Shimmer & Sparkle expert", "Discover our collections", "Other inquiries"];
/*let divSelect = document.createElement("div");
divSelect.setAttribute("class", "mb-3");
divSelect.appendChild(selectId);*/

/*let printSelect = "";

for(let i = 0; i < optionText.length; i++){
    printSelect += `<option value="${optionValue[i]}">${optionText[i]}</option>`;
}

printSelect += `<p class="formP mt-3 hide"></p>`;
printForm += printSelect;
selectId.innerHTML = printForm; */


//form check

function formProcessing(){
    var firstName = document.getElementById("fName");
    var lastName = document.getElementById("lName");
    var emailAddress = document.getElementById("email");
    var mobileNumber = document.getElementById("mobile");
    var ddlServices = document.getElementById("ddlService");
    var radioButton = document.getElementsByName("rbBook");
    var checkBox = document.getElementById("terms");

    var reFirstName = /^([A-ZČĆŽĐŠ][a-zčćžđš]{2,15})+$/;
    var reLastName = /^([A-ZČĆŽĐŠ][a-zčćžđš]{2,15})+$/;
    var reEmail = /^\w([\.-]?\w+\d*)*@\w+\.\w{2,6}$/;
    var reMobile = /^(\+381|[0])6[\d]{7,8}$/;
    
    checkReggex(reFirstName, firstName, "The first name is invalid. Example: Marijana");
    checkReggex(reLastName, lastName, "The last name is invalid. Example: Milanović");
    checkReggex(reEmail, emailAddress, "The email address is invalid. Example: marijanamilanovic@gmail.com");
    checkReggex(reMobile, mobileNumber, "The mobile number is invalid. Example: 0651234567");

    var ddlServicesValue = ddlServices.options[ddlServices.selectedIndex].value;
    var ddlServicesText = ddlServices.options[ddlServices.selectedIndex].text;

    if(ddlServicesValue == "0"){
        ddlServices.nextElementSibling.classList.remove("hide");
        ddlServices.nextElementSibling.innerHTML = "Choose a service.";
        error++;
    }
    else{
        ddlServices.nextElementSibling.classList.add("hide");
        ddlServices.nextElementSibling.innerHTML = "";
    }

    let radioValue = ""; 
    for(let i = 0; i < radioButton.length; i++){
        if(radioButton[i].checked){
            radioValue = radioButton[i].value;
            break;
        }
    }

    let checkboxValue = "";
    if(checkBox.checked){
        checkboxValue = checkBox.value;
    }

    checkRadio(radioValue, radioButton, "Choose something.");
    checkCheckedElements(checkboxValue, checkBox, "Accept the terms of use.");

    if(error == 0){
        let printForm = document.querySelector("#print");

        let print = `<p>First name: ${firstName.value}</p>
        <p>Last name: ${lastName.value}</p>
        <p>Email address: ${emailAddress.value}</p>
        <p>Mobile number: ${mobileNumber.value}</p>
        <p>Service: ${ddlServices}</p>
        <p>Appointment location: ${radioButton}</p>
        <p>Accept: ${checkBox}</p>`;

        printForm.innerHTML = print;

        document.getElementById("formBook").reset();
    }
}

function checkReggex(re, object, p){
    if(re.test(object.value)){
        object.nextElementSibling.classList.add("hide");
        object.nextElementSibling.innerHTML = "";
    }
    else{
        object.nextElementSibling.classList.remove("hide");
        object.nextElementSibling.innerHTML = p;
        error++;
    }
}

function checkRadio(elementValue, element, p){
    if(elementValue == ""){
        element[0].parentElement.parentElement.nextElementSibling.classList.remove("hide");
        element[0].parentElement.parentElement.nextElementSibling.innerHTML = p;
        error++;
    }
    else{
        element[0].parentElement.parentElement.nextElementSibling.classList.add("hide");
        element[0].parentElement.parentElement.nextElementSibling.innerHTML = "";
    }
}

function checkCheckedElements(elementValue, element, p){
    if(elementValue == ""){
        element.parentElement.nextElementSibling.classList.remove("hide");
        element.parentElement.nextElementSibling.innerHTML = p;
        error++;
    }
    else{
        element.parentElement.nextElementSibling.classList.add("hide");
        element.parentElement.nextElementSibling.innerHTML = "";
    }
}


//footer

let socials = document.getElementById("socials");

let socialsLink = ["facebook.com", "instagram.com", "sitemap.xml", "documentation.pdf"];
let socialsIcon = ["fab fa-facebook-f", "fab fa-instagram", "fas fa-sitemap", "far fa-file-pdf"];

let socialsPrint = `<div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>`;
                    
for(let i = 0; i < socialsIcon.length; i++){
    socialsPrint += `<a href="${socialsLink[i]}" class="me-4 text-reset colorhover" target="_blank">
                        <i class="${socialsIcon[i]}"></i>
                    </a>`;
}

socialsPrint += `</div>`;
socials.innerHTML = socialsPrint;


var footer = document.getElementById("footer");
var printFooter = `<div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">`;

var footerHeading = ["Shimmer & Sparkle", "Products", "Useful links", "Contact"];
var footerPages = ["Home", "Contact", "Author"];
var footerPagesLink = ["index.html", "contact.html", "author.html"];
var footerIcons = ["fas fa-home me-3", "fas fa-envelope me-3", "fas fa-phone me-3"];
var footerContact = ["Zdravka Čelara 16, Belgrade", "jewelry@shimmerandsparkle.com", "063 0142 992"];

for(let i = 0; i < footerHeading.length; i++){
        if(footerHeading[i] == 'Products'){
            printFooter += `<div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">${footerHeading[i]}</h6>`;
            for(let k = 0; k < submenuLink.length; k++){
                printFooter += `<p>
                                    <a href="${submenuLink[k]}" class="text-reset colorhover">${submenuText[k]}</a>
                                </p>`;
            }
            printFooter += `</div>`;
        }
        if(footerHeading[i] == 'Useful links'){
            printFooter += `<div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">${footerHeading[i]}</h6>`;
            for(let p = 0; p < footerPages.length; p++){
                printFooter += `<p>
                                    <a href="${footerPagesLink[p]}" class="text-reset colorhover">${footerPages[p]}</a>
                                </p>`;
            }
            printFooter += `</div>`;
        }
        if(footerHeading[i] == 'Contact'){
            printFooter += `<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">${footerHeading[i]}</h6>`;
            for(let z = 0; z < footerIcons.length; z++){
                printFooter += `<p><i class="${footerIcons[z]}"></i>${footerContact[z]}</p>`;
            }
            printFooter += `</div>`;
        }
        if(footerHeading[i] == 'Shimmer & Sparkle'){
            printFooter += `<div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>Shimmer & Sparkle
                                </h6>
                                <p>We're offering a wide selection of the most beautiful, high-quality handmade jewelry. Enjoy the exceptional offer of jewelry that we've selected for you.</p>
                            </div>`;
        }
}

printFooter += `</div></div>`;

footer.innerHTML = printFooter;


//scroll arrow

window.onscroll = function(){
    scroll();
}

function scroll() {
    var scrollArrow = $(window).scrollTop();

    if (scrollArrow >= 50) {
        $("#scroll").addClass("d-block");
        $("#scroll").removeClass("d-none");
        } 
    else {
        $("#scroll").removeClass("d-block");
        $("#scroll").addClass("d-none");
    }
}


//jQuery 

$(document).ready(function(){
    $(".navbar-light .navbar-nav .nav-link").hover(function(){
        $(this).css("color", "#7b7e7c");
        }, function(){
        $(this).css("color", "#494949");
    });
});

