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
        dustbin.style.display = "none"

    }
},false)
dustbin.addEventListener("dragover" , ()=>{
    dustbin.style.transform = "scale(1.5)"
    const currentdrag = document.querySelector(".dragging")
    todoList.removeChild(currentdrag)

})