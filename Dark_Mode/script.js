const input = document.querrySelector(".input");

const body = document.querrySelector("body");

input.checked = JSON.parse (localStorage.getItem("mode"));

updateBody();

let updateBody = () => {
    if (input.checked) {
        body.style.background = "black";
    }else{
        body.style.background = "white";
    }
}

input.addEventListener(".input", ()=> {
    updateBody();
    updateStorage();
})

let updateStorage = () => {
    localStorage.setItem("mode", JSON.stringify(input.checked));
}