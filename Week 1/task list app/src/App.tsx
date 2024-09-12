import { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Search from './components/Search';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

const initialTaskList = [
  {
    title: 'Humber',
    tasks: ['Task 1', 'Task 2', 'Task 3'],
    id: 1,
  },
  {
    title: 'MERN',
    tasks: ['Lab', 'Project', 'Quiz'],
    id: 2,
  },
  {
    title: 'Java',
    tasks: ['Group Discussion', 'Exam', 'Assignment'],
    id: 3,
  },
];

function App() {
  const [tasklist, setTaskList] = useState(initialTaskList);
  const [search, setSearch] = useState('');

  // Add new task
  const handleAddTask = (title: string, taskName: string) => {
    setTaskList((currentTaskList) =>
      currentTaskList.map((group) =>
        group.title === title
          ? { ...group, tasks: [...group.tasks, taskName] }
          : group
      )
    );
  };

  // Delete task
  const handleDeleteTask = (groupId: number, taskIndex: number) => {
    setTaskList((currentTaskList) =>
      currentTaskList.map((group) =>
        group.id === groupId
          ? { ...group, tasks: group.tasks.filter((_, index) => index !== taskIndex) }
          : group
      )
    );
  };

  // Filter tasks
  const filterTasks = (name: string) => {
    setSearch(name);
  };

  const filteredTaskList = tasklist.filter((group) =>
    group.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <AddTaskForm onAddTask={handleAddTask} />
      <Header
        title="Task List"
        total={tasklist.reduce((acc, curr) => acc + curr.tasks.length, 0)}
      />
      <Search onFilter={filterTasks} />
      {filteredTaskList.map((group) => (
        <TaskList
          title={group.title}
          tasks={group.tasks}
          id={group.id}
          key={group.id}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default App;
