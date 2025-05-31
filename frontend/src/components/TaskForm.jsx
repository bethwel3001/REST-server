import { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex shadow-sm rounded-lg overflow-hidden">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-grow px-4 py-3 focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}