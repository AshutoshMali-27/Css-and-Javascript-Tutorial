const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");



function addTask(){
    debugger;
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li=document.createElement("li");
         li.innerHTML=inputBox.value;
         listContainer.appendChild(li);
         let span =document.createElement("span");
         span.innerHTML="\u00d7";
         li.appendChild(span);
    }
    inputBox.value="";
    saveddata();
}

listContainer.addEventListener("click",function(e){
    debugger;
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveddata();
    }
    else if(e.target.tagName =="SPAN"){
        e.target.parentElement.remove();
        saveddata();
    }
},false);


function saveddata(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();