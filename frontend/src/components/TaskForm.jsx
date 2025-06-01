import { motion } from 'framer-motion';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
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
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-6"
    >
      <div className="flex shadow-sm rounded-lg overflow-hidden">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-grow px-4 py-3 focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <PlusCircleIcon className="h-5 w-5" />
          <span className="hidden sm:inline">Add Task</span>
        </motion.button>
      </div>
    </motion.form>
  );
}