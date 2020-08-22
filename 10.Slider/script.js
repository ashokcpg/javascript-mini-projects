// Setting the date dynamically...

const date = document.getElementById('date');
date.innerText = new Date().getFullYear();

// Setting toggler width dynamically...

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
//    console.log('clicked...') ;
    //This will present issues if we add more links...
    // linksContainer.classList.toggle('show-links');

    //*** linksContainer.getBoundingClientRect() will return size of  ***///
    //*** an element and its position relative to the viewport... ***///

    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(containerHeight);
    
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }
});

// Fixed NavBar
/* pageYOffset is a read-only window property that returns the number of pixels the document has been scrolled vertically... */

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');


window.addEventListener('scroll', function(){
    // console.log(window.pageYOffset);

    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    }
    else{
        topLink.classList.remove('show-link');
    }
});

// Smooth correct scrolling...
// selecting links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
    link.addEventListener('click',function(e){
        e.preventDefault();

        // navigate to specific spot..

        // slice extracts a section of a string without modifying original string...
        const id = e.currentTarget.getAttribute('href').slice(1);
        // console.log(id);

        const element = document.getElementById(id);
        // calculate the heights

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');

        let position = element.offsetTop - navHeight - 20;

        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }

        // console.log(position);

        window.scrollTo({
            left:0,
            top: position,
        });

        linksContainer.style.height = 0;

    });
});
