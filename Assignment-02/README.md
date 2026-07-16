1. Aim : Design a Personal Portfolio Page using HTML and CSS. Use bootstrap CDN if required.

2. Objectives 
To understand the concept and importance of CSS in web development.
To learn how to design and style web pages using CSS.
To understand the role of Bootstrap framework in responsive design.
To develop a responsive personal portfolio webpage.

3. Software Requirements:
Text Editor/IDE: Code editor such as Visual Studio Code, Sublime Text, or Atom
for writing HTML, CSS, and JavaScript
Web Browser: Modern web browsers like Google Chrome, Mozilla Firefox,
Safari, or Microsoft Edge with JavaScript enabled for testing the dynamic
functionality
Version Control (Optional): Git for code versioning and project management
Bootstrap CDN (Optional): If required, include Bootstrap CSS and JS via CDN
links for additional styling frameworks and components

4. Hardware Requirements:
Computer System: Standard desktop or laptop computer with adequate
processing power
Display: Monitor or screen capable of rendering web content at various
resolutions
Storage: Sufficient disk space for storing project files and images
Internet Connection: Required for loading external image resources and
optional Bootstrap CDN

5. Theory 
i) What is CSS?
CSS stands for Cascading Style Sheets. It is a style sheet language used to describe the presentation of an HTML document. While HTML defines the structure of a webpage, CSS controls:
Colors
Fonts
Layout
Spacing
Alignment
Responsive design
CSS was developed to solve the problem of separating content from design.
Before CSS, HTML handled both structure and styling.
In 1994, Håkon Wium Lie proposed the concept of CSS.
CSS Level 1 was released in 1996.
CSS Level 2 came in 1998 with advanced layout features.
CSS3 introduced modules like:
Animations
Flexbox
Grid
Media Queries
CSS is maintained by the World Wide Web Consortium. Today, CSS3 is widely used for modern responsive web design.

ii) Types of CSS
a) Inline CSS – Written inside HTML tag using style attribute.
<p style="color: red; font-size: 20px;">
    This is a paragraph using Inline CSS.
</p>



b) Internal CSS – Written inside <style> tag in <head>.
<!DOCTYPE html>
<html>
<head>
    <title>Internal CSS Example</title>

    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>

</head>
<body>

    <p>This paragraph is styled using Internal CSS.</p>

</body>
</html>



c) External CSS – Written in separate .css file and linked to HTML.
<link rel="stylesheet" href="style.css">


iii) What is Bootstrap?
Bootstrap is a free and open-source CSS framework used for developing responsive and mobile-first websites. It was developed by Twitter engineers in 2011.
Bootstrap provides:
Pre-designed components
Grid system
Basic UI elements
Navigation bars
Responsive utilities
Advantages of Bootstrap
Faster development
Mobile responsive design
Consistent styling
Cross-browser compatibility
Instead of downloading Bootstrap, we can use CDN (Content Delivery Network):
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
This loads Bootstrap directly from the internet.
