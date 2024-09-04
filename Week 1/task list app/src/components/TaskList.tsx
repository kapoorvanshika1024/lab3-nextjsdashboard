type TaskGroupProps = {
  title: string;
  tasks: string[];
  id: number;
};

function TaskGroup({ title, tasks, id }: TaskGroupProps) {
  return (
    <div className='task-group'>
      <h2>{title}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={`${id}-${index}`} className='task-item'>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskGroup;
