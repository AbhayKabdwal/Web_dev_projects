// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
  // Get task input and trim any leading/trailing whitespaces
  const taskInput = document.getElementById('taskInput');

  const taskText = taskInput.value.trim();
  console.log(taskText)

  // Get deadline input
  const deadlineInput = document.getElementById('deadline');

  const deadline = deadlineInput.value;
  console.log(deadline);

  // Check if the task text is not empty
  if (taskText !== '') {
    // Get current date and time
    const now = new Date();
    console.log(now)

    const formattedDateTime = now.toLocaleString();
    console.log(formattedDateTime)

    // Add task to the tasks array
    tasks.push({ text: taskText, timeAdded: formattedDateTime, deadline: deadline });

    // Update the task list displayed on the page
    updateTaskList();

    // Clear input fields
    // taskInput.value = '';
    // deadlineInput.value = '';
  }
}

// Function to update the task list displayed on the page
function updateTaskList() {
  // Get the task list container
  const taskList = document.getElementById('taskList');
  // Clear the existing content
  taskList.innerHTML = '';

  // Iterate through each task in the tasks array
  tasks.forEach((task, index) => {
    // Create a new row for the task
    const row = document.createElement('tr');

    // Create and populate cells for task text, time added, deadline, notes, and actions
    const textCell = document.createElement('td');
    textCell.textContent = task.text;
    row.appendChild(textCell);

    const timeAddedCell = document.createElement('td');
    timeAddedCell.textContent = task.timeAdded;
    row.appendChild(timeAddedCell);

    const deadlineCell = document.createElement('td');
    deadlineCell.textContent = task.deadline;
    row.appendChild(deadlineCell);

    const notesCell = document.createElement('td');
    const notesContent = document.createElement('div');
    notesContent.contentEditable = true;
    notesContent.textContent = task.notes;
    // Update task notes on input change
    notesContent.addEventListener('input', (event) => {
      tasks[index].notes = event.target.textContent;
    });
    notesCell.appendChild(notesContent);
    row.appendChild(notesCell);

    const actionCell = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    // Assign click event to remove task
    removeButton.onclick = () => removeTask(index);
    actionCell.appendChild(removeButton);

    // Add the row to the task list
    row.appendChild(actionCell);
    taskList.appendChild(row);
  });
}

// Function to remove a task by index
function removeTask(index) {
  // Remove task from the tasks array
  tasks.splice(index, 1);
  // Update the task list displayed on the page
  updateTaskList();
}
