
const input = document.getElementById("input_field");
const list_container = document.getElementById("list-container");

function addTask() {

    if (input.value == "") {
        alert("Enter your task to add");
    }
    else {
        let li = document.createElement("li");// createting li element
        li.textContent = input.value; //setting the content of li element

        let remove = document.createElement("span"); // creating a remove symbol to removea  any task
        remove.innerHTML = '&#10006';
        li.appendChild(remove);
        list_container.appendChild(li);
  
        // removing task
        
        saveTask();
    }
    input.value = "";   // clear the input field after adding the task
}

//removing and checking task
list_container.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},false);

// adding local storage concept

function saveTask(){
    localStorage.setItem("data",list_container.innerHTML);
}

function showTask(){
    const showTask =localStorage.getItem("data");
    if(showTask)
    {
    list_container.innerHTML=showTask;
    }
}

showTask();





