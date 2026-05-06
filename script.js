const contents = [
  {
    title: "Discover innovative ways to decorate",
    text:`We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`,
    imgDesktop: "images/desktop-image-hero-1.jpg",
    imgMobile:"images/mobile-image-hero-1.jpg",
    link:"#1"
  },
  {
    title:"We are available all across the globe",
    text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
    imgDesktop: "images/desktop-image-hero-2.jpg",
    imgMobile:"images/mobile-image-hero-2.jpg",
    link:"#2"
  },
  {
    title:"Manufactured with the best materials",
    text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
    imgDesktop: "images/desktop-image-hero-3.jpg",
    imgMobile:"images/mobile-image-hero-3.jpg",
    link:"#3"
  }
];

const icon = "images/icon-hamburger.svg"
const close = "images/icon-close.svg"

function toggleHam(x){
  const nav = document.querySelector('.menu');
  const menulist = document.getElementById('my-menu');
  if(x.src.includes(icon)){
    x.src = close;
    nav.classList.add('active');
    menulist.classList.add('active')
  }else{
    x.src = icon;
    nav.classList.remove('active');
    menulist.classList.remove('active')
  }
}

let currentIndex = 0;

const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const title = document.getElementById('title');
const text = document.getElementById('text-info');
const link = document.getElementById('shop-link');
const mainBox = document.querySelector('.main-box');


function updateContent(index) {
  title.innerText = contents[index].title;
  text.innerText = contents[index].text;
  link.href = contents[index].link;
  mainBox.style.setProperty('--bgDesktop', `url("${contents[index].imgDesktop}")`);
  mainBox.style.setProperty('--bgMobile', `url("${contents[index].imgMobile}")`);
}

btnRight.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= contents.length) {
    currentIndex = 0; 
  }
  updateContent(currentIndex);
});

btnLeft.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = contents.length - 1; 
  }
  updateContent(currentIndex);
});

updateContent(currentIndex);