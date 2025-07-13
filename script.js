
let innerBox=document.getElementById("input-box");
let listContainer=document.getElementById("list-container");

function addTask(){
    if(innerBox.value===''){
        alert("your must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=innerBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    innerBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    console.log(e.target.parentElement);
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}