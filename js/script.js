let thumbnail = document.getElementsByClassName("thumbnail");
let slider = document.getElementById("slider");
let leftButton = document.getElementById("left-slide");
let rightButton = document.getElementById("right-slide");

leftButton.addEventListener("click", function () {
    slider.scrollLeft -= 125;
});

rightButton.addEventListener("click", function () {
    slider.scrollLeft += 125;
});

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

function autoPlay() {
    if (slider.scrollLeft > maxScrollLeft - 1) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}

let play = setInterval(autoPlay, 50);

for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener("mouseover", () => {
        clearInterval(play);
    });
    thumbnail[i].addEventListener("mouseout", () => {
        return (play = setInterval(autoPlay, 50));
    });
}
