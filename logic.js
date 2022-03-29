//creating elements in dom with js tutorial : https://www.youtube.com/watch?v=umHdBuTw98c


const datebtn = document.getElementsByClassName("dates")
const t = document.getElementById("todo")
const overlay = document.querySelector(".overlay")
var todoadd = document.getElementById("addBtn")
var todoInput = document.querySelector("#myInput")
var todoList = document.querySelector('ul')
// function clicked(){
//     console.log("the button has been clicked")
//     // day1block.innerHTML = '<h1>hemlo</h1>'
//     // day1block.style.border : 2px solid black;

    

// }

function pop(){
    // console.log("hemlo")
    // const newDiv = document.createElement("div")
    // const overlay = document.createElement("div")
    // newDiv.innerHTML = t
    // newDiv.classList.add("popup")
    // overlay.classList.add("overlay")
    // VanillaTilt.init(newDiv, {
	// 	max: 5,
	// 	speed: 800
	// })
    // document.body.append(newDiv)
    // document.body.append(overlay)
    // // newDiv.innerHTML = "<div class="container"><div class="head"><h1>hello</h1></div><div class="body"><h2>this is supposed to have content</h2></div></div>"
    // overlay.addEventListener("click" , function remove(){
    //     document.body.removeChild(newDiv)
    //     document.body.removeChild(overlay)
    // })
    t.style.display = "block"
    overlay.style.display = "block"
    

}
function closeModal(){
    t.style.display = "none"
    overlay.style.display = "none"


}

for (var i = 0; i < datebtn.length; i++) {
    datebtn[i].addEventListener('click', pop);
}
//adding elements in the todo list
function editList(){
    newToDo = document.createElement("li")
    var inputValue =  todoInput.value 
    // console.log(inputValue)
    
    if(inputValue === ""){
        return
    }
    else{
        newToDo.innerHTML= inputValue //+ "<img src=\"images/delete.png\"alt=\"\" width=\"20px\" height=\"20px\" id= \"del\"style= \"position:relative;left:30px;top:2px\">"
        newToDo.draggable = "true"
        newToDo.id = "helped"
    }
    
    newToDo.classList.add("todoElements")
    todoList.appendChild(newToDo)
    todoInput.value=""
    // newToDo.addEventListener("onclick" , newToDo.classList.add("checked"))

}


todoList.addEventListener("click" , function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked")
        checkedArray = [...document.getElementsByClassName("checked")]
        total = document.getElementsByTagName("li")
        checkedNumber = checkedArray.length
        totalNumber = total.length
        console.log(totalNumber , checkedNumber)
        percentComplete = checkedNumber/totalNumber
        let commonGuys = document.getElementsByClassName("common")
        let darkGuys = document.getElementsByClassName("darkest")
        let lightGuys = document.getElementsByClassName("lightest")
        if(percentComplete>= 0.4){
            // commonGuys[1].style.backgroundColor = "blue"
            for (var i = 0; i < commonGuys.length; i++) {
                commonGuys[i].style.backgroundColor = "rgb(33, 206, 76)"
            }
            
        }
        if(percentComplete>= 0.8){
            // commonGuys[1].style.backgroundColor = "blue"
            for (var i = 0; i < darkGuys.length; i++) {
                darkGuys[i].style.backgroundColor = "rgb(7, 82, 26)"
                darkGuys[i].style.border = "solid rgb(4, 48, 15)"
            }
            
        }
        if(percentComplete>= 0.1){
            // commonGuys[1].style.backgroundColor = "blue"
            for (var i = 0; i < lightGuys.length; i++) {
                lightGuys[i].style.backgroundColor = "rgb(129, 241, 157)"
                lightGuys[i].style.border = "solid rgb(85, 158, 103)"
            }
            
        }

        else{
            for (var i = 0; i < 10000 ; i++) {
                commonGuys[i].style.backgroundColor = "white"
                lightGuys[i].style.backgroundColor = "white"
                darkGuys[i].style.backgroundColor = "white"
            }

        }
        
    }
},false)

//adding checked strikethrough for element when done
// var listItem = document.querySelector(".todoElements")
// function checked(){listItem.classList.toggle("checked")}
// for (var i = 0; i < listItem.length; i++) {
//     listItem[i].addEventListener('click', checked())}


// window.addEventListener("keydown", function enter(evt){
//     if(evt.key = "Enter"){
//         console.log("pressed enter")
//         editList()
//         todoInput.value = ""
//     }
//     else{
//         return
//     }

// })



//adding elements in the todo with enter
todoInput.addEventListener("keyup" , e => {
    e.preventDefault()
    if(e.keyCode === 13){
        console.log("pressed Enter")
        editList()

    }
        
})
//add delete functionality with drag and drop
dustbin = document.querySelector("#dustbin")
todoList.addEventListener("dragstart" , function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.add("dragging")
        dustbin.style.display = "block"
    }
},false)
todoList.addEventListener("dragend" , function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.remove("dragging")
        // dustbin.style.display = "none"

    }
},false)
dustbin.addEventListener("dragover" , function(e){
    e.preventDefault()
    dustbin.style.transform = "scale(1.1)"
    const currentdrag = document.querySelector(".dragging")
    todoList.removeChild(currentdrag)
    // currentdrag.style.display = "none"
    
    // 
    
})
dustbin.addEventListener("dragleave" , ()=>{
    const currentdrag = document.querySelector(".dragging")
    dustbin.style.transform = "scale(1)"
    currentdrag.style.display = "block"
    // dustbin.style.display = "none"

})
// const otherTodo = [...document.querySelectorAll("ul:not(.dragging)")]
// for (var i = 0; i < otherTodo.length; i++) {
//     otherTodo[i].addEventListener('dragover', function(event){
//         event.preventDefault()
//         console.log("working")
//         const currentdrag = document.querySelector(".dragging")
//         currentdrag.style.left = otherTodo.style.left
//         currentdrag.style.top = otherTodo.style.top
//         });
// }

//function for progress bar
// let checkedArray = [...document.getElementsByClassName("checked")]
// console.log(checkedArray)






