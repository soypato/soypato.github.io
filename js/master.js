let wallpaper = Math.random() * 100;
let wallImg = document.querySelector(".wallImg")


const randomWall = () => {
    if (wallpaper >= 0 && wallpaper <= 33.3) {
        wallImg.setAttribute("src", "img/code-1839406_1920.jpg")
    } else if (wallpaper >= 33.3 && wallpaper <= 66.6) {
        wallImg.setAttribute("src", "img/technology-1283624_1280 (1).jpg")
    } else {
        wallImg.setAttribute("src", "img/coding-1853305_1280.jpg")
    }
}

randomWall()