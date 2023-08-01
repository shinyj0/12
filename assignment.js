inputBox = document.getElementById('inputField');   
addToDo = document.getElementById('addToDo');       
toDoList = document.getElementById('toDoList');     

addToDo.addEventListener('click', function(){     
    var list = document.createElement('li');      
    if (!inputBox.value)             
        alert('내용을 입력해 주세요!');
    else
    {
        list.innerText = inputBox.value;   
        toDoList.appendChild(list);     
        inputBox.value= "";               
    }
 
    list.addEventListener('click', function(){    
        toDoList.removeChild(list);
    })
})