# Todo Backend API

This is a **Todo Backend API** built with Node.js, Express.js, and MongoDB, implementing JWT-based authentication. Users can register, log in, and manage their todos.

---

## Features

- User authentication using **JWT**
- Secure password storage with **bcrypt**
- CRUD operations for managing todos
- Validation for request payloads
- Logout functionality
- Protected routes for authenticated users only

---

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16+ recommended)
- **MongoDB** (local or cloud-based, e.g., MongoDB Atlas)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhis-1/bytive-backend.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   ```
   PORT=8080
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

---

## API Endpoints

### **Authentication**

#### Register
- **URL:** `/user/register`
- **Method:** POST
- **Body:**
  ```json
  {
    "fullName": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User created successfully."
  }
  ```

#### Login
- **URL:** `/user/login`
- **Method:** POST
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Welcome back, John Doe!"
  }
  ```

#### Logout
- **URL:** `/user/logout`
- **Method:** GET
- **Response:**
  ```json
  {
    "success": true,
    "message": "User logged out successfully."
  }
  ```

---

### **Todos**

#### Create Todo
- **URL:** `/tasks`
- **Method:** POST
- **Headers:**
  ```json
  {
    "Authorization": "<your-jwt-token>"
  }
  ```
- **Body:**
  ```json
  {
    "title": "Learn MERN",
    "description": "Build a full-stack app",
    "status": "pending"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Todo created successfully.",
    "todo": {
      "_id": "todoId",
      "title": "Learn MERN",
      "description": "Build a full-stack app",
      "status": "pending",
      "owner": "userId"
    }
  }
  ```

#### Get All Todos
- **URL:** `/tasks`
- **Method:** GET
- **Headers:**
  ```json
  {
    "Authorization": "<your-jwt-token>"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "todos": [
      {
        "_id": "todoId",
        "title": "Learn MERN",
        "description": "Build a full-stack app",
        "status": "pending",
        "owner": "userId"
      }
    ]
  }
  ```

#### Get Todo by ID
- **URL:** `/tasks/:todoId`
- **Method:** GET
- **Headers:**
  ```json
  {
    "Authorization": "<your-jwt-token>"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "todo": {
      "_id": "todoId",
      "title": "Learn MERN",
      "description": "Build a full-stack app",
      "status": "pending",
      "owner": "userId"
    }
  }
  ```

#### Update Todo
- **URL:** `/tasks/:todoId`
- **Method:** PUT
- **Headers:**
  ```json
  {
    "Authorization": "<your-jwt-token>"
  }
  ```
- **Body:**
  ```json
  {
    "title": "Learn MERN Stack",
    "description": "Master full-stack development",
    "status": "in-progress"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Todo updated successfully.",
    "todo": {
      "_id": "todoId",
      "title": "Learn MERN Stack",
      "description": "Master full-stack development",
      "status": "in-progress",
      "owner": "userId"
    }
  }
  ```

#### Delete Todo
- **URL:** `/tasks/:todoId`
- **Method:** DELETE
- **Headers:**
  ```json
  {
    "Authorization": "<your-jwt-token>"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Todo deleted successfully."
  }
  ```

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT (jsonwebtoken)**
- **bcrypt**

---
