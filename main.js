document.getElementById('create-tasks-card-form').addEventListener('submit', saveTask)
function saveTask(event){
    const newTask = {
        id: chance.guid(),
        name: document.getElementById('new-task-name-input').value,
        description: document.getElementById('new-task-description').innerHTML,
        urgency: document.getElementById('new-task-urgency-select').value
    }  

    if(localStorage.getItem('tasks') === null) {
        const tasks = [];
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks))        
    } else {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks))     
    }

    fetchTasks();
    event.preventDefault();
    
};

function fetchTasks (){
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    
    console.log(tasks)
    const highUrgence = tasks.filter(task => task.urgency == 'High');
    const averageUrgence = tasks.filter(task => task.urgency == 'Average');
    const lowUrgence = tasks.filter(task => task.urgency == 'Low');
    


    let highUrgenceList = document.getElementById('urgent-high-tasks');
    let averageUrgenceList = document.getElementById('urgent-average-tasks');
    let lowUrgenceList = document.getElementById('urgent-low-tasks');

    highUrgenceList.innerHTML = ''; 
    averageUrgenceList.innerHTML = '';
    lowUrgenceList.innerHTML = '';

    for (let i=0; i < highUrgence.length; i++){
        highUrgenceList.innerHTML += '<div class="relative"><button class="peer absolute right-1 top-1" onclick="deleteTask(\''+ highUrgence[i].id +'\')"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg></button><div id="urgent-high-1"class="items-center h-16 mb-2 p-2.5 shadow-lg rounded-lg bg-gray-100 text-gray-700 border-2 break-all overflow-hidden peer-hover:bg-white hover:bg-white hover:text-gray-700" >' + highUrgence[i].name + '</div></div>'
    }
    for (let i=0; i < averageUrgence.length; i++){
        averageUrgenceList.innerHTML += '<div class="relative"><button class="peer absolute right-1 top-1" onclick="deleteTask(\''+ averageUrgence[i].id +'\')"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg></button><div id="urgent-average-1"class="items-center h-16 mb-2 p-2.5 shadow-lg rounded-lg bg-gray-100 text-gray-700 border-2 break-all overflow-hidden peer-hover:bg-white hover:bg-white hover:text-gray-700" >' + averageUrgence[i].name + '</div></div>'
    }
    for (let i=0; i < lowUrgence.length; i++){
        lowUrgenceList.innerHTML += '<div class="relative"><button class="peer absolute right-1 top-1" onclick="deleteTask(\''+ lowUrgence[i].id +'\')"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg></button><div id="urgent-low-1"class="items-center h-16 mb-2 p-2.5 shadow-lg rounded-lg bg-gray-100 text-gray-700 border-2 break-all overflow-hidden peer-hover:bg-white hover:bg-white hover:text-gray-700" >' + lowUrgence[i].name + '</div></div>'
    }
};

function deleteTask(id){
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const newTasks = tasks.filter(
        task => task.id != id
    )
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    fetchTasks();
};