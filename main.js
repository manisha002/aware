
let input = document.querySelector('#add-habit');   //points to input from the element with id: habit-input

let dynamicList = document.querySelector('#dynamic-list'); //points to the dunamic list id

function hide()  {  //hides an element on load

    document.getElementById("habit-input").style.visibility="hidden";  
    
}

function addNewHabit(){  //makes the main input element visible //not used right 

    document.getElementById("add-habit").style.visibility="visible";

}


input.addEventListener('keyup', (e) => {  //Listen to Enter

    if (e.key === "Enter"){
        handleEnter(e.target.value);   
        document.getElementById("add-habit").value = null;
             
    }
});

const handleEnter = (text) => {

    if(!text) return;    //if there's no text, return immediately
    let box = createElement("div", "habit-component", randID(6)); //otherwise, create a button element
    //box.innerText = text; //add the input text inside the button
    box.createContainer(text)
    dynamicList.appendChild(box); //append to the dynamic list
};

function createContainer(text){

    let mainCon = createElement("button","input-name", randID(6));
    mainCon.innerText = text;
    box.appendChild(mainCon);

}


function randID(length) {  //creates a random ID
    return [...Array(length)]
      .map((_) => ((Math.random() * 36) | 0).toString(36))
      .join(``)
      .toUpperCase();
  }


const createElement = (tag, className, idName) => {  //helper function to create an element
    let element = document.createElement(tag);
    if(className){
        element.classList.add(className);
    }
    if(idName){
        element.setAttribute("id", idName);
    }
    return element;
} ; 
