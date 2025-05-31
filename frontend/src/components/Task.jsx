export default function Task({ task, onToggle, onDelete }) {
  return (
    <div className={`flex items-center justify-between p-4 mb-2 rounded-lg transition-colors duration-200 ${
      task.completed 
        ? 'bg-green-50 border border-green-100' 
        : 'bg-white border border-gray-200 hover:bg-gray-50'
    }`}>
      <div className="flex items-center">
        <button
          onClick={() => onToggle(task.id)}
          className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${
            task.completed 
              ? 'bg-green-500 text-white' 
              : 'border-2 border-gray-300'
          }`}
        >
          {task.completed && (
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
        <span className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-400 hover:text-red-500 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}