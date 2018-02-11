export const getTasks = () => localStorage.getItem('tasks') && JSON.parse(localStorage.getItem('tasks')) || [];

export const addTask = (taskLabel) => {
    let tasks = getTasks();

    let newId = localStorage.getItem('id') && parseInt(localStorage.getItem('id')) || 0;
    newId++;

    localStorage.setItem('id', newId);

    let newTask = {
        id: newId,
        label: taskLabel,
        done: false
    };

    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
};

export const deleteTask = (taskId) => {
    let tasks = getTasks();
    tasks = tasks.filter((task) => task.id != taskId);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}