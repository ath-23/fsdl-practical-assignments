1. Aim : Create a simple functional webapp which allows students to submit feedback
according to their relevant coursework.

2. Objectives
● To create a simple webapp to submit student feedbacks
● To make efforts in reducing manual effort involved in collecting feedback data from
students
● To understand how to incorporate files of various types in a project and manipulate them
automatically

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
The Student Feedback Review System is a full-stack web application developed to digitize and
streamline the process of collecting and analyzing student feedback on faculty performance.
Traditionally, feedback collection is done manually using forms, which is time-consuming and
difficult to analyze. This system provides an efficient solution by enabling students to submit
structured feedback online while allowing administrators to manage academic data and monitor
feedback insights.
The application acts as a centralized platform where administrators can manage divisions,
subjects, faculty members, and their assignments. Students can log in securely and provide
feedback based on multiple evaluation criteria such as quality of teaching, clarity, interaction,

and overall performance. The system ensures that each student can submit feedback only once
per assignment, maintaining data integrity.
Additionally, the system provides an analytics dashboard where administrators can view
summarized feedback data in the form of charts and statistics, helping in better decision-making
and performance evaluation.

b) Tech stack used
● Frontend (User Interface): React.js, Vite, CSS, Bootstrap CDN (for responsive design),
Chart.js (for data visualization), Lucide React (icons).
● Backend (Server): Node.js, Express.js.
● Database: MongoDB with Mongoose for schema modeling and data management.
● Authentication & Security: JSON Web Tokens (JWT) for authentication, bcrypt for
password hashing, and CORS for secure API communication.

c) Working of the project
Step 1: User Authentication and Access Control
The system starts with login and registration functionality. Students register using PRN, email,
and password, while admins log in using predefined credentials. JWT tokens are generated upon
successful login and used for secure communication. Role-based access ensures that admins and
students have separate dashboards and permissions.
Step 2: Admin Data Management
The admin first sets up the system by creating divisions, subjects, and faculty records. Then,
allotments are created by linking faculty members with specific subjects and divisions. This
forms the base structure required for feedback collection.
Step 3: Student Interaction and Feedback Submission
Students log in and view their assigned faculty-subject combinations. For each allotment, they
can submit feedback by rating different criteria on a scale and optionally adding comments. The
system ensures that duplicate feedback submissions are prevented.

Step 4: Backend Processing and Data Storage
All data submitted by users is sent to the backend via REST APIs. The server processes
requests, validates input, and stores data in MongoDB collections such as Student, Faculty,
Assignment, and Feedback. Relationships between these entities are maintained for accurate data
mapping.
Step 5: Data Visualization and Analytics
The admin dashboard displays feedback insights using charts created with Chart.js. These
visualizations include average ratings, comparisons across subjects, and overall performance
metrics, making it easier to analyze large amounts of data.
Step 6: Responsive User Interface
The frontend is designed using React and Bootstrap, ensuring that the application works
smoothly across different devices such as desktops, tablets, and mobile phones. Navigation
between pages is handled using React Router, providing a seamless user experience.