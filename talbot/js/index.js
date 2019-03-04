// Video Switch Script
var windowHeight = $(window).height();
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > windowHeight * 3.3) {
            $(".videoThree").fadeIn(100);
        }
        else if ($(this).scrollTop() > windowHeight * 1.1) {
            $(".videoTwo").fadeIn(100);
            $(".videoThree").fadeOut(100);
        }
        else {
            $(".videoTwo").fadeOut(100);
            $(".videoThree").fadeOut(100);
        }
    });
});

// Vanish
console.log(windowHeight);
$(window).scroll(function () {
    $(".top").css("opacity", 1 - $(window).scrollTop() / 150);
});

// Veggie Burger Icon
let menuIcon = document.querySelector(".menuIcon");
let nav = document.querySelector(".overlay-menu");
menuIcon.addEventListener("click", () => {
    if (nav.style.transform != "translateX(0%)") {
        nav.style.transform = "translateX(0%)";
        nav.style.transition = "transform 0.2s ease-out";
    }
    else {
        nav.style.transform = "translateX(-100%)";
        nav.style.transition = "transform 0.2s ease-out";
    }
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
$(document).ready(function () {
    $('#lightgallery').lightGallery();
});

// Cache selectors
var lastId
    , topMenu = $("#top-menu")
    , topMenuHeight = topMenu.outerHeight() + 15
    , // All list items
    menuItems = topMenu.find("a")
    , // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });
// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
    var href = $(this).attr("href")
        , offsetTop = href === "#" ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;
    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});

$('#captions').lightGallery();

AOS.init();