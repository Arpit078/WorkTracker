const datebtn = document.getElementsByClassName("dates")
// function clicked(){
//     console.log("the button has been clicked")
//     // day1block.innerHTML = '<h1>hemlo</h1>'
//     // day1block.style.border : 2px solid black;

    

// }

function pop(){
    console.log("hemlo")
    const newDiv = document.createElement("div")
    const overlay = document.createElement("div")
    newDiv.classList.add("popup")
    overlay.classList.add("overlay")
    document.body.append(newDiv)
    document.body.append(overlay)
    overlay.addEventListener("click" , function remove(){
        document.body.removeChild(newDiv)
        document.body.removeChild(overlay)
    })
}

for (var i = 0; i < datebtn.length; i++) {
    datebtn[i].addEventListener('click', pop);
}
// one.addEventListener("click" , pop)