import useTasks from '../hooks/useTasks';
import TaskForm from './TaskForm';
import Task from './Task';

export default function TaskList() {
  const { tasks, loading, error, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-50 rounded-xl shadow-sm">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">TaskMaster</h1>
      
      <TaskForm onAddTask={addTask} />
      
      {error && (
        <div className="p-3 mb-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-2">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500 py-4">No tasks yet. Add one above!</p>
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
        </div>
      )}
      
      {tasks.length > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          {tasks.filter(t => t.completed).length} of {tasks.length} tasks completed
        </div>
      )}
    </div>
  );
}