// var navvv = document.getElementById("navbar");

// window.onscroll = function () {

// 	if (window.pageYOffset > 200) {

// 		navvv.style.background = "#000000";
// 		navvv.style.boxShadow = "0px 4px 2px rgba(0,0,0,.5)";
// 	}
// 	else {
// 		navvv.style.background = "transparent";
// 		navvv.style.boxShadow = "none";
// 	}
// }

// /* Code for changing active 
//   link on clicking */
// var btns =
//     $("#topheader .navbar-nav .nav-link");

// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click",
//         function () {
//             var current = document
//                 .getElementsByClassName("active");

//             current[0].className = current[0]
//                 .className.replace(" active", "");

//             this.className += " active";
//         });
// }

// /* Code for changing active 
// link on Scrolling */
// $(window).scroll(function () {
//     var distance = $(window).scrollTop();
//     $('section').each(function (i) {

//         if ($(this).position().top
//             <= distance + 250) {

//             $('.navbar-nav a.active')
//                 .removeClass('active');

//             $('.navbar-nav a').eq(i)
//                 .addClass('active');
//         }
//     });
// }).scroll();


// !(function($) {
//     "use strict";
// // Navigation active state on scroll
// var nav_sections = $('section');
// var main_nav = $('#topheader');

// $(window).on('scroll', function() {
//   var cur_pos = $(this).scrollTop() + 200;

//   nav_sections.each(function() {
//     var top = $(this).offset().top,
//       bottom = top + $(this).outerHeight();

//     if (cur_pos >= top && cur_pos <= bottom) {
//       if (cur_pos <= bottom) {
//         main_nav.find('li').removeClass('active');
//       }
//       main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
//     }
//     if (cur_pos < 300) {
//       $("#topheader ul:first li:first").addClass('active');
//     }
//   });
// });

// })(jQuery);





let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let signupForm = document.querySelector('.signup-form-container');
let otpForm = document.querySelector('.otp-container');
let resetPassword = document.querySelector('.reset-password-container');
let forgetPassword = document.querySelector('.forget-password-container');
let formClose = document.querySelector('#form-close');
let signupClose = document.querySelector('#signup-close');
let forgetClose = document.querySelector('#forget-close');
let otpClose = document.querySelector('#otp-close');
let resetClose = document.querySelector('#reset-close');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

signupClose.addEventListener('click', () => {
    signupForm.classList.remove('active');
});

forgetClose.addEventListener('click', () => {
    forgetPassword.classList.remove('active');
});

otpClose.addEventListener('click', () => {
    otpForm.classList.remove('active');
});

resetClose.addEventListener('click', () => {
    resetPassword.classList.remove('active');
});

loginBtn.addEventListener('click', () => {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
});

function signup() {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
}
function login() {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
}
function forget() {
    loginForm.classList.remove('active');
    forgetPassword.classList.add('active');
}
function otp() {
    otpForm.classList.add('active');
    forgetPassword.classList.remove('active');
    resetPassword.classList.remove('active');
}
function reset() {
    otpForm.classList.remove('active');
    resetPassword.classList.add('active');
}