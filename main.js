let input = document.getElementById("input")
let photo = document.querySelector(".photo")

let img = document.createElement("img")
photo.append(img)

let array = ["bmw", "dog", "home", "mercedes"]

input.addEventListener("input", (e) => {

    if (array.includes(e.target.value)) {
        img.setAttribute("src", `image/${e.target.value}.jpeg`)
    }
    else {
        img.setAttribute("src", "image/noimage.jpeg")
    }
})


