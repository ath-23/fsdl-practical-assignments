1. Aim : Create a simple functional webapp that generates attendance notification letters of
defaulter students.

2. Objectives
● To create a simple webapp to generate attendance letters
● To make efforts in reducing manual effort involved in generating attendance notification
letters
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
The Attendance Defaulter Letter Generator is a full-stack web application built to automate a
tedious academic administrative task. When colleges generate generic attendance reports, staff
usually have to manually sift through hundreds of rows to spot defaulters (<75% attendance) and
manually type up individual warning letters.

This application acts as a bridge. By uploading a raw, unformatted Excel/CSV report dumped
from the collegewide system, the application automatically computes everything from overall
attendance to subject-wise breakdowns, providing a neatly structured UI to view defaulters and
giving teachers a 1-click button to download a batched PDF containing perfectly formatted
warning letters for all parents.

b) Tech stack used
● User Interface (Frontend): Next.js (React), Typescript, Tailwind CSS, Axios, Lucide
React icons.
● Server Framework (Backend): FastAPI (Python), Uvicorn.
● Data Engineering: Pandas (for parsing spreadsheet matrices).
● Document Engineering: ReportLab (for PDF assembly).

c) Working of the project
Step 1: Input File Upload and Frontend Handling
User Interface : The workflow begins at localhost:3000 on the Next.js frontend involving the
UploadBox component. The user is greeted with a sleek drag and drop file uploader.
File Validation : The user drops their exported xlsx or csv attendance report. The frontend
strictly validates the file extension.
Data Transport : Once validated the React state securely holds the File object. It wraps this file
into a JavaScript FormData structure and dispatches a multipart POST request using Axios to the
backend upload endpoint, officially passing execution to the server.
Step 2: Backend Parsing Data Ingestion and Navigation
Inside the FastAPI backend the file enters the processing pipeline.
In Memory Transformation : To prevent lingering garbage files on the server hard drive
Pandas utilizes io BytesIO to read the incoming byte stream dynamically directly into RAM via
read excel or read csv.
Finding the Anchor : University spreadsheets are often messy and may contain several rows of
headers before the actual data begins. The script dynamically scans row by row until it detects
anchor keywords like Sr No and PRN to identify the exact index where the true table headers are
located.
Step 3: Backend Extraction Data Mapping and Filtering
With the headers identified the engine moves to structured extraction.
Strict Column Mapping: The script scans the header row for exact column names mapped in a
dictionary. It translates formatted strings into readable formats such as subject name and type

like Theory or Practical. It also locates the Overall Attendance column.
Row Iteration: The script iterates through student rows skipping blank or invalid rows by
enforcing integer checks on the serial number column.
Defaulter Filtering: For every student row it retrieves the overall attendance percentage. If the
value is less than 75.0 the student is marked as a defaulter.
Deep Subject Extraction : For each defaulter it retrieves PRN and name. It then accesses
mapped subject columns. Since percentage values are located at fixed offsets from subject
headers the script extracts theory and practical attendance values accordingly.
JSON Serialization : The filtered data is formatted into a Python list of Student models
containing nested subject arrays and returned to the frontend as a JSON payload containing
defaulters.
Step 4: Intermediate Output Verification
The React frontend waits for the response and stores the received data in the defaulters state.
UI Rendering : The updated state triggers rendering of the DefaulterTable component.
Manual Verification : The user is shown a structured table with student names, roll numbers
and attendance percentages to verify correctness before generating PDFs.
Step 5: Triggering Document Generation
After verification the user clicks Generate PDF Letters. The frontend sends the complete
defaulters data as a POST request to the ‘generate letters’ endpoint. The Axios configuration sets
the response type as blob so the response is handled as binary data.
Step 6: PDF Generation Using ReportLab
This stage happens on the FastAPI backend. A SimpleDocTemplate is initialized in memory
using io BytesIO with proper page size and margins. The system loops through each student.
Headers and Meta Information such as department academic year and current date are added. A
warning letter is generated dynamically inserting student name PRN and class details. A table is
created with columns for serial number subject theory and practical attendance and populated for
each student. Table styles such as borders, background shading and font emphasis are applied.

Footer rows merge cells for average and total attendance display. A signature section is added for
class teacher academic coordinator and head of department. Each student letter is separated using
page breaks. After processing all students the document is generated and written into the
memory buffer.
Step 7: Final Output File Download
The server responds with the generated PDF file using appropriate headers for file download.
The frontend receives the binary data, creates a temporary URL and triggers a download
automatically. The file is saved to the user system as defaulter letters PDF completing the
workflow successfully.