let taskInput = document.getElementById("task-input");
let addTask = document.getElementById("addTask");

const list = document.getElementById("list");

addTask.addEventListener("click", () => {
	let taskText = taskInput.value;

	if (taskText !== "") {
		let tasks = document.createElement("li");

		tasks.innerHTML = `  
        <input type="checkbox"/>
        <span>${taskText}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
`;
		list.appendChild(tasks);
		taskInput.value = "";
	}
});

list.addEventListener("click", (e) => {
	const taskItems = e.target.parentElement;

	if (e.target.classList.contains("delete")) {
		list.removeChild(taskItems);
	}

	if (e.target.classList.contains("edit")) {
		const taskElement = taskItems.querySelector("span");
		const newTask = prompt("Edit your task", taskElement.textContent);

		if (newTask !== null && newTask.trim() !== "") {
			taskElement.textContent = newTask;
		}
	}
});
