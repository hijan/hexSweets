const emptyHeart = document.querySelectorAll(".fa-heart");
emptyHeart.forEach(e => {
    e.addEventListener("click", function () {
        $(this).toggleClass("fas far");
    });
});
