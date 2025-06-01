import useTasks from '../hooks/useTasks';
import TaskForm from './TaskForm';
import Task from './Task';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

export default function TaskList() {
  const { tasks, loading, error, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <div className="max-w-md mx-auto">
      <TaskForm onAddTask={addTask} />
      
      {error && (
        <div className="p-3 mb-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
          {error}
        </div>
      )}
      
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-2">
          <AnimatePresence>
            {tasks.length === 0 ? (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-500 dark:text-gray-400 py-4"
              >
                No tasks yet. Add one above!
              </motion.p>
            ) : (
              tasks.map(task => (
                <Task
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))
            )}
          </AnimatePresence>
        </div>
      )}
      
      {tasks.length > 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center"
        >
          {tasks.filter(t => t.completed).length} of {tasks.length} tasks completed
        </motion.div>
      )}
    </div>
  );
}