# String Calculator App
A simple React-based web application that allows users to input a comma-separated list of numbers, and when they click the "Add" button, it displays the sum of those numbers. The app includes basic input validation to ensure that only valid numbers are summed.

# Features
    1. Input field for comma-separated numbers.
    2. Displays the sum of the entered numbers.
    3. Handles empty inputs and invalid characters (non-numeric values are ignored).
    4. Responsive design that works on both desktop and mobile devices.
    5. Interactive input with focus effects and button animations.

# Table of Contents
    1. Technologies Used
    2. Installation
    3. Usage
    4. Folder Structure
    5. Styling
    6. Testing

# Technologies Used
    1. React.js: JavaScript library for building user interfaces.
    2. CSS Modules: For scoped and reusable CSS.
    3. HTML5: For the basic structure of the app.

# Installation
1. Clone the repository:
    git clone <repository-url>
    Navigate to the project directory:

2. cd number-adder-app
    Install dependencies:

### `npm install`
    Run the development server:

### `npm start`
    Your application will be available at http://localhost:3000.



# Usage
    1. Open the app in your browser.
    2. Type comma-separated numbers into the input field (e.g., 1, 2, 3).
    3. Click the "Add" button to see the sum of the numbers displayed below the button.
    4. If the input is empty, the sum will display as 0.
    5. Special characters and non-numeric values are ignored in the sum calculation.

# Folder Structure
number-adder-app/
│
├── src/
│   ├── container/
│   │   └── StringCalculator.js        # The main React component containing logic for adding numbers.
│   ├── tests/
│   │   └── StringCalculator.test.js   # The main React component containing component tests in it.
│   ├── styles/
│   │   └── StringCalculator.css   # CSS Module for styling the SumComponent.
│   ├── utils/
│   │   └── index.js               # logic section.
│   ├── index.js                   # Entry point for the React app.
│   └── reportWebVitals.js         # Performance monitoring utility.
├── public/
│   └── index.html                 # The HTML template.
├── package.json                   # Project dependencies and metadata.
└── README.md                      # This file.


# Styling
    The project uses CSS Modules for scoped styles. The styles are located in the src/styles/SumComponent.module.css file.

    Key styling features include:

    A modern gradient background for the page.
    Responsive design for mobile, tablet, and desktop views.
    Smooth hover and focus effects for the input field and buttons.
    The sum value is displayed with a hover zoom effect to make it more interactive.


# Testing
    To ensure the application works as expected, it's recommended to write tests for the component. You can use tools like Jest and React Testing Library for unit and integration tests.

    Running Tests:
    If you want to run tests (if added in the future), run:

### `npm test`
    shows the test results in the terminal
