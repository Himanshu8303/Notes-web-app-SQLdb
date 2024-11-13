# Notes App

A simple Notes App built using React.js on the frontend and Node.js with MySQL as the backend. This app allows users to create and delete notes, which are stored in a MySQL database. 

## Features

- **Add Notes**: Users can add notes to the app, which will be saved to the MySQL database.
- **Delete Notes**: Users can delete notes, which will also be removed from the database.
- **View Notes**: Users can view all added notes in a simple list format.

## Tech Stack

- **Frontend**: React.js (with Hooks), Axios for API calls, Vite as the build tool
- **Backend**: Node.js, Express.js, MySQL
- **Database**: MySQL

## Project Structure

### Frontend (Client)
- `src/` - Contains React components, App logic, and API interactions.
  - `components/` - Contains all the React components like `NoteForm`, `NoteList`, and `NoteItem`.
  - `App.js` - Main React component to fetch and display notes.
  - `index.js` - Entry point of the React app.
  - `index.css` - Global styles.
  
- `public/` - Contains static files like `index.html`.

### Backend (Server)
- `server/` - Contains the backend logic.
  - `config/db.js` - MySQL database configuration.
  - `models/Note.js` - Mongoose model for the notes table.
  - `routes/notes.js` - Express.js routes to handle API requests for CRUD operations.

## Prerequisites

- **Node.js**: Make sure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
- **MySQL**: MySQL should be installed and running. You can download it from [mysql.com](https://www.mysql.com/).
- **Vite** (for frontend development): Vite is used to bundle the React frontend.

## Installation

Follow these steps to get your Notes App up and running locally.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/notes-app.git
cd notes-app
