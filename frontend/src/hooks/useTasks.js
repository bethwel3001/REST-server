import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTasks(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title) => {
    try {
      const response = await axios.post(API_URL, {
        title,
        completed: false
      });
      setTasks([...tasks, response.data]);
    } catch (err) {
      setError('Failed to add task.');
      console.error(err);
    }
  };

  const toggleTask = async (id) => {
    const task = tasks.find(t => t.id === id);
    try {
      await axios.put(`${API_URL}/${id}`, {
        completed: !task.completed
      });
      fetchTasks();
    } catch (err) {
      setError('Failed to update task.');
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError('Failed to delete task.');
      console.error(err);
    }
  };

  return { tasks, loading, error, addTask, toggleTask, deleteTask };
}