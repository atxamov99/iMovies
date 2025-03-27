function toggleVideo() {
    const trailer = document.querySelector(".trailer");
    const video = document.querySelector("video");

    video.pause();
    trailer.classList.toggle('active'); 
}


function changeBg(bg, title) {
    const banner = document.querySelector(".banner");
    const contents = document.querySelectorAll(".content");

    // Background rasm yo'lini to'g'irlash
    banner.style.background = `url("images/movies/${bg}") no-repeat center center/cover`;

    // Barcha contentlardan 'active' klassini olib tashlash
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Tanlangan kinoga tegishli contentni faollashtirish
    const activeContent = document.querySelector(`.content.${title}`);
    if (activeContent) {
        activeContent.classList.add('active');
    }
}


// Logout funksiyasi
const logoutButton = document.getElementById("logout");
if (logoutButton) {
    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("currentUser");
        window.location.href = "register.html"; // Login sahifasiga qaytarish
    });
}

function changeBg(bg, title) {
    const banner = document.querySelector(".banner");
    const contents = document.querySelectorAll(".content");

    banner.style.background = `url("../images/movies/${bg}")`;
    banner.style.backgroundSize = 'contain';  // 'cover' o'rniga 'contain'
    banner.style.backgroundPosition = 'center top'; // Pozitsiyani tekshirish uchun
    banner.style.backgroundRepeat = 'no-repeat';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}


function changeBg(bg, title) {
    const banner = document.querySelector(".banner");
    const contents = document.querySelectorAll(".content");

    if (title === "the-little-mermaid") {
        bg = "image.png"; 
    }

    if (title === "the-covenant") {
        bg = "the-covenant-title.jpg"; 
    }
    
    if (title === "the-tank") {
        bg = "the-tank-title.jpg"; 
    }

    if (title === "the-black-demon") {
        bg = "the-black-demon-blogroll.jpg"; 
    }

    if (title === "bg-65") {
        bg = "65-tirtle.jpg"; 
    }

    let imagePath = `../images/movies/${bg}`;
    console.log("Yangi Image Path:", imagePath);

    banner.style.backgroundImage = `url('${imagePath}')`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    banner.style.backgroundRepeat = 'no-repeat';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}
