
const imageVar = document.getElementById("image");

const imageArrays = ["./image/slid5.jpg", "./image/slid6.jpg", "./image/slid 1.webp", 
"./image/slid 2.webp", "./image/slid 3.webp", "./image/slid 4.webp"]

let imageIndex = 0

function slideShow(){
    imageVar.setAttribute("src", imageArrays[imageIndex])
    imageIndex++

    if(imageIndex >= imageArrays.length){
        imageIndex = 0
    }
}

setInterval(slideShow, 6000)