import Header from './components/Header';
import TaskGroup from './components/TaskList';
import './App.css';

const tasklist = [
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
  return (
    <div>
      <Header title="Task List" total={tasklist.reduce((acc, curr) => acc + curr.tasks.length, 0)} />
      {tasklist.map((group) => (
        <TaskGroup title={group.title} tasks={group.tasks} id={group.id} key={group.id} />
      ))}
    </div>
  );
}

export default App;
