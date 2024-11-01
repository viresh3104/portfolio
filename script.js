const menuIcon = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav-links');


// on click menu will be displayed
menuIcon.onclick = () => {
    navlinks.classList.toggle('active');
}

// on click menu will be collapsed
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
        navlinks.classList.remove('active');
    }
});


//on click of the download cv
const downloadCV = document.querySelector('#download-cv');
