
// ============ dark mode toggle button ======================

let toggleBtn = document.querySelector(".right-profile");
let toggleButton = document.querySelector("#toggle-btn")
let check = 1;

toggleButton.addEventListener("click", function () {

    if (check == 1) {
        toggleBtn.style.display = "flex";
        toggleBtn.style.justifyContent = "flex-end";
        toggleBtn.style.backgroundColor = "#003b9b";

        check = 0;

    } else {
        toggleBtn.style.display = "flex";
        toggleBtn.style.justifyContent = "flex-start";
        toggleBtn.style.backgroundColor = "#999999";

        check = 1;
    };
});

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme")
})





// ============= right section toggle ==========================

let rightSection = document.querySelector(".right-section");
let rightBtn = document.querySelector("#right-btn");

rightBtn.addEventListener("click", function () {
    rightSection.classList.toggle("right-section-toggle")
})



document.querySelector("#img-btn").addEventListener("click", function () {

    let profileContainer = document.querySelector(".profile-container");

    profileContainer.classList.toggle("profile-container-show")
})


// ============= form section ===============================

document.querySelector("#login-btn").addEventListener("click", function () {
    document.querySelector(".form-container").classList.add("showLogin")
});

document.querySelector("#cancel").addEventListener("click", function () {
    document.querySelector(".form-container").classList.remove("showLogin")
})

document.querySelector("#sign-in-btn").addEventListener("click", function () {
    document.querySelector("#sign-in-section").classList.add("showLogin");

    document.querySelector(".form-container").classList.remove("showLogin")
})

document.querySelector("#cancel-two").addEventListener("click", function () {
    document.querySelector("#sign-in-section").classList.remove("showLogin")
})

document.querySelector("#sign-up-btn").addEventListener("click", function () {
    document.querySelector(".form-container").classList.add("showLogin");
    document.querySelector("#sign-in-section").classList.remove("showLogin");


})

// ============== post card coading start =======================

let likebtn = document.querySelector("#like-btn");
let like = document.querySelector("#like");
let a = 199;

likebtn.addEventListener("click", function () {
    a++;
    like.innerHTML = a;
    likebtn.style.display = "none";
    document.querySelector("#like-btn1").style.display = "block"
});

document.querySelector("#like-btn1").addEventListener("click", function () {
    a++;
    like.innerHTML = a;
});

// -------- two box ====================

let likebtnone = document.querySelector("#like-btn-one");
let likeone = document.querySelector("#like-one");
a = 249;

likebtnone.addEventListener("click", function () {
    a++;
    likeone.innerHTML = a;
    likebtnone.style.display = "none";
    document.querySelector("#like-btn1-one").style.display = "block"
});

document.querySelector("#like-btn1-one").addEventListener("click", function () {
    a++;
    likeone.innerHTML = a;
});





