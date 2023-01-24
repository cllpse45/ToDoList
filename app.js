
let addTobtn = document.getElementById("addTo");
let inputData = document.getElementById("inputData");
let sticker = document.getElementById("sticker");

addTobtn.addEventListener("click", addButton)

function addButton(){
    console.log(inputData.value);
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputData.value;

    sticker.appendChild(paragraph);

    paragraph.addEventListener("click", silme)
    function silme (){
        paragraph.style.textDecoration="line-through";
    }
    
    //if you double clicked you can remove selected paragraph
    
    paragraph.addEventListener("dblclick", remove)
    function remove(){
        sticker.removeChild(paragraph);
    }


}

