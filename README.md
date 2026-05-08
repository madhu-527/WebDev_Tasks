## EasyLevel_Tasks

# Basic_WebPage 🌐

This is a simple personal web page created using HTML.
The webpage introduces me, displays an image, and includes a link to my favorite website.

## 📌 Features

* Basic HTML structure
* Personal introduction section
* Image display
* External website link
* Beginner-friendly project

## 🛠️ Technologies Used

* HTML5

## 📂 Project Structure

```bash
├── index.html
```

## 🚀 How to Run

1. Download or clone this repository.
2. Open the `index.html` file in any web browser.

## 📖 About the Project

This project was created to practice basic frontend development concepts using HTML.
It demonstrates how to structure a webpage with headings, paragraphs, images, and hyperlinks.

## 🔗 Sample Content

* Personal introduction
* Nature/business image
* Link to Wikipedia

# Contact_Form 📬

This is a simple and responsive Contact Form web application built using HTML and CSS.
The project allows users to enter their name, email, and message through a clean user interface and displays a thank you page after submission.

## 📌 Features

* Responsive contact form design
* User-friendly interface
* Form validation using HTML5
* Thank You confirmation page
* Clean and modern styling with CSS

## 🛠️ Technologies Used

* HTML5
* CSS3

## 📂 Project Structure

```bash
├── index.html
├── style.css
├── thankyou.html
```

## 🚀 How to Run

1. Download or clone this repository.
2. Make sure all files are in the same folder.
3. Open `index.html` in any web browser.

## 📖 Project Description

This project demonstrates the basics of frontend web development by creating a contact form with proper styling and navigation.

### Pages Included

* **index.html** → Main contact form page
* **thankyou.html** → Confirmation page after form submission
* **style.css** → Styling for both pages

## ✨ Functionalities

* Users can enter:

  * Name
  * Email
  * Message
* Submit button redirects users to a Thank You page
* Responsive card layout with hover effects and focus styling


This README provides a clear overview of your project, highlighting its purpose as a multi-page learning tool and detailing the technology used.

---

# Navigation_Menu

**BrightPath Learning** is a multi-page demo website built to practice fundamental web development skills, specifically focusing on HTML structure, CSS styling, and site navigation.

## 🚀 Project Overview

This project serves as a functional template for a fictional training center. It demonstrates how to link multiple HTML documents and apply consistent styling across a site using a single external stylesheet.

### Key Features

* **Multi-Page Navigation:** Includes Home, About, and Contact pages with a functional navigation bar.
* **Active Link Highlighting:** The navigation bar uses an `.active` class to visually indicate the user's current location.
* **Responsive Layout:** Uses a clean, centered design with a maximum width for readability on various screen sizes.
* **Semantic HTML:** Organized with proper `nav`, `main`, `h1`, and `h2` elements for better accessibility.

## 📂 Project Structure

* `index.html`: The landing page featuring a welcome message and service overview.
* `about.html`: Contains information about the mission and the example team members.
* `contact.html`: Lists contact details including email, phone, address, and working hours.
* `styles.css`: A centralized stylesheet governing the colors, typography, and flexbox-based navigation.

## 🛠️ Built With

* **HTML5:** Structure and content.
* **CSS3:** Custom styling, including Flexbox for the navigation menu.

## 📖 How to Use

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Use the navigation links at the top to explore the different sections of the site.


## MediumLevel_Tasks

# Responsive_Webpage

A clean, modern, and fully responsive single-page landing site designed to showcase flexible layouts. This project demonstrates how to use **CSS Media Queries** and **Modern CSS Layouts** (Grid and Flexbox) to ensure a seamless user experience across desktops, tablets, and mobile phones.

## ✨ Key Features

* **Fluid Layout:** Uses a container that adapts to the screen width, ensuring content never hits the edge of the viewport.
* **CSS Grid Implementation:** Features a two-column layout on larger screens that automatically stacks into a single column on mobile devices.
* **Flexbox Navigation:** A responsive header where navigation links adjust their orientation based on screen size.
* **CSS Variables:** Uses `:root` variables for consistent branding, making it easy to update colors and themes globally.
* **Mobile-First Considerations:** Includes specific breakpoints at **768px** and **480px** to fine-tune font sizes and spacing for handheld devices.

## 📂 Project Files

* `index.html`: The semantic structure of the site, featuring a hero section and grid-based content blocks.
* `styles.css`: The complete styling logic, including layout rules and responsive media queries.

## 🛠️ Technical Breakdown

* **Layouts:** Powered by **CSS Grid** (`grid-template-columns`) and **Flexbox** (`display: flex`).
* **Responsiveness:** Managed via `@media` rules to handle device-specific adjustments.
* **Styling:** Custom UI components like cards with soft shadows and rounded corners for a modern look.

## 🚀 How to View

1. Download or clone the project files.
2. Open `index.html` in any web browser.
3. **To test responsiveness:** Right-click and select **Inspect**, then toggle the "Device Toolbar" or simply resize your browser window to see the layout adapt in real-time.


## FormValidation_JS

## ✨ Key Features

* **Custom Validation Logic:** Manual checks for required fields and specific data formats (like email patterns) without relying solely on default browser behavior.
* **Real-Time Feedback:** Uses JavaScript to toggle CSS classes and display error messages dynamically when a field is left blank or filled incorrectly.
* **Email Regex Verification:** Implements a Regular Expression (`emailPattern`) to ensure the user provides a valid email format.
* **Form Reset & Success States:** Upon successful validation, the form triggers a success alert, displays a confirmation message on the page, and resets all input fields.
* **Clean UI/UX:** A minimalist, card-based design with focused input states and clear typography.

## 📂 Project Structure

* `index.html`: Contains the form structure with `novalidate` to allow custom JavaScript validation to take control.
* `style.css`: Defines the visual presentation, including specific styles for `.error` states (red borders) and `.success-message`.
* `script.js`: The engine of the project; handles event listeners, string trimming, and error clearing/setting logic.

## 🛠️ Technical Breakdown

* **HTML5 & CSS3:** Semantic markup and modern box-shadow/border-radius styling.
* **Vanilla JavaScript:** * `preventDefault()`: Stops the page from refreshing on form submission.
* `trim()`: Sanitizes inputs by removing leading and trailing whitespace.
* `classList.add/remove`: Dynamically updates the UI based on validation results.

## 🚀 How to Use

1. Download the project files.
2. Open `index.html` in your browser.
3. Attempt to click **"Send Message"** with empty fields to see the validation in action.
4. Enter a valid name, email address, and message to see the success state.
