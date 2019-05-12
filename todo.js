class ToDoList {
	constructor(){
		this.items = [];// extendable array
	}
	
	add(toDoText) {
		this.items.push(toDoText);
	}
	
	draw(){
		const listElement = document.getElementById('to_do_list');
		//for each element add item to list element
		listElement.innerHTML = '';
		for (let i = 0; i < this.items.length; i++) {
			let item = this.items[i];
			listElement.innerHTML = listElement.innerHTML +'<li>'+item+'</li>';
	
			
		
		}
		
		
	}
}

let toDoList = new ToDoList();
function addToDoItem(e){
	e.preventDefault();
	
	var inputElement = document.getElementById("to_do_item");
	var newItem = inputElement.value;
	inputElement.value = '';

	toDoList.add(newItem);
	toDoList.draw();
	
	return false;
}