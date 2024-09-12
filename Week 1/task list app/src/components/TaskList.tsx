type TaskListProps = {
  title: string;
  tasks: string[];
  id: number;
  onDeleteTask: (groupId: number, taskIndex: number) => void;
};

const TaskList = ({ title, tasks, id, onDeleteTask }: TaskListProps) => {
  return (
    <div className='task-group'>
      <h2>{title}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={`${id}-${index}`} className='task-item'>
            {task}
            <button onClick={() => onDeleteTask(id, index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
