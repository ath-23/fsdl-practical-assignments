1. Aim : Create a simple functional travel agency website using Node.js and Express using any
NoSQL data set like MongoDB if required.

2. Objectives
● To design and develop a functional travel agency website
● To understand server-side web development using Node.js
● To implement web application routing using Express.js
● To integrate a NoSQL database (MongoDB)
● To perform CRUD operations through the website
● To understand client-server architecture

3. Software Requirements:
● Text Editor/IDE: Code editor such as Visual Studio Code, Sublime Text, or Atom
for writing HTML, CSS, and JavaScript
● Web Browser: Modern web browsers like Google Chrome, Mozilla Firefox,
Safari, or Microsoft Edge with JavaScript enabled for testing the dynamic
functionality
● Version Control (Optional): Git for code versioning and project management
● Bootstrap CDN (Optional): If required, include Bootstrap CSS and JS via CDN
links for additional styling frameworks and components

4. Hardware Requirements:
● Computer System: Standard desktop or laptop computer with adequate
processing power
● Display: Monitor or screen capable of rendering web content at various
resolutions
● Storage: Sufficient disk space for storing project files and images
● Internet Connection: Required for loading external image resources and
optional Bootstrap CDN

5. Theory
a) Overview of the Project
The Odyssey Travel Agency is a modern, responsive web application designed to streamline the
experience of exploring and booking global vacations. The project follows a MERN-lite
architecture, utilizing React.js for a dynamic user interface and a Node.js/Express backend to
manage user authentication and trip data via MongoDB. The primary objective was to create a
sleek, user-centric platform that offers seamless navigation and secure data persistence.

b) Core Technologies and Architecture
1. Frontend: React.js - The frontend is built using React.js, a powerful JavaScript library for
building component-based user interfaces. It enables a Single Page Application (SPA)
experience where content updates dynamically without full page reloads. Utilized React Router
for managing navigation between the Home, Destination, and Authentication pages.
2. Styling: CSS3 and Modern Design Principles - To achieve a sleek and modern aesthetic,
custom CSS3 was used with a focus on Flexbox and Grid layouts. The design incorporates high-
quality imagery, smooth scroll behavior, and interactive hover effects. The typography combines
Playfair Display for a luxury feel with Inter for high readability.
3. Backend: Node.js and Express - The server-side logic is handled by Node.js, an
asynchronous event-driven JavaScript runtime. Express.js was used as the web framework to
create a RESTful API. These technologies handle client requests, manage server-side routing,
and communicate with the database.
4. Database: MongoDB - For data storage, MongoDB, a NoSQL document-oriented database,
was selected. It provides the flexibility required to store diverse trip details and user profiles.
Mongoose was used as the Object Data Modeling (ODM) library to provide a schema-based
solution for application data.
5. Authentication and Security Security is managed through Bcrypt.js - which hashes user
passwords before they are saved to the database, ensuring that sensitive data remains protected.
User sessions are managed on the frontend using state persistence and local storage to provide a
continuous logged-in experience.
System Features
● Dynamic Routing: Users can view specific details for various destinations through
unique URL paths.
● User Management: Secure signup and login functionalities allow users to create
personal accounts.

● Trip Booking: An integrated booking form captures user input and saves trip details
directly to the database.
● Persistent Sessions: The application remembers authenticated users even after page
refreshes.