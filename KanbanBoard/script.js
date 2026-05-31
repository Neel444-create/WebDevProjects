const cards= document.querySelectorAll(".card")
const lists= document.querySelectorAll(".list")

for (const card of cards){
    card.addEventListener("dragstart",dragStart)
    card.addEventListener("dragend",dragEnd)
}

for(const list of lists) {
    list.addEventListener("dragover",dragOver)
    list.addEventListener("dragenter",dragEnter)
    list.addEventListener("dragleave",dragLeave)
    list.addEventListener("drop",dragDrop)
}

function dragStart(e){
    //this allows the drop location to konw which element is moved when you release it.
    e.dataTransfer.setData("text/plain",this.id)
}

function dragEnd(){
   console.log("Drag Ended")
}

function dragOver(e){
    //thisline is important because by dfault browsers dont allow you to deop elements on to other elements.
    e.preventDefault()
}

function dragEnter(e){
    e.preventDefault();

    this.classList.add("over");
}


function dragLeave(e){

    this.classList.remove("over");
}

function dragDrop(e){
    const id = e.dataTransfer.getData("text/plain")

    const card = document.getElementById(id)

    this.appendChild(card)

    this.classList.remove("over")
}

