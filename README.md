## taskmaster - REST API Task Manager

A simple yet powerful task management system with Express.js backend and React frontend.

# Features
- ✅ Create, read, update, and delete tasks
- ✅ Mark tasks as complete
- ✅ Clean, responsive UI with Tailwind CSS
- ✅ RESTful API architecture
- ✅ Ready for Postman testing

# Tech Stack
*Frontend:*
React 18
Tailwind CSS
Axios

*Backend:*
Express.js
REST API principles

# Setup
*Prerequisites*
Node.js (v16+ recommended)
npm/yarn

# Installation
Clone the repository:
```bash
git clone https://github.com/bethwel3001/REST-server
cd taskmaster
```
Install dependencies:
```bash
npm install
```
Start the server:
```bash
npm start
```
Setup backend:
```bash
cd backend
npm install
```
Start the backend server:
```bash
node server.js
```
# API Endpoints
| Method | Endpoint       | Description       |
| ---    | ---------------|--------------
| GET    | /api/tasks/:id | Get single tasks  |
| GET    | /api/tasks     | Get  all tasks    |
| POST   | /api/tasks     | Create a new task |
| PUT    | /api/tasks/:id | Update a task     |
| DELETE | /api/tasks/:id | Delete a task     |

# Testing with Postman
*Unit tests:*
Import the included Postman collection (postman/TaskMaster.postman_collection.json) to test all API endpoints.

# License
MIT