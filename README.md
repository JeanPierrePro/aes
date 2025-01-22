# My Fullstack App

This project is a fullstack application built with Node.js for the backend and React for the frontend. It includes a registration and login system where users can register with their name, email, and NIF. A confirmation code is sent to the provided email, and users are registered with a default password that is communicated via email.

## Project Structure

- **Backend**: Located in the `backend` folder, it handles user authentication, email services, and database interactions.
- **Frontend**: Located in the `frontend` folder, it provides the user interface for registration, login, and profile management.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-fullstack-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   node src/app.js
   ```
   The backend will run on port 5000.

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```
   The frontend will run on port 3000.

### Features

- User Registration
- Email Confirmation
- User Login
- Profile Management

### Technologies Used

- Node.js
- Express.js
- MongoDB (or any other database)
- React
- Axios (for API calls)

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.