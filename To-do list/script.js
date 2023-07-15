    const taskInput = document.getElementById('taskInput');
    const incompleteTasks = document.getElementById('incompleteTasks');
    const completeTasks = document.getElementById('completeTasks');

    function createTaskElement(taskText) {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      const label = document.createElement('label');
      const deleteButton = document.createElement('button');

      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', completeTask);

      label.innerText = taskText;

      deleteButton.innerText = 'X';
      deleteButton.className = 'delete-btn';
      deleteButton.addEventListener('click', deleteTask);

      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteButton);

      return li;
    }

    function addTask() {
      const taskText = taskInput.value;

      if (taskText) {
        const task = createTaskElement(taskText);
        incompleteTasks.appendChild(task);
        taskInput.value = '';
      }
    }

    function completeTask() {
      const taskItem = this.parentNode;
      const checkbox = this;

      checkbox.disabled = true;
      taskItem.classList.add('complete');

      completeTasks.appendChild(taskItem);
    }

    function deleteTask() {
      const taskItem = this.parentNode;

      if (taskItem.parentNode === incompleteTasks) {
        incompleteTasks.removeChild(taskItem);
      } else if (taskItem.parentNode === completeTasks) {
        completeTasks.removeChild(taskItem);
      }
    }
