import { useState } from 'react';

type AddTaskFormProps = {
  onAddTask: (title: string, taskName: string) => void;
};

const AddTaskForm = ({ onAddTask }: AddTaskFormProps) => {
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('');

  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTask(category, taskName);
    setTaskName('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <fieldset>
        <legend>Add Task</legend>
        <input
          type='text'
          value={taskName}
          onChange={handleChangeTask}
          placeholder='Enter Task'
        />
        <input
          type='text'
          value={category}
          onChange={handleChangeCategory}
          placeholder='Enter Category'
        />
        <input type='submit' value='Add Task' />
      </fieldset>
    </form>
  );
};

export default AddTaskForm;
