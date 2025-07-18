# Todo REST API

A simple Node.js REST API for managing users and todo tasks.  
Built with Express, MongoDB, and follows RESTful principles.

## Features

- User registration and login
- CRUD operations for todo tasks
- RESTful endpoints returning JSON
- Error handling with proper HTTP status codes
- Ready for JWT authentication (to be added)
- API documentation with Swagger (`/api-docs`) (to be added)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Buffito/todo-rest-api
   cd todoApp
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```
   PORT=YOUR_PORT
   MONGO_URI=YOUR_MONGO_URI
   ```

4. **Start the server:**
   ```sh
   npm start
   ```

## API Endpoints

### Auth
- `POST /login` — Login a user

### Users
- `GET /users` — Get all users
- `POST /users` — Create a new user

### Todos
- `GET /todos` — Get all todos
- `POST /todos` — Create a new todo
- `GET /todos/{id}` — Get a todo by ID
- `PUT /todos/{id}` — Update a todo by ID
- `DELETE /todos/{id}` — Delete a todo by ID
- `GET /todos/creator/{creator}` — Get todos by creator


## Future Improvements

- Add JWT authentication 
- Create the full Swagger file
