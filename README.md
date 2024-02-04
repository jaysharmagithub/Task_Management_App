# Task Management App

This project is a simple Task Management Web Application that allows users to manage their tasks.
It provides functionalities for creating, updating, deleting, and viewing tasks.
The application consists of a backend API built with Spring Boot and a frontend built with React.

## Tech Stack

### Frontend

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **Axios**: A promise-based HTTP client for making API requests.
- **Bootstrap**: A front-end framework for designing responsive and mobile-first websites.
- **React-router-dom**: A routing library for React applications.

### Backend

- **Spring Boot**: An open-source Java-based framework used to create microservices.
- **Spring Web**:A framework for building web applications in Java..
- **Spring Data JPA**: A repository abstraction layer for Java Persistence API (JPA).
- **Hibernate**: An object-relational mapping (ORM) library for Java applications.
- **Lombok**: A Java library that helps reduce boilerplate code.
- **MySQL Driver**:A JDBC driver for connecting Java applications to MySQL databases.

### Frontend Setup

1. Clone the repository:  https://github.com/jaysharmagithub/Task_Management_App.git
2. Navigate to the frontend directory: cd task_management_system
3. Install dependencies: npm install
4. Start the development server:  http://localhost:5173

### Backend Setup
1. Clone the repository:  https://github.com/jaysharmagithub/Task_Management_App.git
2. Navigate to the backend directory: cd task_management_application
3. Create a database named `your_database`.
4. Update the application.properties file with your your database credentials.
5. Build and run the Spring Boot application:./mvnw spring-boot:run

### API Documentation
The backend API provides the following endpoints:

GET /api/tasks: Fetch all tasks.
GET /api/tasks/{id}: Fetch a single task by ID.
POST /api/tasks: Add a new task.
PUT /api/tasks/{id}: Update a task by ID.
DELETE /api/tasks/{id}: Delete a task by ID.
For detailed API documentation, please refer to the Swagger documentation at https://your-backend-url/swagger-ui.html.

## Contact
For questions or feedback, please contact Jay Sharma 
mail me : sharmajay2510@gmail.com
