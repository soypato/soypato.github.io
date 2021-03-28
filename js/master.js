let wallpaper = Math.random() * 100;
let wallImg = document.querySelector(".wallImg")


const randomWall = () => {
    if (wallpaper >= 0 && wallpaper <= 33.3) {
        wallImg.setAttribute("src", "https://i.ibb.co/56j9xS1/code-1839406-1920.jpg")
    } else if (wallpaper >= 33.3 && wallpaper <= 66.6) {
        wallImg.setAttribute("src", "https://i.ibb.co/jgmVg71/coding-1853305-1280.jpg")
    } else {
        wallImg.setAttribute("src", "https://i.ibb.co/23dDvGs/technology-1283624-1280-1.jpg")
    }
}

randomWall()