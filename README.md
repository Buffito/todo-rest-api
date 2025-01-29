# ToDo Web Application

Simple todo web application created using MongoDB, NodeJS, and ExpressJS.

## Features

- User registration and authentication
- Create, update, and delete todo tasks

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript templates)
- bcrypt (for password hashing)
- email-validator (for email validation)
- dotenv (for environment variables)
- body-parser (for parsing request bodies)
- nodemon (for development)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Buffito/todoApp.git
    cd todoapp
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    HOST=localhost
    PORT=3000
    MONGO_URL=your_mongodb_connection_string
    ```

4. Start the application:
    ```sh
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`

