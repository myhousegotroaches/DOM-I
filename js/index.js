const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let nav = document.querySelectorAll("a");
nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];

const wholeNav = document.querySelector("nav");
const addAppends = document.createElement("a");
addAppends.href = "www.gooogle.com";
addAppends.textContent = "test";
addAppends.style.color = "green";
wholeNav.append(addAppends);

const addprepend = document.createElement("a");
addprepend.href = "www.gooogle.com";
addprepend.textContent = "test1";
addprepend.style.color = "green";
wholeNav.prepend(addprepend);

for (let i = 0; i < nav.length; i++) {
  nav[i].style.color = "green";
}

const bigLogoImg = document.querySelector(".cta img");
bigLogoImg.src = siteContent.cta["img-src"];

const mainTextCenter = document.querySelector(".cta-text h1");
mainTextCenter.textContent = siteContent.cta.h1;
const mainButton = document.querySelector(".cta-text button");
mainButton.textContent = siteContent.cta.button;

const middleSlabPic = document.querySelector(".main-content img");
middleSlabPic.src = "img/mid-page-accent.jpg";

let middleTextH4 = document.querySelectorAll(".text-content h4");
middleTextH4[0].textContent = siteContent["main-content"]["features-h4"];
middleTextH4[1].textContent = siteContent["main-content"]["about-h4"];
middleTextH4[2].textContent = siteContent["main-content"]["services-h4"];
middleTextH4[3].textContent = siteContent["main-content"]["product-h4"];
middleTextH4[4].textContent = siteContent["main-content"]["vision-h4"];

let middleTextP = document.querySelectorAll(".text-content p");
middleTextP[0].textContent = siteContent["main-content"]["features-content"];
middleTextP[1].textContent = siteContent["main-content"]["about-content"];
middleTextP[2].textContent = siteContent["main-content"]["services-content"];
middleTextP[3].textContent = siteContent["main-content"]["product-content"];
middleTextP[4].textContent = siteContent["main-content"]["vision-content"];

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];

const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

const footerText = document.querySelector("footer");
footerText.textContent = siteContent.footer.copyright;
