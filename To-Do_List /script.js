// Get references to elements
const inputBox = document.getElementById("task-input");
const addButton = document.getElementById("add-btn");
const listContainer = document.getElementById("task-list");

// Load tasks from localStorage (or empty array if none)
let todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];

// Save tasks to localStorage
function saveToLocal() {
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

// Show tasks in the list
function showTasks() {
  listContainer.innerHTML = ""; // Clear existing list

  todoItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.text;

    // Add completed style if needed
    if (item.done) {
      listItem.classList.add("completed");
    }

    // Mark as done/undone on click
    listItem.addEventListener("click", () => {
      todoItems[index].done = !todoItems[index].done;
      saveToLocal();
      showTasks();
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("delete-btn");

    // Delete task on click
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent toggle when deleting
      todoItems.splice(index, 1); // Remove from array
      saveToLocal();
      showTasks();
    });

    listItem.appendChild(deleteBtn);
    listContainer.appendChild(listItem);
  });
}

// Add task when button is clicked
addButton.addEventListener("click", () => {
  const taskText = inputBox.value.trim();
  if (taskText !== "") {
    todoItems.push({ text: taskText, done: false });
    inputBox.value = "";
    saveToLocal();
    showTasks();
  }
});

// Initial load
showTasks();
