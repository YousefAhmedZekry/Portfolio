/* Start Loading */
const loadingPage = document.getElementById("loading-page");
loadingPage.innerHTML = `
    <div class="loading">
        <div class="loading-overlay"></div>
        <span class="light"></span>
    </div>
`;

function removeLoadingPage() {
    loadingPage.classList.add("none");
    setTimeout(() => {
        loadingPage.remove();
    }, 1000);
};

if (window.localStorage.firstLoad) {
    loadingPage.remove();
} else {
    var loading = setTimeout(() => {
        removeLoadingPage();
    }, 1500);
    window.localStorage.firstLoad = 1;
};


/* Start Header */
const myHeaderEle = document.getElementById("header"); // Header
// myHeaderEle.classList.add("box-shadow");

// PaddingTop Dynamic => Body
document.body.style.paddingTop = `${myHeaderEle.offsetHeight * 2 + 4}px`;

// window.addEventListener("scroll" ,() => {
//     if (window.scrollY >= 50) {
//         myHeaderEle.classList.add("box-shadow");
//     } else {
//         myHeaderEle.classList.remove("box-shadow");
//     };
// });

// window.onload = function () {
//     if (window.scrollY >= 100) {
//         myHeaderEle.classList.add("box-shadow");
//     };
// };

const myContainerEle = document.createElement("div"); // Header => Container
myContainerEle.id = "container";
myContainerEle.className = "container";
myHeaderEle.appendChild(myContainerEle);
const myContainer = document.getElementById("container");

const myContentEle = document.createElement("div"); // Header => Container Ele => Content
myContentEle.id = "content";
myContentEle.className = "content";
myContainer.appendChild(myContentEle);
const myContent = document.getElementById("content");

const myLogoEle = document.createElement("div"); // // Header => Container Ele => Content Ele => Logo
myLogoEle.id = "logo";
myLogoEle.className = "logo";
myContent.appendChild(myLogoEle);
const myLogo = document.getElementById("logo");

const myLogoHeadingEle = document.createElement("a"); // Logo Ele => A
myLogoHeadingEle.href = "index.html";
myLogoHeadingEle.id = "logo-heading";
myLogoHeadingEle.className = "logo-heading";
myLogo.appendChild(myLogoHeadingEle);
const myLogoHeading = document.getElementById("logo-heading");

myLogoHeading.innerHTML = `PortFolo`;

const myNavEle = document.createElement("nav"); // Header => Container Ele => Content Ele => Nav
myNavEle.id = "nav";
myNavEle.className = "nav";
myContent.appendChild(myNavEle);
const myNav = document.getElementById("nav");

const myIconBarsEle = document.createElement("div"); // Nav => IconBars
myIconBarsEle.id = "i-bars";
myIconBarsEle.className = "i-bars";
myIconBarsEle.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
`;
myNav.appendChild(myIconBarsEle);
const myIconBars = document.getElementById("i-bars");

const myUlEle = document.createElement("ul"); // Nav => Ul
myUlEle.id = "nav-links";
myUlEle.className = "nav-links";
myNav.appendChild(myUlEle);
const myUl = document.getElementById("nav-links");

const myCloseIconEle = document.createElement("div"); // Nav => Ul => IconClose
myCloseIconEle.id = "i-close";
myCloseIconEle.className = "i-close";
myCloseIconEle.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
    </svg>
`;
myUl.appendChild(myCloseIconEle);
const myCloseIcon = document.getElementById("i-close");

myIconBars.addEventListener("click", () => { // Nav => IconBars On Click => Toggle ClassList => Poistion Left
    myUl.classList.toggle("position-left");
    // myUl.style.left = "-100%";
});

myCloseIcon.addEventListener("click", () => { // Nav => IconClose On Click => Toggle ClassList Remove => Poistion Left
    myUl.classList.remove("position-left");
});

const myIconSettingEle = document.createElement("div"); // Nav => IconSetting
myIconSettingEle.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
    </svg>
`;
myIconSettingEle.className = "i-setting";
myIconSettingEle.setAttribute("id", "i-setting");
myNav.appendChild(myIconSettingEle);

for (let i = 0; i < 5; i++) {
    var navItem = document.createElement("li"); // Nav => Ul => Li
    navItem.classList.add("nav-item");
    myUl.appendChild(navItem);

    var navLink = document.createElement("a"); // Nav => Ul => Li => A
    navLink.classList.add("nav-link");
    navLink.href = "#";
    navItem.appendChild(navLink);
};

let myLinks = Array.from(document.querySelectorAll(".nav-links .nav-link")); //  Active Class Funcion

myLinks[0].textContent = "Home";
myLinks[0].setAttribute("data-to", "home");
myLinks[0].classList.add("active");
myLinks[1].textContent = "About";
myLinks[1].setAttribute("data-to", "about");
myLinks[2].textContent = "Work";
myLinks[2].setAttribute("data-to", "work");
myLinks[3].textContent = "Services";
myLinks[3].setAttribute("data-to", "services");
myLinks[4].textContent = "Contact";
myLinks[4].setAttribute("data-to", "contact");

myLinks.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        myLinks.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.target.classList.add("active");
        window.scrollTo({
            top: document.getElementById(`${ele.dataset.to}`).offsetTop - 70,
            behavior: "smooth",
        });
        e.preventDefault();
    });
});

/* Top Button */
const topButtonEle = document.createElement("div"); // Scroll To Top
topButtonEle.className = "top-button";
topButtonEle.classList.add("translate");
topButtonEle.id = "top-button";
document.body.appendChild(topButtonEle);
const topButton = document.getElementById("top-button")
topButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
    <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
    </svg>
`;

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        topButtonEle.classList.remove("translate");
    } else {
        topButtonEle.classList.add("translate");
    };
});

/* Start Home */
const home = document.getElementById("home"); // Home

const containerHome = document.createElement("div"); // Home => Container
containerHome.className = "container";
containerHome.id = "container";
home.appendChild(containerHome);

const contentHome = document.createElement("div"); // Home => Container => Content
contentHome.className = "content";
contentHome.id = "content";
containerHome.appendChild(contentHome);

for (let c = 0; c < 2; c++) { // Home => Container => Content => Col
    const col = document.createElement("div");
    col.className = "col";
    col.id = "col";
    contentHome.appendChild(col);
};

const dataHome = document.createElement("div"); // Content => Col => Data Home
dataHome.className = "data-home";
dataHome.id = "data-home";
contentHome.children[0].appendChild(dataHome);

dataHome.innerHTML = `
    <div class="hi">
        <h1>Hi,</h1>
        <div class="line"></div>
    </div>
    <div class="name">
        <h1>I'am <span class="spc-color">Yousef_Ahmed</span></h1>
    </div>
    <h1>Full Stack Web Developer</h1>
    <div class="button">
        <button>Contact</button>
    </div>

`; // Data Home => Inner HTML

const imgHome = document.createElement("div"); // Content => Col => Image
imgHome.className = "image-home";
imgHome.id = "image-home";
contentHome.children[1].appendChild(imgHome);

imgHome.innerHTML = /*Image Home => Inner HTML*/ ` 
    <div class="image">
    <img src="img/img-home.svg" alt="">
    </div>
`;

const homeLinks = document.createElement("ul"); // Content => Col[0] => Links
homeLinks.className = "home-links";
homeLinks.id = "home-links";
contentHome.children[1].appendChild(homeLinks);
homeLinks.innerHTML = `
    <li><a href="#" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
    </a></li>
    <li><a href="#" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
    </a></li>
    <li><a href="#" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
    </a></li>
    <li><a href="#" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
        </svg>
    </a></li>
`;

/* Start About */
const about = document.getElementById("about"); // Home

const containerAbout = document.createElement("div"); // Home => Container
containerAbout.className = "container";
containerAbout.id = "container";
about.appendChild(containerAbout);

const titleDiv = document.createElement("div");
titleDiv.className = "title-about";
titleDiv.id = "title-about";
containerAbout.appendChild(titleDiv);

const contentAbout = document.createElement("div"); // Home => Container => Content
contentAbout.className = "content";
contentAbout.id = "content";
containerAbout.appendChild(contentAbout);

const titletH1 = document.createElement("h1"); // Container => Content
titletH1.textContent = "About";
titletH1.classList.add("main-title");
titleDiv.appendChild(titletH1);

const imageAbout = document.createElement("image"); // Container => Content => Image
imageAbout.className = "about-image"
imageAbout.id = "about-image";
imageAbout.innerHTML = `<img src="img/about.png" alt="">`;
contentAbout.appendChild(imageAbout);

const aboutData = document.createElement("div"); // Container => Content => About Data
aboutData.className = "about-data";
aboutData.id = "about-data";
contentAbout.appendChild(aboutData);

aboutData.innerHTML /* Content => About Data => Data Text */ = ` 
    <h1 class="title-about">I'am Yousef</h1>
    <p class="text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla harum delectus
    a provident, voluptates commodi, quaerat libero ut mollitia earumdoloribus
    nesciunt? Architecto modi velit quis possimus aut aperiam.
    </p>
`;

const bulleteUl = document.getElementById("position");
const bulletesTop = Array.from(document.querySelectorAll(".position > li")); // Position Top Bulletes

bulleteUl.innerHTML = `
    <li data-top="home" class="active"></li>
    <li data-top="about"></li>
    <li data-top="skills"></li>
    <li data-top="work"></li>
`;

console.log(bulleteUl);

bulletesTop.forEach((ele) => {
   ele.addEventListener("click", () => {
       window.scrollTo({
           top: document.getElementById(`${ele.dataset.top}`).offsetTop - 70,
           behavior: "smooth"
       });
       bulletesTop.forEach((ele) => {
           ele.classList.remove("active");
       });
       ele.classList.add("active");
   });
});

window.onscroll = () => {
    bulletesTop.forEach((ele) => {
        ele.classList.remove("active");
    });
};

const skills = document.getElementById("skills"); // Skills

const skillsTitle = document.createElement("div"); // Skills => Title
skillsTitle.className = "skills-title";
skillsTitle.id = "skills-title";
skills.appendChild(skillsTitle);

const skillsTitleH1 = document.createElement("h1"); // Skills => Title => H1
skillsTitleH1.className = "main-title";
skillsTitleH1.textContent = "Skills";
skillsTitle.appendChild(skillsTitleH1);

// const subSkills = document.createElement("");

console.log();