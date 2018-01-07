document.addEventListener("DOMContentLoaded", function() {

    // Coin flipping

    var coin = document.querySelector(".coin");

    coin.addEventListener("mousedown", function() {
        this.classList.add("flip");
    });
    coin.addEventListener("mouseup", function() {
        this.classList.remove("flip");
    })

});