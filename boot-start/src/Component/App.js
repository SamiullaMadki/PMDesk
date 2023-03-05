import { useState } from 'react';

function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState({});

  function handleAddTask() {
    setShowAddTaskForm(true);
    setErrors({});
  }

  function handleAddTaskSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = {
      addTask: formData.get('addTask'),
      addDescription: formData.get('addDescription'),
      checkbox1: formData.get('checkbox1') === 'on',
      checkbox2: formData.get('checkbox2') === 'on',
      checkbox3: formData.get('checkbox3') === 'on'
    };
    const newErrors = validateTask(task);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setTasks([...tasks, task]);
      setShowAddTaskForm(false);
      setErrors({});
    }
  }

  function validateTask(task) {
    const errors = {};
    if (!task.addTask) {
      errors.addTask = 'Task is required';
    }
    if (!task.addDescription) {
      errors.addDescription = 'Description is required';
    }
    return errors;
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleAddTask}>Add Task</button>
      </header>
      {showAddTaskForm && (
        <form onSubmit={handleAddTaskSubmit}>
          <label>
            Task Name:
            <input type="text" name="addTask" />
            {errors.addTask && <div>{errors.addTask}</div>}
          </label>
          <br />
          <label>
            Description:
            <input type="text" name="addDescription" />
            {errors.addDescription && <div>{errors.addDescription}</div>}
          </label>
          <br />
          <label>
            <input type="checkbox" name="checkbox1" />
            Make Model
          </label>
          <br />
          <label>
            <input type="checkbox" name="checkbox2" />
            Make View
          </label>
          <br />
          <label>
            <input type="checkbox" name="checkbox3" />
            Make Controller
          </label>
          <br />
          <button type="submit">Add Task</button>
        </form>
      )}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div>Task: {task.addTask}</div>
              <div>Description: {task.addDescription}</div>
              <div>Checkbox 1: {task.checkbox1 ? 'checked' : 'unchecked'}</div>
              <div>Checkbox 2: {task.checkbox2 ? 'checked' : 'unchecked'}</div>
              <div>Checkbox 3: {task.checkbox3 ? 'checked' : 'unchecked'}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
