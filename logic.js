const datebtn = document.getElementsByClassName("dates")
const t = document.getElementById("todo").innerHTML
// function clicked(){
//     console.log("the button has been clicked")
//     // day1block.innerHTML = '<h1>hemlo</h1>'
//     // day1block.style.border : 2px solid black;

    

// }

function pop(){
    console.log("hemlo")
    const newDiv = document.createElement("div")
    const overlay = document.createElement("div")
    newDiv.innerHTML = t
    newDiv.classList.add("popup")
    overlay.classList.add("overlay")
    VanillaTilt.init(newDiv, {
		max: 5,
		speed: 800
	})
    document.body.append(newDiv)
    document.body.append(overlay)
    // newDiv.innerHTML = "<div class="container"><div class="head"><h1>hello</h1></div><div class="body"><h2>this is supposed to have content</h2></div></div>"
    overlay.addEventListener("click" , function remove(){
        document.body.removeChild(newDiv)
        document.body.removeChild(overlay)
    })
}

for (var i = 0; i < datebtn.length; i++) {
    datebtn[i].addEventListener('click', pop);
}
// one.addEventListener("click" , pop)