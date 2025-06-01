import { motion } from 'framer-motion';
import { useState } from 'react';
import ReactConfetti from 'react-confetti';
import { CheckIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';
export default function Task({ task, onToggle, onDelete }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleToggle = () => {
    const wasCompleted = task.completed;
    onToggle(task.id);
    
    if (!wasCompleted) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className={`flex items-center justify-between p-4 mb-3 rounded-lg shadow-sm transition-all duration-200 ${
          task.completed
            ? 'bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800'
            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
        }`}
      >
        <div className="flex items-center">
          <button
            onClick={handleToggle}
            className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center transition-colors ${
              task.completed
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'border-2 border-gray-300 dark:border-gray-500 hover:border-gray-400'
            }`}
          >
            {task.completed && <CheckIcon className="h-4 w-4" />}
          </button>
          <span
            className={`${
              task.completed
                ? 'line-through text-gray-500 dark:text-gray-400'
                : 'text-gray-800 dark:text-gray-100'
            }`}
          >
            {task.title}
          </span>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </motion.div>
    </>
  );
}