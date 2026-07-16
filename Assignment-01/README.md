1. Aim : Create a static web page which defines all text formatting tags of HTML in tabular format.

2. Objectives 
●	To understand the basic structure of an HTML document.
●	To learn various HTML text formatting tags and their usage.
●	To implement HTML formatting tags in a static web page.
●	To represent HTML formatting elements in a structured tabular format.

3. Software Requirements:
●	Text Editor/IDE: Code editor such as Visual Studio Code, Sublime Text, or Atom
for writing HTML, CSS, and JavaScript
●	Web Browser: Modern web browsers like Google Chrome, Mozilla Firefox,
Safari, or Microsoft Edge with JavaScript enabled for testing the dynamic
functionality
●	Version Control (Optional): Git for code versioning and project management
●	Bootstrap CDN (Optional): If required, include Bootstrap CSS and JS via CDN
links for additional styling frameworks and components

4. Hardware Requirements:
●	Computer System: Standard desktop or laptop computer with adequate
processing power
●	Display: Monitor or screen capable of rendering web content at various
resolutions
●	Storage: Sufficient disk space for storing project files and images
●	Internet Connection: Required for loading external image resources and
optional Bootstrap CDN

5. Theory 
i) History of HTML
HTML stands for HyperText Markup Language. It is the standard markup language used to create web pages.
●	HTML was created by Tim Berners-Lee in 1991.

●	The first version of HTML had only 18 tags.

●	HTML was developed to share scientific documents over the internet.

●	Over time, newer versions were introduced:
○	HTML 2.0 (1995)
○	HTML 3.2 (1997)
○	HTML 4.01 (1999)
○	XHTML (2000)
○	HTML5 (2014 – major update introducing semantic tags, multimedia support, APIs, etc.)
HTML is maintained by the World Wide Web Consortium. Today, HTML5 is the standard version used for web development.
ii) Structure of HTML document
Any HTML document follows the following code structure
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>


iii) HTML Tags and their Uses
A) Basic Tags
Tag	Description	Example
<html>	Root element of HTML document	<html>...</html>
<head>	Contains metadata	<head>...</head>
<title>	Sets page title	<title>My Page</title>
<body>	Contains visible content	<body>Content</body>
<h1> to <h6>	Headings (largest to smallest)	<h1>Heading</h1>
<p>	To display paragraphical content	<p>This is paragraph</p>
<br>	Line break	Hello<br>World
<hr>	Horizontal line	<hr>
B) Text Formatting Tags 
Tag	Description	Example
<b>	Bold text	<b>Bold</b>
<strong>	Important bold text	<strong>Important</strong>
<i>	Italic text	<i>Italic</i>
<em>	Emphasized text	<em>Emphasis</em>
<mark>	Highlighted text	<mark>Highlight</mark>
<small>	Smaller text	<small>Small text</small>
<del>	Deleted text	<del>Deleted</del>
<ins>	Inserted text	<ins>Inserted</ins>
<sub>	Subscript text	H<sub>2</sub>O
<sup>	Superscript text	x<sup>2</sup>
<u>	Underlined text	<u>Underline</u>
<code>	Code text	<code>printf()</code>
<pre>	Preformatted text	<pre> formatted </pre>
<blockquote>	Quoted section	<blockquote>Quote</blockquote>
<q>	Short quotation	<q>Short quote</q>
<abbr>	Abbreviation	<abbr title="World Health Organization">WHO</abbr>
<cite>	Citation	<cite>Book Name</cite>
<address>	Contact information	<address>Contact info</address>
<bdi>	Bi-directional isolation	<bdi>Text</bdi>
<bdo>	Text direction override	<bdo dir="rtl">Text</bdo>

C) Link and Media Tags
Tag	Description	Example
<a>	Hyperlink	<a href="#">Link</a>
<img>	Image	<img src="image.jpg">
<audio>	Audio file	<audio controls></audio>
<video>	Video file	<video controls></video>
<source>	Media source	<source src="file.mp4">

D) List Tags
Tag	Description	Example
<ul>	Unordered list	<ul><li>Item</li></ul>
<ol>	Ordered list	<ol><li>Item</li></ol>
<li>	List item	<li>Item</li>
<dl>	Description list	<dl></dl>
<dt>	Term	<dt>HTML</dt>
<dd>	Description	<dd>Markup Language</dd>

E)Table Tags
Tag	Description	Example
<table>	Creates table	<table></table>
<tr>	Table row	<tr></tr>
<td>	Table data in each table row	<td>Data</td>
<th>	Table header	<th>Heading</th>
<caption>	Table title	<caption>Title</caption>
<thead>	Table head section	<thead></thead>
<tbody>	Table body	<tbody></tbody>
<tfoot>	Table footer	<tfoot></tfoot>

F) Form Tags
Tag	Description	Example
<form>	Creates form	<form></form>
<input>	Specify Input field	<input type="text">
<textarea>	Multi-line input	<textarea></textarea>
<button>	Create a button	<button>Click</button>
<label>	Create a label	<label>Name</label>
<select>	Drop-down menu	<select></select>
<option>	Option in dropdown	<option>One</option>
<fieldset>	Groups form elements	<fieldset></fieldset>
<legend>	Fieldset title	<legend>Details</legend>
