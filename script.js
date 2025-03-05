const inputBox=document.getElementById("input");
const tasklist=document.getElementById("task");
function Addtask(){
    if(inputBox.value===''){
        alert('Please enter a task');
        }
        else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
           
            let deleteIcon = document.createElement("img");
            deleteIcon.src = "Images/delete.jpg"; // Change to your delete icon path
            deleteIcon.classList.add("delete-icon");
            deleteIcon.alt = "Delete";
            deleteIcon.onclick = function() {
                li.remove(); // Remove task when delete icon is clicked
            };
            li.appendChild(deleteIcon);
            tasklist.appendChild(li);
    
        }
        inputBox.value='';
        savedata();

    }
    tasklist.addEventListener('click', function(e) {
        if(e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
            savedata();
        }
        else if(e.target.tagName === 'IMG') {
            e.target.parentElement.remove();
            savedata();
        }
    }, false);

    function savedata(){
        localStorage.setItem('tasklist',tasklist.innerHTML);
    }
    function getdata(){
        tasklist.innerHTML=localStorage.getItem('tasklist');
    }
    getdata();